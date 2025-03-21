using System;
using OMS.DoctorService.DTOs;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.HttpRepo.Implementation;

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
            Uri = $"{SD.AuthService_Url}/api/user/register",
            Body = userDto
        }); 
    }
}
