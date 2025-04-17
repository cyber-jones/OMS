using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using OMS.DrugService.Utils;

namespace OMS.DrugService.Models;

public class OrderHeader
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid OrderHeader_Id { get; set; }

    [Required]
    public string User_Id { get; set; }
    public string? Payment_Intent_Id { get; set; }
    public int Total_Amount { get; set; }
    public decimal Total_Price { get; set; }
    public string Status { get; set; } = SD.Pending;
}
