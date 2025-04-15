using System;
using System.ComponentModel.DataAnnotations;

namespace OMS.DrugService.Models;

public class LogModel
{
    [Key]
    public Guid Log_Id { get; set; }
    public string User { get; set;}
    public string Description { get; set;}
    public DateTime CreatedDate { get; set; } = DateTime.Now;
}
