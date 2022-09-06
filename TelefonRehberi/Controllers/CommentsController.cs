using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {

        ICommentService _commentService;


        public CommentsController(ICommentService commentService)
        {
            _commentService = commentService;
        }
        
        
        [HttpPost("create-comment")]

        public async Task<ActionResult<Comment>> CreateComment(Comment comment)
        {
            return await _commentService.TAdd(comment); 
        }

        // default get all comment by group id 
        [HttpGet("{groupId}/getAll")]

        public async Task<List<Comment>> GetCommentsByGroup(int groupId)
        {

            return await _commentService.GetAllCommentByGroupId(groupId);

        }
        // from the newest to the oldest ordering
        [HttpGet("{groupId}/orderBy-desc")]

        public async Task<List<Comment>> GetCommentsOrderByDesc(int groupId)
        {

            return await _commentService.GetCommentsOrderByDesc(groupId);

        }

        [HttpGet("{userId}/all-comment")]

        public async Task<List<Comment>> GetCommentsByUser(int userId)
        {
            return await _commentService.GetAllCommentByUserId(userId); 
        }


        // user comments page grouping comments by group Id
        // grouping comments by group id and return list 
        [HttpGet("{userId}/all-comment/grouping-by-group")]

        public List<IGrouping<int, Comment>> GroupCommentsByGroupId(int userId)
        {
            return _commentService.GroupCommentsByGroupId(userId);
        }


        [HttpPut("comment/{commentId}/update-comment")]

        public async Task UpdateComment(int commentId, Comment comment)
        {
            comment.Id = commentId;

           
            await _commentService.TUpdate(commentId, comment);
        }

        [HttpDelete("comment/{commentId}/delete")]

        public async Task DeleteComment(int commentId)
        {
            await _commentService.TDelete(commentId);   
        }
    }
}
