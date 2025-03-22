using System;
using OMS.PatientService.Utils;

namespace OMS.PatientService.DTOs;

public class UserDto
{
    public required string Email { get; set;}
    public required string Password { get; set;}
    public string Role { get; set;} = Roles.PATIENT;
    public Guid User_Profile_Id { get; set;}
}
