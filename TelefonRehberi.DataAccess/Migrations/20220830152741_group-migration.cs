using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TelefonRehberi.DataAccess.Migrations
{
    public partial class groupmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TotalUser",
                table: "Groups",
                newName: "Capacity");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Capacity",
                table: "Groups",
                newName: "TotalUser");
        }
    }
}
