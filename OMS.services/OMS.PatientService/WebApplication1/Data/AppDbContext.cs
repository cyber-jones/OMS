using Microsoft.EntityFrameworkCore;
using OMS.PatientService.Models;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<PatientModel> Patients { get; set; }
        public DbSet<LogModel> Logs { get; set; }
    }
}
