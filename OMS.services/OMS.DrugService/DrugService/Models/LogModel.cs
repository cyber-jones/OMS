using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OMS.DrugService.Models;

public class LogModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Log_Id { get; set; }
    public string User { get; set;}
    public string Description { get; set;}
    public DateTime CreatedDate { get; set; } = DateTime.Now;
}
