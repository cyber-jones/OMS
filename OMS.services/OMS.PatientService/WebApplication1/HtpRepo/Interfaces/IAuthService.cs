using System;
using OMS.PatientService.DTOs;

namespace OMS.PatientService.HtpRepo.Interfaces;

public interface IAuthService
{
    Task<ResponseDto> RegisterUser(UserDto userDto);
}
