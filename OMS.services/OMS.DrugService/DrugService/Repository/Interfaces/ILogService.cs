using System;

namespace OMS.DrugService.Repository.Interfaces;

public interface ILogService
{
    Task Log(string description, string user);
}
