using OMS.PatientService.HtpRepo.Interfaces;
using OMS.PatientService.Models;
using WebApplication1.Data;

namespace OMS.PatientService.HtpRepo.Implementation;

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
