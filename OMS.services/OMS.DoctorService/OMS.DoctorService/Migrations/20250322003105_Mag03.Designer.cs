﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OMS.DoctorService.Data;

#nullable disable

namespace OMS.DoctorService.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250322003105_Mag03")]
    partial class Mag03
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("OMS.DoctorService.Models.DoctorModel", b =>
                {
                    b.Property<Guid>("Doctor_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("CT_End")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CT_Start")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cell_Phone")
                        .IsRequired()
                        .HasMaxLength(11)
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Certificate_Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Clinic_Phone")
                        .IsRequired()
                        .HasMaxLength(11)
                        .HasColumnType("nvarchar(11)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("DOB")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("First_Name")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<bool>("Is_Active")
                        .HasColumnType("bit");

                    b.Property<string>("Last_Name")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("MLN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Middle_Name")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("nvarchar(25)");

                    b.Property<long>("NIN")
                        .HasColumnType("bigint");

                    b.Property<string>("Profile_Url")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Relationship")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sex")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("Specialty_Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("Sub_Specialty_Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Work_ID")
                        .IsRequired()
                        .HasMaxLength(7)
                        .HasColumnType("nvarchar(7)");

                    b.HasKey("Doctor_Id");

                    b.HasIndex("Specialty_Id");

                    b.HasIndex("Sub_Specialty_Id");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("OMS.DoctorService.Models.SpecialtyModel", b =>
                {
                    b.Property<Guid>("Specialty_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Specialty_Id");

                    b.ToTable("Specialties");

                    b.HasData(
                        new
                        {
                            Specialty_Id = new Guid("0010876c-edbc-45c1-a80f-be3f0589d840"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                            Name = "Allergist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("052cbbce-167f-434d-b96d-28b38bf014d0"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Manages pain and monitors vital signs during surgery and medical procedures",
                            Name = "Anesthesiologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("06835ccd-a4c8-427b-8fe7-71b92ea49136"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease",
                            Name = "Cardiologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("14987fcf-2cf4-4cce-8acf-0be1f607f13e"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer",
                            Name = "Dermatologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("2066e571-d8db-48cb-888c-6605bb2373bb"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders",
                            Name = "Endocrinologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("326ebfe0-2bfb-4dba-90c1-eb9c7f8713ba"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome",
                            Name = "Gastroenterologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("3ed7dae9-e5cf-4d44-b4dc-815861a903e8"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery",
                            Name = "General Surgeon"
                        },
                        new
                        {
                            Specialty_Id = new Guid("527058bd-f34e-447a-86ce-88de56b887c7"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system",
                            Name = "Internal Medicine (Internist)"
                        },
                        new
                        {
                            Specialty_Id = new Guid("5799a324-36fc-48c6-9077-84e099829d26"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis",
                            Name = "Neurologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("74a450bb-05ec-449a-96bd-ce6cf2f1320e"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the care of women during pregnancy, childbirth, and the postpartum period",
                            Name = "Obstetrician"
                        },
                        new
                        {
                            Specialty_Id = new Guid("75951c30-2d82-4c6e-9002-934e8acccf43"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on the diagnosis, treatment, and prevention of cancer",
                            Name = "Oncologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("9ade106d-621f-4809-8326-554f66c1998e"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems",
                            Name = "Ophthalmologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("a46e2ce1-23ca-4e4f-b006-0deba2dfa814"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries",
                            Name = "Orthopedic Surgeon"
                        },
                        new
                        {
                            Specialty_Id = new Guid("a8f847c9-f535-4e44-9c81-d46783129cb3"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders",
                            Name = "Otolaryngologist (ENT)"
                        },
                        new
                        {
                            Specialty_Id = new Guid("b11d573b-36dc-4eb7-89dc-bda193bb40ed"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting",
                            Name = "Pathologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("c1327bcb-0ea9-4049-b95e-092f98328ff3"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the care of infants, children, and adolescents",
                            Name = "Pediatrician"
                        },
                        new
                        {
                            Specialty_Id = new Guid("d0e6e8bf-9b4d-4652-af24-1be2feb84330"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia",
                            Name = "Psychiatrist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("d2b7a439-a4d2-4eb7-a6a7-bfb831542f02"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD",
                            Name = "Pulmonologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("d33d19e0-096f-420e-b726-bd33d140f26b"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions",
                            Name = "Radiologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("e37f92cd-5a71-4fd7-8450-70499e31ff6a"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues",
                            Name = "Rheumatologist"
                        },
                        new
                        {
                            Specialty_Id = new Guid("f1c84dc4-43f8-43e8-8fa2-1e2673197142"),
                            CreatedAt = new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems",
                            Name = "Urologist"
                        });
                });

            modelBuilder.Entity("OMS.DoctorService.Models.DoctorModel", b =>
                {
                    b.HasOne("OMS.DoctorService.Models.SpecialtyModel", "Specialty")
                        .WithMany()
                        .HasForeignKey("Specialty_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OMS.DoctorService.Models.SpecialtyModel", "Sub_Specialty")
                        .WithMany()
                        .HasForeignKey("Sub_Specialty_Id");

                    b.Navigation("Specialty");

                    b.Navigation("Sub_Specialty");
                });
#pragma warning restore 612, 618
        }
    }
}
