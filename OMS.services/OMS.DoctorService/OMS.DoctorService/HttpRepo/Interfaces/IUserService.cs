using System;
using OMS.DoctorService.DTOs;

namespace OMS.DoctorService.HttpRepo.Interfaces;

public interface IUserService
{
    Task<ResponseDto> RegisterUser(UserDto userDto);
}
