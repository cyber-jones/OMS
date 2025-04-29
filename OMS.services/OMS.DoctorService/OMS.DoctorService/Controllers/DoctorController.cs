using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.DoctorService.Data;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Models;
using OMS.DoctorService.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OMS.DoctorService.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController] 
    public class DoctorController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IAuthService _authService;

        public DoctorController(AppDbContext dbContext, IMapper mapper, IAuthService authService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _authService = authService;
        }


        // GET: api/<DoctorController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<DoctorDto>>> GetDoctors()
        {
            try
            {
                IEnumerable<DoctorModel> doctors = await _dbContext.Doctors
                    .Include(d => d.Specialty)
                        .Include(d => d.Sub_Specialty)
                            .ToListAsync();

                var doctorDto = _mapper.Map<IEnumerable<DoctorDto>>(doctors);

                return Ok(doctorDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorDto>> GetDoctor(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var doctor = await _dbContext.Doctors
                    .Include(d => d.Specialty)
                        .Include(d => d.Sub_Specialty)
                            .FirstOrDefaultAsync(p => p.Doctor_Id.Equals(Guid.Parse(id)));

                if (doctor == null)
                    return NotFound();

                var doctorDto = _mapper.Map<DoctorDto>(doctor);

                return Ok(doctorDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // POST api/<DoctorController>
        [Authorize(Roles = Roles.ADMIN)]
        [HttpPost]
        public async Task<ActionResult<DoctorDto>> NewDoctor([FromBody] DoctorRegisterDto doctorRegisterDto)
        {
            try
            {
                if (doctorRegisterDto == null || !ModelState.IsValid)
                    return BadRequest();

                var doctor = await _dbContext.Doctors.
                    FirstOrDefaultAsync(p  => p.Email.Equals(doctorRegisterDto.Email) || p.NIN.Equals(doctorRegisterDto.NIN) || p.Work_ID.Equals(doctorRegisterDto.Work_ID));

                if (doctor is not null)
                    return BadRequest("Email, NIN, Work ID has already registered!");


                var doctorModel = _mapper.Map<DoctorModel>(doctorRegisterDto);
                await _dbContext.Doctors.AddAsync(doctorModel);
                var staffDto = _mapper.Map<DoctorDto>(doctorModel);

                UserDto userDto = new() 
                {
                    Email = doctorModel.Email,
                    Password = doctorRegisterDto.password,
                    User_Profile_Id = doctorModel.Doctor_Id,
                    Role = Roles.DOCTOR
                };

                ResponseDto responseDto = await _authService.RegisterUser(userDto);

                if (responseDto.Success) 
                    await _dbContext.SaveChangesAsync();
                else
                    return BadRequest(responseDto);

                return CreatedAtAction(nameof(GetDoctor), new { id = doctorModel }, doctorModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<DoctorController>/5
        [Authorize(Roles = Roles.ADMIN)]
        [HttpPut("{id}")]
        public async Task<ActionResult<DoctorDto>> UpdateDoctor(string id, [FromBody] DoctorDto doctorDto)
        {
            try
            {
                if (doctorDto == null || id.IsNullOrEmpty() || !ModelState.IsValid)
                    return BadRequest();

                var doctor = await _dbContext.Doctors.AsNoTracking()
                    .FirstOrDefaultAsync(p => p.Doctor_Id.Equals(Guid.Parse(id)));    

                if (doctor is null)
                    return NotFound();

                var doctorModel = _mapper.Map<DoctorModel>(doctorDto);
                doctorModel.UpdatedAt = DateTime.Now;
                
                _dbContext.Doctors.Update(doctorModel);
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, doctorModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<DoctorController>/5
        [Authorize(Roles = Roles.ADMIN)]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var doctor = await _dbContext.Doctors.FirstOrDefaultAsync(p => p.Doctor_Id.Equals(Guid.Parse(id)));

                if (doctor == null)
                    return NotFound();

                _dbContext.Doctors.Remove(doctor);
                await _dbContext.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
