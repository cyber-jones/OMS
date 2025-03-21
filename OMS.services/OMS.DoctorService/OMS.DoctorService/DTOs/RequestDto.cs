using System;
using OMS.DoctorService.Utils;

namespace OMS.DoctorService.DTOs;

public class RequestDto
{
    public ApiType ApiType { get; set; } =  ApiType.GET;
    public string Uri { get; set; }
    public object? Body { get; set; }
}
