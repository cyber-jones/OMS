using System;
using OMS.PatientService.DTOs;
using OMS.PatientService.HtpRepo.Interfaces;
using OMS.PatientService.Utils;

namespace OMS.PatientService.HtpRepo.Implementation;

public class AuthService : IAuthService
{
    private readonly IHttpService _httpService;

    public AuthService(IHttpService httpService)
    {
        _httpService = httpService;
    }


    public async Task<ResponseDto> RegisterUser(UserDto userDto)
    {
        return await _httpService.SendAsync(new RequestDto(){
            ApiType = ApiType.POST,
            Uri = $"{SD.AuthService_Production_Url}/api/user/register",
            Body = userDto
        }); 
    }

}
