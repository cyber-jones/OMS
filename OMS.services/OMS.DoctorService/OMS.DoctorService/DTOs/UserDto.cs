using System;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.DTOs;

public class UserDto
{
    public required string Email { get; set;}
    public required string Password { get; set;}
    public string Role { get; set;} = Roles.DOCTOR;
    public string AccType { get; set; } = Roles.DOCTOR;
    public Guid User_Profile_Id { get; set;}
}
