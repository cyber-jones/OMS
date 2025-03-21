using System;

namespace OMS.DoctorService.DTOs;

public class UserDto
{
    public string Email { get; set;}
    public string Password { get; set;}
    public string Role { get; set;}
    public Guid User_Profile_Id { get; set;}
}
