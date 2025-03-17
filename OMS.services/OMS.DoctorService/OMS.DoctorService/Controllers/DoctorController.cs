using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.DoctorService.Data;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OMS.DoctorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public DoctorController(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        // GET: api/<DoctorController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<DoctorDto>>> GetDoctors()
        {
            try
            {
                IEnumerable<DoctorModel> doctors = await _dbContext.Doctors.ToListAsync();

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

                var doctor = await _dbContext.Doctors.FirstOrDefaultAsync(p => p.Doctor_Id.Equals(Guid.Parse(id)));

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
        [HttpPost]
        public async Task<ActionResult<DoctorDto>> NewDoctor([FromBody] DoctorDto doctorDto)
        {
            try
            {
                if (doctorDto == null)
                    return BadRequest();

                var doctorModel = _mapper.Map<DoctorModel>(doctorDto);
                await _dbContext.Doctors.AddAsync(doctorModel);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetDoctor), new { id = doctorModel }, doctorModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<DoctorDto>> UpdateDoctor(string id, [FromBody] DoctorDto doctorDto)
        {
            try
            {
                if (doctorDto == null || id.IsNullOrEmpty())
                    return BadRequest();

                var doctor = await _dbContext.Doctors.FirstOrDefaultAsync(p => p.Doctor_Id.Equals(Guid.Parse(id)));

                if (doctor == null)
                    return NotFound();

                var doctorModel = _mapper.Map<DoctorModel>(doctorDto);
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
