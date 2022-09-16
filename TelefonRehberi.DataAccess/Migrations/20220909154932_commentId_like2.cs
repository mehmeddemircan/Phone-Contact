using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TelefonRehberi.DataAccess.Migrations
{
    public partial class commentId_like2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CommentLikes_Comments_CommentId",
                table: "CommentLikes");

            migrationBuilder.AlterColumn<int>(
                name: "CommentId",
                table: "CommentLikes",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CommentLikes_Comments_CommentId",
                table: "CommentLikes",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CommentLikes_Comments_CommentId",
                table: "CommentLikes");

            migrationBuilder.AlterColumn<int>(
                name: "CommentId",
                table: "CommentLikes",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_CommentLikes_Comments_CommentId",
                table: "CommentLikes",
                column: "CommentId",
                principalTable: "Comments",
                principalColumn: "Id");
        }
    }
}
