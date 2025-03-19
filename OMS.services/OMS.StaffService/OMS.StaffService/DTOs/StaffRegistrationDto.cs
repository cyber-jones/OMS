using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace OMS.StaffService.DTOs;

public class StaffRegistrationDto
{
    [Required]
    public string User_Id { get; set; }


    [Required]
    public string First_Name { get; set; }
    public string Last_Name { get; set; }
    public string Middle_Name { get; set; }
    [EmailAddress]
    public string Email { get; set; }
    public int Cell_Phone { get; set; }
    public string Relationship { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
    public long NIN { get; set; }
    public string ID_Card { get; set; }
    public string Sex { get; set; }
    public string DOB { get; set; }
    public string password { get; set; }
    public string? Role { get; set; }



    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
}
