using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess.EntityFramework;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.DataAccess.Concrete.Contexts;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.DataAccess.Concrete.EntityFramework
{
    public class CommentRepository : EfEntityRepositoryBase<Comment, ApplicationDbContext>, ICommentRepository
    {   

        //default comment by group ID
        public async Task<List<Comment>> GetAllCommentsByGroupId(int groupId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Comment>().Where((c) => c.GroupId == groupId).ToListAsync(); 
            }
        }

        public async Task<List<Comment>> GetAllCommentsByUserId(int userId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Comment>().Where((c) => c.UserId == userId).ToListAsync(); 
            }
        }


        // from the newest to the oldest ordering
        public async Task<List<Comment>> GetCommentsOrderByDesc(int groupId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Comment>().Where((c) => c.GroupId == groupId).OrderByDescending(c => c.Id).ToListAsync(); 
            }
        }


        // grouping comments by group id and return list 
        public List<IGrouping<int, Comment>> GroupCommentsByGroupId(int userId)
        {
            using (var context = new ApplicationDbContext())
            {

                return context.Set<Comment>().AsEnumerable()
                .Where((c) => c.UserId == userId)
                .GroupBy(comment => comment.GroupId)
                .Select(newGroup => newGroup).ToList();
            }
        }
    }
}
