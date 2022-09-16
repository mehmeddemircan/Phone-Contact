using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TelefonRehberi.DataAccess.Migrations
{
    public partial class commentLike_Dislike : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CommentDislike",
                table: "Comments",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CommentLike",
                table: "Comments",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CommentDislike",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "CommentLike",
                table: "Comments");
        }
    }
}
