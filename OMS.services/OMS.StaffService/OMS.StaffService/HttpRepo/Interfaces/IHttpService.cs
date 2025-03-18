using System;
using OMS.StaffService.DTOs;

namespace OMS.StaffService.HttpRepo.Interfaces;

public interface IHttpService
{
    Task<ResponseDto> SendAsync(RequestDto requestDto);
}
