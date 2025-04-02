using Microsoft.EntityFrameworkCore;
using OMS.StaffService.Models;

namespace OMS.StaffService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<StaffModel> Staffs { get; set; }
        public DbSet<LogModel> Logs { get; set; }
    }
}
