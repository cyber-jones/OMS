using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

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
                    Specialty_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
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
                    User_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Middle_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cell_Phone = table.Column<int>(type: "int", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NIN = table.Column<int>(type: "int", nullable: false),
                    Sex = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relationship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Profile_Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MLN = table.Column<int>(type: "int", nullable: false),
                    Clinic_Phone = table.Column<int>(type: "int", nullable: false),
                    Specialty_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sub_Specialty_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Certificate_Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CT_Start = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CT_End = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Doctors_Specialties_Sub_Specialty_Id",
                        column: x => x.Sub_Specialty_Id,
                        principalTable: "Specialties",
                        principalColumn: "Specialty_Id",
                        onDelete: ReferentialAction.NoAction);
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
