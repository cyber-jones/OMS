using System;
using OMS.DoctorService.DTOs;

namespace OMS.DoctorService.HttpRepo.Interfaces;

public interface IHttpService
{
    Task<ResponseDto> SendAsync(RequestDto requestDto);
}
