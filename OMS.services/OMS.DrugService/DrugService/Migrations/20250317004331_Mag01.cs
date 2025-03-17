using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DrugService.Migrations
{
    /// <inheritdoc />
    public partial class Mag01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Drugs",
                columns: table => new
                {
                    Drug_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Drug_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Drug_Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Expiration_Date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    Created_By = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Upadted_By = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Created_At = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Upadated_By = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drugs", x => x.Drug_Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Drugs");
        }
    }
}
