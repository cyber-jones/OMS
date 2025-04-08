using System;
using OMS.DoctorService.Data;
using OMS.DoctorService.HttpRepo.Interfaces;
using OMS.DoctorService.Models;

namespace OMS.DoctorService.HttpRepo.Implementation;

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
