using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.DoctorService.Data;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.Models;
using OMS.DoctorService.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OMS.DoctorService.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class SpecialtyController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public SpecialtyController(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        // GET: api/<SpecialtyController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<SpecialtyDto>>> GetSpecialties()
        {
            try
            {
                IEnumerable<SpecialtyModel> doctors = await _dbContext.Specialties.ToListAsync();

                var specialtyDto = _mapper.Map<IEnumerable<SpecialtyDto>>(doctors);

                return Ok(specialtyDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // GET api/<SpecialtyController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SpecialtyDto>> GetSpecialty(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var specialty = await _dbContext.Specialties.FirstOrDefaultAsync(p => p.Specialty_Id.Equals(Guid.Parse(id)));

                if (specialty == null)
                    return NotFound();

                var specialtyDto = _mapper.Map<SpecialtyDto>(specialty);

                return Ok(specialty);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }



        // POST api/<SpecialtyController>
        [HttpPost]
        [Authorize( Roles = Roles.ADMIN)]
        public async Task<ActionResult<SpecialtyDto>> NewSpecialty([FromBody] SpecialtyRegistrationDto specialtyRegistrationDto)
        {
            try
            {
                if (specialtyRegistrationDto == null || !ModelState.IsValid)
                    return BadRequest();

                var specialtyModel = _mapper.Map<SpecialtyModel>(specialtyRegistrationDto);
                await _dbContext.Specialties.AddAsync(specialtyModel);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetSpecialty), new { id = specialtyModel }, specialtyModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<SpecialtyController>/5
        [HttpPut("{id}")]
        [Authorize( Roles = Roles.ADMIN)]
        public async Task<ActionResult<DoctorDto>> UpdateSpecialty(string id, [FromBody] SpecialtyDto specialtyDto)
        {
            try
            {
                if (specialtyDto == null || id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _dbContext.Specialties.FirstOrDefaultAsync(p => p.Specialty_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                var specialtyModel = _mapper.Map<SpecialtyModel>(specialtyDto);
                _dbContext.Specialties.Update(specialtyModel);
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, specialtyModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<SpecialtyController>/5
        [HttpDelete("{id}")]
        [Authorize( Roles = Roles.ADMIN)]
        public async Task<ActionResult> DeletePatient(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var patient = await _dbContext.Specialties.FirstOrDefaultAsync(p => p.Specialty_Id.Equals(Guid.Parse(id)));

                if (patient == null)
                    return NotFound();

                _dbContext.Specialties.Remove(patient);
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
