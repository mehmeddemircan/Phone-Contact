using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Abstract
{
    public interface ICommentService : IGenericService<Comment>
    {

         Task<List<Comment>> GetAllCommentByGroupId(int groupId);
         Task<List<Comment>> GetCommentsOrderByDesc(int groupId);


         Task<List<Comment>> GetAllCommentByUserId(int userId);
        
         List<IGrouping<int, Comment>> GroupCommentsByGroupId(int userId);

        Task<List<CommentLike>> GetCommentLikes(int commentId);

    }
}
