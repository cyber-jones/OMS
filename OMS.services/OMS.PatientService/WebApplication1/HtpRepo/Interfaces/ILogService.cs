using System;
using OMS.PatientService.Models;

namespace OMS.PatientService.HtpRepo.Interfaces;

public interface ILogService
{
    Task Log(string description, string user);
}
