using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DrugService.Models;

namespace OMS.DrugService.Models;

public class OrderDetails
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid OrderDetails_Id { get; set; }

    [Required]
    public Guid OrderHeader_Id { get; set; }
    [ForeignKey(nameof(OrderHeader_Id))]
    public OrderHeader? OrderHeader { get; set;}

    public Guid Product_Id { get; set;}
    [ForeignKey(nameof(Product_Id))]
    public DrugModel? Product { get; set;}

    public int Count { get; set; }
    public double Price { get; set; }

    public DateTime CreatedAt { get; set; } 
}
