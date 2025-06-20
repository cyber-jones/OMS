using System;
using OMS.StaffService.DTOs;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Utils;

namespace OMS.StaffService.HttpRepo.Implemenation;

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
            Uri = $"{SD.AuthService_ProductionUrl}/api/user/register",
            Body = userDto
        }); 
    }
}
