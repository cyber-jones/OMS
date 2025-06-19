using AutoMapper;
using DrugService.Data;
using DrugService.DTOs;
using DrugService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.DrugService.DTOs;
using OMS.DrugService.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DrugService.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class DrugController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public DrugController(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        // GET: api/<DrugController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<DrugDto>>> GetDrugs()
        {
            try
            {
                IEnumerable<DrugModel> drugs = await _dbContext.Drugs
                    .OrderBy(d => d.Drug_Name)
                        .ToListAsync();

                var drugsDto = _mapper.Map<IEnumerable<DrugDto>>(drugs);

                return Ok(drugsDto);
            }
            catch (Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // GET api/<DrugController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DrugDto>> GetDrug(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var drug = await _dbContext.Drugs.FirstOrDefaultAsync(p => p.Drug_Id.Equals(Guid.Parse(id)));

                if (drug == null)
                    return NotFound();

                var drugDto = _mapper.Map<DrugDto>(drug);

                return Ok(drugDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }



        // POST api/<DrugController>
        [Authorize(Roles = Roles.ADMIN)]
        [HttpPost] 
        public async Task<ActionResult<DrugRegisterDto>> NewDdrug([FromBody] DrugRegisterDto drugRegisterDto)
        {
            try
            {
                if (drugRegisterDto == null || !ModelState.IsValid)
                    return BadRequest();

                var drugModel = _mapper.Map<DrugModel>(drugRegisterDto);
                await _dbContext.Drugs.AddAsync(drugModel);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetDrug), new { id = drugModel.Drug_Id }, drugRegisterDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // PUT api/<DrugController>/5
        [Authorize(Roles = Roles.ADMIN)]
        [HttpPut("{id}")]
        public async Task<ActionResult<DrugDto>> UpdateDrug(string id, [FromBody] DrugDto drugDto)
        {
            try
            {
                if (drugDto == null || id.IsNullOrEmpty() || !ModelState.IsValid)
                    return BadRequest();

                var drug = await _dbContext.Drugs.AsNoTracking()
                .FirstOrDefaultAsync(p => p.Drug_Id.Equals(Guid.Parse(id)));

                if (drug == null)
                    return NotFound();

                var drugModel = _mapper.Map<DrugModel>(drugDto);
                _dbContext.Drugs.Update(drugModel);
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, drugModel);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }



        // DELETE api/<DrugController>/5
        [Authorize(Roles = Roles.ADMIN)]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDrug(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var drug = await _dbContext.Drugs.FirstOrDefaultAsync(p => p.Drug_Id.Equals(Guid.Parse(id)));

                if (drug == null)
                    return NotFound();

                _dbContext.Drugs.Remove(drug);
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
