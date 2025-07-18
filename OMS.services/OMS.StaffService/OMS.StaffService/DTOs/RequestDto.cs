using System;
using OMS.StaffService.Utils;

namespace OMS.StaffService.DTOs;

public class RequestDto
{
    public ApiType ApiType { get; set; } =  ApiType.GET;
    public required string Uri { get; set; }
    public object? Body { get; set; }
}
