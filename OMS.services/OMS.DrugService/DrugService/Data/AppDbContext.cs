using DrugService.Models;
using Microsoft.EntityFrameworkCore;

namespace DrugService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<DrugModel> Drugs { get; set; }
    }
}
