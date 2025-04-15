using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OMS.DoctorService.Data;
using OMS.DoctorService.Models;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = Roles.ADMIN)]
    [ApiController]
    public class LogController : ControllerBase
    {
         private readonly AppDbContext _dbContext;

        public LogController( AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET: api/<LogController>
        [HttpGet("patient")]
        public async Task<ActionResult<IEnumerable<LogModel>>> GetLogs()
        {
            try
            {
                IEnumerable<LogModel> logs = await _dbContext.Logs.ToListAsync();

                return Ok(logs);
            }
            catch (Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
