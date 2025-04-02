using System;
using OMS.StaffService.Data;
using OMS.StaffService.HttpRepo.Interfaces;
using OMS.StaffService.Models;

namespace OMS.StaffService.HttpRepo.Implementation;

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

