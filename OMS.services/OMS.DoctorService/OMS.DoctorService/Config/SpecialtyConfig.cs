 using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OMS.DoctorService.Models;

namespace OMS.DoctorService.Config;

public class SpecialtyConfig : IEntityTypeConfiguration<SpecialtyModel>
{
    public void Configure(EntityTypeBuilder<SpecialtyModel> builder)
    {
        builder.HasData(new List<SpecialtyModel>()
            {
                new()  {
                    Specialty_Id = Guid.Parse("0010876c-edbc-45c1-a80f-be3f0589d840"), 
                    Name = "Allergist", 
                    Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("052cbbce-167f-434d-b96d-28b38bf014d0"), 
                    Name = "Anesthesiologist", 
                    Description = "Manages pain and monitors vital signs during surgery and medical procedures",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("06835ccd-a4c8-427b-8fe7-71b92ea49136"), 
                    Name = "Cardiologist", 
                    Description = "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("14987fcf-2cf4-4cce-8acf-0be1f607f13e"), 
                    Name = "Dermatologist", 
                    Description = "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("2066e571-d8db-48cb-888c-6605bb2373bb"), 
                    Name = "Endocrinologist", 
                    Description = "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("326ebfe0-2bfb-4dba-90c1-eb9c7f8713ba"), 
                    Name = "Gastroenterologist", 
                    Description = "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("3ed7dae9-e5cf-4d44-b4dc-815861a903e8"), 
                    Name = "General Surgeon", 
                    Description = "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("527058bd-f34e-447a-86ce-88de56b887c7"), 
                    Name = "Internal Medicine (Internist)", 
                    Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("5799a324-36fc-48c6-9077-84e099829d26"), 
                    Name = "Neurologist", 
                    Description = "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("74a450bb-05ec-449a-96bd-ce6cf2f1320e"), 
                    Name = "Obstetrician", 
                    Description = "Specializes in the care of women during pregnancy, childbirth, and the postpartum period",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("75951c30-2d82-4c6e-9002-934e8acccf43"), 
                    Name = "Oncologist", 
                    Description = "Focuses on the diagnosis, treatment, and prevention of cancer",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("9ade106d-621f-4809-8326-554f66c1998e"), 
                    Name = "Ophthalmologist", 
                    Description = "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("a46e2ce1-23ca-4e4f-b006-0deba2dfa814"), 
                    Name = "Orthopedic Surgeon", 
                    Description = "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("a8f847c9-f535-4e44-9c81-d46783129cb3"), 
                    Name = "Otolaryngologist (ENT)", 
                    Description = "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("b11d573b-36dc-4eb7-89dc-bda193bb40ed"), 
                    Name = "Pathologist", 
                    Description = "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("c1327bcb-0ea9-4049-b95e-092f98328ff3"), 
                    Name = "Pediatrician", 
                    Description = "Specializes in the care of infants, children, and adolescents",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("d0e6e8bf-9b4d-4652-af24-1be2feb84330"), 
                    Name = "Psychiatrist", 
                    Description = "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("d2b7a439-a4d2-4eb7-a6a7-bfb831542f02"), 
                    Name = "Pulmonologist", 
                    Description = "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("d33d19e0-096f-420e-b726-bd33d140f26b"), 
                    Name = "Radiologist", 
                    Description = "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("e37f92cd-5a71-4fd7-8450-70499e31ff6a"), 
                    Name = "Rheumatologist", 
                    Description = "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues",
                    CreatedAt = new DateTime(2025, 03, 22)
                },
                new()  {
                    Specialty_Id = Guid.Parse("f1c84dc4-43f8-43e8-8fa2-1e2673197142"), 
                    Name = "Urologist", 
                    Description = "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems",
                    CreatedAt = new DateTime(2025, 03, 22)
                }
            });
    }
}
