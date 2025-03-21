using System;

namespace OMS.DoctorService.DTOs;

public class ResponseDto
{
    public bool Success { get; set; } 
    public string Message { get; set; }
    public object? Body { get; set; }
}
