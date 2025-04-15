using System;
using System.ComponentModel.DataAnnotations;

namespace OMS.DrugService.Models;

public class Cart
{
    [Key]
    [Required]
    public Guid Cart_Id { get; set; }
    public Guid Buyer_Id { get; set; }
    public Guid Product_Id { get; set; }
    [Range(1, 30, ErrorMessage = "You can only purchase 30 at a time")]
    public int Count { get; set; }
    public double Price { get; set; }
    public DateTime CreatedAt { get; set; }              
}
