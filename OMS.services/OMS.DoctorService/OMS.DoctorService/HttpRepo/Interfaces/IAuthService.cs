using System;
using OMS.DoctorService.DTOs;

namespace OMS.DoctorService.HttpRepo.Interfaces;

public interface IAuthService
{
    Task<ResponseDto> RegisterUser(UserDto userDto);
}
