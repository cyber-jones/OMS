using System;

namespace OMS.DoctorService.HttpRepo.Interfaces;

public interface ILogService
{
    Task Log(string description, string user);
}
