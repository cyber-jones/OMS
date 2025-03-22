using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OMS.DoctorService.Migrations
{
    /// <inheritdoc />
    public partial class Mag02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Specialties",
                columns: new[] { "Specialty_Id", "CreatedAt", "Description", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { new Guid("0010876c-edbc-45c1-a80f-be3f0589d840"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system", "Allergist", null },
                    { new Guid("052cbbce-167f-434d-b96d-28b38bf014d0"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Manages pain and monitors vital signs during surgery and medical procedures", "Anesthesiologist", null },
                    { new Guid("06835ccd-a4c8-427b-8fe7-71b92ea49136"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the heart and blood vessels, diagnosing and treating conditions like heart disease", "Cardiologist", null },
                    { new Guid("14987fcf-2cf4-4cce-8acf-0be1f607f13e"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on the skin, hair, and nails, diagnosing and treating conditions like acne, eczema, and skin cancer", "Dermatologist", null },
                    { new Guid("2066e571-d8db-48cb-888c-6605bb2373bb"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the endocrine system (hormones), diagnosing and treating conditions like diabetes and thyroid disorders", "Endocrinologist", null },
                    { new Guid("326ebfe0-2bfb-4dba-90c1-eb9c7f8713ba"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on the digestive system, diagnosing and treating conditions like ulcers, colitis, and irritable bowel syndrome", "Gastroenterologist", null },
                    { new Guid("3ed7dae9-e5cf-4d44-b4dc-815861a903e8"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Performs a wide range of surgical procedures, often specializing in a specific area like abdominal, thoracic, or vascular surgery", "General Surgeon", null },
                    { new Guid("527058bd-f34e-447a-86ce-88de56b887c7"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on diagnosing and treating allergies, asthma, and conditions related to the immune system", "Internal Medicine (Internist)", null },
                    { new Guid("5799a324-36fc-48c6-9077-84e099829d26"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the nervous system (brain and spinal cord), diagnosing and treating conditions like stroke, epilepsy, and multiple sclerosis", "Neurologist", null },
                    { new Guid("74a450bb-05ec-449a-96bd-ce6cf2f1320e"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the care of women during pregnancy, childbirth, and the postpartum period", "Obstetrician", null },
                    { new Guid("75951c30-2d82-4c6e-9002-934e8acccf43"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on the diagnosis, treatment, and prevention of cancer", "Oncologist", null },
                    { new Guid("9ade106d-621f-4809-8326-554f66c1998e"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the eyes and vision, diagnosing and treating conditions like cataracts, glaucoma, and vision problems", "Ophthalmologist", null },
                    { new Guid("a46e2ce1-23ca-4e4f-b006-0deba2dfa814"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the musculoskeletal system (bones, joints, muscles), diagnosing and treating conditions like fractures, arthritis, and sports injuries", "Orthopedic Surgeon", null },
                    { new Guid("a8f847c9-f535-4e44-9c81-d46783129cb3"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the ears, nose, and throat, diagnosing and treating conditions like ear infections, sinus problems, and voice disorders", "Otolaryngologist (ENT)", null },
                    { new Guid("b11d573b-36dc-4eb7-89dc-bda193bb40ed"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Analyzes tissues, cells, and fluids to diagnose diseases, often working in a laboratory setting", "Pathologist", null },
                    { new Guid("c1327bcb-0ea9-4049-b95e-092f98328ff3"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the care of infants, children, and adolescents", "Pediatrician", null },
                    { new Guid("d0e6e8bf-9b4d-4652-af24-1be2feb84330"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia", "Psychiatrist", null },
                    { new Guid("d2b7a439-a4d2-4eb7-a6a7-bfb831542f02"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Focuses on the lungs and respiratory system, diagnosing and treating conditions like asthma, pneumonia, and COPD", "Pulmonologist", null },
                    { new Guid("d33d19e0-096f-420e-b726-bd33d140f26b"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Uses imaging techniques (X-rays, MRI, CT scans) to diagnose and treat medical conditions", "Radiologist", null },
                    { new Guid("e37f92cd-5a71-4fd7-8450-70499e31ff6a"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in autoimmune and inflammatory diseases that affect joints, muscles, and other tissues", "Rheumatologist", null },
                    { new Guid("f1c84dc4-43f8-43e8-8fa2-1e2673197142"), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Specializes in the urinary tract and male reproductive organs, diagnosing and treating conditions like kidney stones, bladder cancer, and prostate problems", "Urologist", null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("0010876c-edbc-45c1-a80f-be3f0589d840"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("052cbbce-167f-434d-b96d-28b38bf014d0"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("06835ccd-a4c8-427b-8fe7-71b92ea49136"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("14987fcf-2cf4-4cce-8acf-0be1f607f13e"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("2066e571-d8db-48cb-888c-6605bb2373bb"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("326ebfe0-2bfb-4dba-90c1-eb9c7f8713ba"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("3ed7dae9-e5cf-4d44-b4dc-815861a903e8"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("527058bd-f34e-447a-86ce-88de56b887c7"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("5799a324-36fc-48c6-9077-84e099829d26"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("74a450bb-05ec-449a-96bd-ce6cf2f1320e"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("75951c30-2d82-4c6e-9002-934e8acccf43"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("9ade106d-621f-4809-8326-554f66c1998e"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("a46e2ce1-23ca-4e4f-b006-0deba2dfa814"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("a8f847c9-f535-4e44-9c81-d46783129cb3"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("b11d573b-36dc-4eb7-89dc-bda193bb40ed"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("c1327bcb-0ea9-4049-b95e-092f98328ff3"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("d0e6e8bf-9b4d-4652-af24-1be2feb84330"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("d2b7a439-a4d2-4eb7-a6a7-bfb831542f02"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("d33d19e0-096f-420e-b726-bd33d140f26b"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("e37f92cd-5a71-4fd7-8450-70499e31ff6a"));

            migrationBuilder.DeleteData(
                table: "Specialties",
                keyColumn: "Specialty_Id",
                keyValue: new Guid("f1c84dc4-43f8-43e8-8fa2-1e2673197142"));
        }
    }
}
