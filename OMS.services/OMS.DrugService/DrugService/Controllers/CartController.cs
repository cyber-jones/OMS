using AutoMapper;
using DrugService.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OMS.DrugService.DTOs;
using OMS.DrugService.Models;
using OMS.DrugService.Utils;
using Stripe;
using Stripe.Checkout;

namespace OMS.DrugService.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public CartController(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        // GET: api/<CartController>
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<CartDto>>> GetCarts()
        {
            try
            {
                IEnumerable<CartModel> carts = await _dbContext.Carts.ToListAsync();

                var cartsDto = _mapper.Map<IEnumerable<CartDto>>(carts);

                return Ok(cartsDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET api/<CartController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CartDto>> GetUserCart(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var carts = await _dbContext.Carts.Where(c => c.User_Id.Equals(Guid.Parse(id)) && c.OrderHeader_Id == null).ToListAsync();

                if (carts == null)
                    return NotFound();

                var cartsDto = _mapper.Map<IEnumerable<CartDto>>(carts);

                return Ok(cartsDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // PUT api/<cartController>/5
        [HttpPut("increase-count/{id}")]
        public async Task<ActionResult<CartDto>> IncreaseCount(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var cart = await _dbContext.Carts
                    .FirstOrDefaultAsync(p => p.Cart_Id.Equals(Guid.Parse(id)));

                if (cart == null)
                    return NotFound();

                if (cart.Count <= 30) cart.Count++;
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, cart);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // PUT api/<cartController>/5
        [HttpPut("decrease-count/{id}")]
        public async Task<ActionResult<CartDto>> DecreaseCount(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var cart = await _dbContext.Carts
                    .FirstOrDefaultAsync(p => p.Cart_Id.Equals(Guid.Parse(id)));

                if (cart == null)
                    return NotFound();
                
                if (cart.Count > 0) cart.Count--;
                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status205ResetContent, cart);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // PUT api/<cartController>/5
        [HttpGet("order/{id}")]
        public async Task<ActionResult<CartDto>> Order(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var carts = await _dbContext.Carts.AsNoTracking().Include(c => c.Product)
                    .Where(c => c.User_Id.Equals(Guid.Parse(id)) && c.OrderHeader_Id.Equals(null))
                        .ToListAsync();

                int totalAmount = 0;
                double totalPrice = 0;

                foreach (var cart in carts)
                {
                    totalAmount += cart.Count;
                    totalPrice += cart.Price;
                }

                var OrderHeader = new OrderHeaderModel()
                {
                    User_Id = id,
                    Total_Amount = totalAmount,
                    Total_Price = totalPrice
                };

                await _dbContext.AddAsync(OrderHeader);

                StripeConfiguration.ApiKey = StripeSettings.Secret_Key;
                
                var options = new SessionCreateOptions
                {
                    SuccessUrl = $"{SD.Client_Dev_Url}/cart/orderConfirmation?id={OrderHeader.OrderHeader_Id}",
                    CancelUrl = $"{SD.Client_Dev_Url}/cart",
                    LineItems = new List<SessionLineItemOptions>(),
                    Mode = "payment",
                };

                foreach (var cart in carts)
                {
                    cart.OrderHeader_Id = OrderHeader.OrderHeader_Id;
                    _dbContext.Carts.Update(cart);

                    var sessionLineItems = new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            UnitAmount = (long)(cart.Price * 100), // N20.50 => 2050
                            Currency = "ngn",
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = cart.Product.Drug_Name
                            }
                        },
                        Quantity = cart.Count
                    };
                    options.LineItems.Add(sessionLineItems);
                }

                var service = new SessionService();
                Session session = service.Create(options);

                OrderHeader.Session_Id = session.Id;
                Response.Headers.Append("Location", session.Url);

                await _dbContext.SaveChangesAsync();

                return StatusCode(StatusCodes.Status303SeeOther);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        
        // DELETE api/<cartController>/5
        [HttpGet("confirm-order/{id}")]
        public async Task<ActionResult> ConfirmOrder(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var orderHeader = await _dbContext.OrderHeaders.AsNoTracking()
                    .FirstOrDefaultAsync(o => o.OrderHeader_Id.Equals(Guid.Parse(id)));

                if (orderHeader == null)
                    return NotFound();

                var service = new SessionService();
                Session session = service.Get(orderHeader.Session_Id);

                if (session.PaymentStatus.ToLower() == "paid")
                {
                    orderHeader.Status = SD.Paid;
                    orderHeader.Payment_Intent_Id = session.PaymentIntentId;
                    _dbContext.Update(orderHeader);
                }   
   
                await _dbContext.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        
        // DELETE api/<cartController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletecart(string id)
        {
            try
            {
                if (id.IsNullOrEmpty())
                    return BadRequest();

                var cart = await _dbContext.Carts.FirstOrDefaultAsync(p => p.Cart_Id.Equals(Guid.Parse(id)));

                if (cart == null)
                    return NotFound();

                _dbContext.Carts.Remove(cart);
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
