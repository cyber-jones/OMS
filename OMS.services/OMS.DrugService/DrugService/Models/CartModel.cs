using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DrugService.Models;

namespace OMS.DrugService.Models;

public class CartModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Cart_Id { get; set; }

    [Required]
    public Guid User_Id { get; set; }
    public Guid? OrderHeader_Id { get; set; }
    [ForeignKey(nameof(OrderHeader_Id))]
    public OrderHeaderModel? OrderHeader { get; set;}
    public Guid Product_Id { get; set; }
    [ForeignKey(nameof(Product_Id))]
    public DrugModel? Product { get; set; }
    [Range(1, 30, ErrorMessage = "You can only purchase 30 at a time")]
    public int Count { get; set; }
    public double Price { get; set; }
    public DateTime CreatedAt { get; set; }              
}
