using System;

namespace OMS.PatientService.DTOs;

public class ResponseDto
{
    public bool Success { get; set; } 
    public string Message { get; set; }
    public object? Body { get; set; }
}
