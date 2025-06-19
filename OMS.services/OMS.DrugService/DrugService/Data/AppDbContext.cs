using DrugService.Models;
using Microsoft.EntityFrameworkCore;
using OMS.DrugService.Config;
using OMS.DrugService.Models;

namespace DrugService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<DrugModel> Drugs { get; set; }
        public DbSet<LogModel> Logs { get; set; }
        public DbSet<CartModel> Carts { get; set; }
        public DbSet<OrderHeaderModel> OrderHeaders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new DrugConfig());
        }
    }
}
