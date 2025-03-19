using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.StaffService.Data;
using OMS.StaffService.DTOs;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OMS.StaffService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public StaffController(AppDbContext dbContext, IMapper mapper, IUserService userService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _userService = userService;
        }


        // GET: api/<StaffController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<StaffDto>>> GetStaffs()
        {
            try
            {
                IEnumerable<StaffModel> patients = await _dbContext.Staffs.ToListAsync();

                var staffDto = _mapper.Map<IEnumerable<StaffDto>>(patients);

                return Ok(staffDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // GET api/<StaffController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffDto>> GetStaff(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var staff = await _dbContext.Staffs.FirstOrDefaultAsync(p => p.Staff_Id.Equals(Guid.Parse(id)));

                if (staff == null)
                    return NotFound();

                var staffDto = _mapper.Map<StaffDto>(staff);

                return Ok(staffDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }



        // POST api/<StaffController>
        [HttpPost]
        public async Task<ActionResult<StaffDto>> NewStaff([FromBody] StaffRegistrationDto staffRegistrationDto)
        {
            try
            {
                if (staffRegistrationDto == null || !ModelState.IsValid)
                    return BadRequest();

                var staffModel = _mapper.Map<StaffModel>(staffRegistrationDto);
                await _dbContext.Staffs.AddAsync(staffModel);
                var staffDto = _mapper.Map<StaffDto>(staffModel);

                UserDto userDto = new() 
                {
                    Email = staffModel.Email,
                    Password = staffRegistrationDto.password,
                    User_Profile_Id = staffModel.Staff_Id,
                    Role = staffRegistrationDto.Role
                };

                ResponseDto responseDto = await _userService.RegisterUser(userDto);

                if (responseDto.Success) 
                    await _dbContext.SaveChangesAsync();
                else
                    return BadRequest(responseDto);

                return CreatedAtAction(nameof(GetStaff), new { id = staffDto.Staff_Id }, staffDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<StaffController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<StaffDto>> UpdateStaff(string id, [FromBody] StaffDto staffDto)
        {
            try
            {
                if (staffDto == null || id.IsNullOrEmpty())
                    return BadRequest();

                var staff = await _dbContext.Staffs.FirstOrDefaultAsync(p => p.Staff_Id.Equals(Guid.Parse(id)));

                if (staff == null)
                    return NotFound();

                var staffModel = _mapper.Map<StaffModel>(staffDto);
                _dbContext.Staffs.Update(staffModel);
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, staffModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PATCH api/<StaffController>/5
        [HttpPatch("{id}")]
        public async Task<ActionResult<StaffDto>> PatchStaff(string id, [FromBody] JsonPatchDocument<StaffDto> patchStaffDto)
        {
            try
            {
                if (patchStaffDto is null || id.IsNullOrEmpty())
                    return BadRequest();

                var staff = await _dbContext.Staffs.FirstOrDefaultAsync(p => p.Staff_Id.Equals(Guid.Parse(id)));

                if (staff == null)
                    return NotFound();

                var staffDto = _mapper.Map<StaffDto>(staff);
                patchStaffDto.ApplyTo(staffDto);
                var updatedStaffModel = _mapper.Map<StaffModel>(staffDto);
                
                _dbContext.Staffs.Update(updatedStaffModel);
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, staffDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<StaffController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStaff(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var staff = await _dbContext.Staffs.FirstOrDefaultAsync(p => p.Staff_Id.Equals(Guid.Parse(id)));

                if (staff == null)
                    return NotFound();

                _dbContext.Staffs.Remove(staff);
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
