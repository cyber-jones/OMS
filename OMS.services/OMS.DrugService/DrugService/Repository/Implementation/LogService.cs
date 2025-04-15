using System;
using DrugService.Data;
using OMS.DrugService.Models;
using OMS.DrugService.Repository.Interfaces;

namespace OMS.DrugService.Repository.Implementation;

public class LogService : ILogService
{
    private readonly AppDbContext _dbContext;
    public LogService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task Log(string description, string user)
    {
        var logModel = new LogModel()
        {
            User = user,
            Description = description
        };
        await _dbContext.Logs.AddAsync(logModel);
    }

}
