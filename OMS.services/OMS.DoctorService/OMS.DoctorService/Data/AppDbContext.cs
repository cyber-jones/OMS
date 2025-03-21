using Microsoft.EntityFrameworkCore;
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

            modelBuilder.Entity<SpecialtyModel>().HasData(new List<SpecialtyModel>()
            {
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Allergist", 
                    Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Anesthesiologist", 
                    Description = "Manages pain and monitors vital signs during surgery and medical procedures",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Cardiologist", 
                    Description = "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Dermatologist", 
                    Description = "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Endocrinologist", 
                    Description = "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Gastroenterologist", 
                    Description = "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "General Surgeon", 
                    Description = "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Internal Medicine (Internist)", 
                    Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Neurologist", 
                    Description = "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Obstetrician", 
                    Description = "Specializes in the care of women during pregnancy, childbirth, and the postpartum period",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Oncologist", 
                    Description = "Focuses on the diagnosis, treatment, and prevention of cancer",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Ophthalmologist", 
                    Description = "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Orthopedic Surgeon", 
                    Description = "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Otolaryngologist (ENT)", 
                    Description = "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Pathologist", 
                    Description = "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Pediatrician", 
                    Description = "Specializes in the care of infants, children, and adolescents",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Psychiatrist", 
                    Description = "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Pulmonologist", 
                    Description = "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Radiologist", 
                    Description = "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Rheumatologist", 
                    Description = "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues",
                    CreatedAt = DateTime.Now
                },
                new()  {
                    Specialty_Id = Guid.NewGuid(), 
                    Name = "Urologistt", 
                    Description = "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems",
                    CreatedAt = DateTime.Now
                }
            });
        }
    }
}
