using System;

namespace OMS.StaffService.HttpRepo.Interfaces;

public interface ILogService
{
    Task Log(string description, string user);
}
