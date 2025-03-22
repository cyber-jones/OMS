using Microsoft.EntityFrameworkCore;
using OMS.DoctorService.Config;
using OMS.DoctorService.Models;

namespace OMS.DoctorService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<DoctorModel> Doctors { get; set; }
        public DbSet<SpecialtyModel> Specialties { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new SpecialtyConfig());
        }
    }
}
