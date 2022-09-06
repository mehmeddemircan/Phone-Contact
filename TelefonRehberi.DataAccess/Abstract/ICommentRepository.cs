using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.DataAccess.Abstract
{
    public interface ICommentRepository : IEntityRepository<Comment>
    {

        Task<List<Comment>> GetAllCommentsByGroupId(int groupId);
        Task<List<Comment>> GetCommentsOrderByDesc(int groupId);
        Task<List<Comment>> GetAllCommentsByUserId(int userId);

        List<IGrouping<int, Comment>> GroupCommentsByGroupId(int userId); 
    }
}
