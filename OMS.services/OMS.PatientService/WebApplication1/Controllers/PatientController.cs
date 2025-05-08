using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.PatientService.DTOs;
using OMS.PatientService.HtpRepo.Interfaces;
using OMS.PatientService.Utils;
using WebApplication1.Data;
using WebApplication1.DTOs;
using WebApplication1.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IAuthService _authService;
        private readonly ILogService _logService;

        public PatientController(AppDbContext dbContext, IMapper mapper, IAuthService authService, ILogService logService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _authService = authService;
            _logService = logService;
        }


        // GET: api/<PatientController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<PatientDto>>> GetPatients()
        {
            try
            {
                IEnumerable<PatientModel> patients = await _dbContext
                    .Patients.OrderBy(p => p.First_Name)
                        .ToListAsync();

                var patientDto = _mapper.Map<IEnumerable<PatientDto>>(patients);

                return Ok(patientDto);
            }
            catch (Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // GET api/<PatientController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PatientDto>> GetPatient(string id)
        {
            try
            {
                if(id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _dbContext.Patients.FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                var patientDto = _mapper.Map<PatientDto>(patient);

                return Ok(patientDto);
            }
            catch (Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            
        }



        // POST api/<PatientController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<PatientDto>> NewPatient([FromBody]  PatientRegisterDto patientRegisterDto)
        {
            try
            {
                if (patientRegisterDto == null || !ModelState.IsValid)
                    return BadRequest();

                var patient = await _dbContext.Patients.
                    FirstOrDefaultAsync(p  => p.Email.Equals(patientRegisterDto.Email) || p.NIN.Equals(patientRegisterDto.NIN));

                if (patient is not null) 
                    return BadRequest("Email or NIN has already registered!");
                    

                var patientModel = _mapper.Map<PatientModel>(patientRegisterDto);
                await _dbContext.Patients.AddAsync(patientModel);
                
                await _logService.Log(SD.Patient_Created, patientRegisterDto.Email);

                var patientDto = _mapper.Map<PatientDto>(patientModel);

                UserDto userDto = new() 
                {
                    Email = patientModel.Email,
                    Password = patientRegisterDto.password,
                    User_Profile_Id = patientModel.Patient_Id,
                    Role = Roles.PATIENT
                };

                ResponseDto responseDto = await _authService.RegisterUser(userDto);

                if (responseDto.Success) 
                    await _dbContext.SaveChangesAsync();
                else
                    return BadRequest(responseDto);

                return CreatedAtAction(nameof(GetPatient), new { id = patientDto.Patient_Id }, patientDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<PatientController>/5
        [Authorize( Roles = $"{Roles.ADMIN}, {Roles.PATIENT}")]
        [HttpPut("{id}")]
        public async Task<ActionResult<PatientDto>> UpdatePatient(string id, [FromBody] PatientDto patientDto)
        {
            try
            {
                if (patientDto == null || id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _dbContext.Patients.AsNoTracking()
                    .FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                var patientModel = _mapper.Map<PatientModel>(patientDto);

                await _logService.Log(SD.Patient_Updated, GetUserEmail());
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, patientModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<PatientController>/5
        [Authorize( Roles = $"{Roles.ADMIN}")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePatient(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _dbContext.Patients.FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                _dbContext.Patients.Remove(patient);
                await _logService.Log(SD.Patient_Deleted, GetUserEmail());
                await _dbContext.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }







        private string GetUserEmail()
        {
            return HttpContext.User.Claims.FirstOrDefault(static u => u.Type == ClaimValueTypes.Email).ToString();
        }
    }
}
