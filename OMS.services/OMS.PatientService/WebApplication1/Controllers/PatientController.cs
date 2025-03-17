using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebApplication1.Data;
using WebApplication1.DTOs;
using WebApplication1.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly AppDbContext _patientDbContext;
        private readonly IMapper _mapper;

        public PatientController(AppDbContext patientDbContext, IMapper mapper)
        {
            _patientDbContext = patientDbContext;
            _mapper = mapper;
        }


        // GET: api/<PatientController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<PatientDto>>> GetPatients()
        {
            try
            {
                IEnumerable<PatientModel> patients = await _patientDbContext.Patients.ToListAsync();

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

                var patient = await _patientDbContext.Patients.FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

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
        public async Task<ActionResult<PatientDto>> NewPatient([FromBody]  PatientDto patientDto)
        {
            try
            {
                if (patientDto == null)
                    return BadRequest();

                var patientModel = _mapper.Map<PatientModel>(patientDto);
                await _patientDbContext.Patients.AddAsync(patientModel);
                await _patientDbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetPatient), new { id = patientModel.Patient_Id }, patientModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<PatientController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<PatientDto>> UpdatePatient(string id, [FromBody] PatientDto patientDto)
        {
            try
            {
                if (patientDto == null || id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _patientDbContext.Patients.FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                var patientModel = _mapper.Map<PatientModel>(patientDto);
                _patientDbContext.Patients.Update(patientModel);
                await _patientDbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, patientModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<PatientController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePatient(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _patientDbContext.Patients.FirstOrDefaultAsync(p => p.Patient_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                _patientDbContext.Patients.Remove(patient);
                await _patientDbContext.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
