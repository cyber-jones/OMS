using System;
using OMS.PatientService.DTOs;

namespace OMS.PatientService.HtpRepo.Interfaces;

public interface IHttpService
{
    Task<ResponseDto> SendAsync(RequestDto requestDto);
}
