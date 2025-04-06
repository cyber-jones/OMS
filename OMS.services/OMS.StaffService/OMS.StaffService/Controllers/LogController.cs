using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OMS.StaffService.Data;
using OMS.StaffService.Models;

namespace OMS.StaffService.Controllers;

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
        [HttpGet("staffs")]
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
