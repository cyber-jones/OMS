using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OMS.DrugService.Migrations
{
    /// <inheritdoc />
    public partial class Mag03 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderHeaders",
                columns: table => new
                {
                    OrderHeader_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    User_Id = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Session_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Payment_Intent_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Total_Amount = table.Column<int>(type: "int", nullable: false),
                    Total_Price = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderHeaders", x => x.OrderHeader_Id);
                });

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    Cart_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    User_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OrderHeader_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Product_Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Count = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.Cart_Id);
                    table.ForeignKey(
                        name: "FK_Carts_Drugs_Product_Id",
                        column: x => x.Product_Id,
                        principalTable: "Drugs",
                        principalColumn: "Drug_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Carts_OrderHeaders_OrderHeader_Id",
                        column: x => x.OrderHeader_Id,
                        principalTable: "OrderHeaders",
                        principalColumn: "OrderHeader_Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Carts_OrderHeader_Id",
                table: "Carts",
                column: "OrderHeader_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_Product_Id",
                table: "Carts",
                column: "Product_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropTable(
                name: "OrderHeaders");
        }
    }
}
