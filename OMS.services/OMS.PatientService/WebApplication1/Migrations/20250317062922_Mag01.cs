using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OMS.PatientService.Migrations
{
    /// <inheritdoc />
    public partial class Mag01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Patient_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    User_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Middle_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cell_Phone = table.Column<int>(type: "int", nullable: false),
                    Work_Phone = table.Column<int>(type: "int", nullable: false),
                    Relationship = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NIN = table.Column<int>(type: "int", nullable: false),
                    Sex = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EC_FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EC_Cell_Phone = table.Column<int>(type: "int", nullable: false),
                    EC_Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Patient_Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");
        }
    }
}
