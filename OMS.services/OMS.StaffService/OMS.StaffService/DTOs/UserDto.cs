using System;
using OMS.StaffService.Utils;

namespace OMS.StaffService.DTOs;

public class UserDto
{
    public required string Email { get; set;}
    public required string Password { get; set;}
    public string Role { get; set;} = Roles.STAFF;
    public Guid User_Profile_Id { get; set;}
}
