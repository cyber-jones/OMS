using System;
using OMS.PatientService.Utils;

namespace OMS.PatientService.DTOs;

public class RequestDto
{
    public ApiType ApiType { get; set; } =  ApiType.GET;
    public required string Uri { get; set; }
    public object? Body { get; set; }
}
