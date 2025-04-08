using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OMS.DoctorService.Data;
using OMS.DoctorService.Models;

namespace OMS.DoctorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
         private readonly AppDbContext _dbContext;

        public LogController( AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET: api/<LogController>
        [HttpGet("patients")]
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
