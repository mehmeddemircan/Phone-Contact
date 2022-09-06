using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TelefonRehberi.DataAccess.Migrations
{
    public partial class updategrouplistcomment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Comments_GroupId",
                table: "Comments",
                column: "GroupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Groups_GroupId",
                table: "Comments",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Groups_GroupId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_GroupId",
                table: "Comments");
        }
    }
}
