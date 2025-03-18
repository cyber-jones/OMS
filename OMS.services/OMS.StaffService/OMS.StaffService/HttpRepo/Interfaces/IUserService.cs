using System;
using OMS.StaffService.DTOs;

namespace OMS.StaffService.HttpRepo.Interfaces;

public interface IUserService
{
    Task<ResponseDto> postNewUser(UserDto userDto);
}
