using System;
using OMS.StaffService.DTOs;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Utils;

namespace OMS.StaffService.HttpRepo.Implemenation;

public class UserService : IUserService
{
    private readonly IHttpService _httpService;

    public UserService(IHttpService httpService)
    {
        _httpService = httpService;
    }


    public async Task<ResponseDto> RegisterUser(UserDto userDto)
    {
        return await _httpService.SendAsync(new RequestDto(){
            ApiType = ApiType.POST,
            Uri = $"{SD.UserService_Url}/api/user/register",
            Body = userDto
        }); 
    }
}
