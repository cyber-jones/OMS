using System;
using OMS.StaffService.DTOs;

namespace OMS.StaffService.HttpRepo.Interfaces;

public interface IAuthService
{
    Task<ResponseDto> RegisterUser(UserDto userDto);
}
