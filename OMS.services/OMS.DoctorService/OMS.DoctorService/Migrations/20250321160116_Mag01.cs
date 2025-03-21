using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OMS.DoctorService.Migrations
{
    /// <inheritdoc />
    public partial class Mag01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Specialties",
                columns: table => new
                {
                    Specialty_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specialties", x => x.Specialty_Id);
                });

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Doctor_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    First_Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Last_Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Middle_Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cell_Phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    Relationship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NIN = table.Column<long>(type: "bigint", nullable: false),
                    Work_ID = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    Sex = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Profile_Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MLN = table.Column<int>(type: "int", nullable: false),
                    Clinic_Phone = table.Column<int>(type: "int", maxLength: 11, nullable: false),
                    Specialty_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sub_Specialty_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Certificate_Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CT_Start = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CT_End = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Is_Active = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Doctor_Id);
                    table.ForeignKey(
                        name: "FK_Doctors_Specialties_Specialty_Id",
                        column: x => x.Specialty_Id,
                        principalTable: "Specialties",
                        principalColumn: "Specialty_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Doctors_Specialties_Sub_Specialty_Id",
                        column: x => x.Sub_Specialty_Id,
                        principalTable: "Specialties",
                        principalColumn: "Specialty_Id");
                });

            migrationBuilder.InsertData(
                table: "Specialties",
                columns: new[] { "Specialty_Id", "CreatedAt", "Description", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("0010876c-edbc-45c1-a80f-be3f0589d840"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2297), "Focuses on the diagnosis, treatment, and prevention of cancer", "Oncologist", null },
                    { new Guid("052cbbce-167f-434d-b96d-28b38bf014d0"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2318), "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting", "Pathologist", null },
                    { new Guid("06835ccd-a4c8-427b-8fe7-71b92ea49136"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2313), "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders", "Otolaryngologist (ENT)", null },
                    { new Guid("14987fcf-2cf4-4cce-8acf-0be1f607f13e"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2220), "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease", "Cardiologist", null },
                    { new Guid("2066e571-d8db-48cb-888c-6605bb2373bb"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2331), "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia", "Psychiatrist", null },
                    { new Guid("326ebfe0-2bfb-4dba-90c1-eb9c7f8713ba"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2227), "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer", "Dermatologist", null },
                    { new Guid("3ed7dae9-e5cf-4d44-b4dc-815861a903e8"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2308), "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries", "Orthopedic Surgeon", null },
                    { new Guid("527058bd-f34e-447a-86ce-88de56b887c7"), new DateTime(2025, 3, 21, 17, 1, 10, 584, DateTimeKind.Local).AddTicks(9932), "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system", "Allergist", null },
                    { new Guid("5799a324-36fc-48c6-9077-84e099829d26"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2257), "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome", "Gastroenterologist", null },
                    { new Guid("74a450bb-05ec-449a-96bd-ce6cf2f1320e"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2268), "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system", "Internal Medicine (Internist)", null },
                    { new Guid("75951c30-2d82-4c6e-9002-934e8acccf43"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2347), "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD", "Pulmonologist", null },
                    { new Guid("9ade106d-621f-4809-8326-554f66c1998e"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2174), "Manages pain and monitors vital signs during surgery and medical procedures", "Anesthesiologist", null },
                    { new Guid("a46e2ce1-23ca-4e4f-b006-0deba2dfa814"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2325), "Specializes in the care of infants, children, and adolescents", "Pediatrician", null },
                    { new Guid("a8f847c9-f535-4e44-9c81-d46783129cb3"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2362), "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems", "Urologistt", null },
                    { new Guid("b11d573b-36dc-4eb7-89dc-bda193bb40ed"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2303), "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems", "Ophthalmologist", null },
                    { new Guid("c1327bcb-0ea9-4049-b95e-092f98328ff3"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2232), "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders", "Endocrinologist", null },
                    { new Guid("d0e6e8bf-9b4d-4652-af24-1be2feb84330"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2291), "Specializes in the care of women during pregnancy, childbirth, and the postpartum period", "Obstetrician", null },
                    { new Guid("d2b7a439-a4d2-4eb7-a6a7-bfb831542f02"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2357), "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues", "Rheumatologist", null },
                    { new Guid("d33d19e0-096f-420e-b726-bd33d140f26b"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2263), "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery", "General Surgeon", null },
                    { new Guid("e37f92cd-5a71-4fd7-8450-70499e31ff6a"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2352), "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions", "Radiologist", null },
                    { new Guid("f1c84dc4-43f8-43e8-8fa2-1e2673197142"), new DateTime(2025, 3, 21, 17, 1, 10, 589, DateTimeKind.Local).AddTicks(2274), "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis", "Neurologist", null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Specialty_Id",
                table: "Doctors",
                column: "Specialty_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Sub_Specialty_Id",
                table: "Doctors",
                column: "Sub_Specialty_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Doctors");

            migrationBuilder.DropTable(
                name: "Specialties");
        }
    }
}
