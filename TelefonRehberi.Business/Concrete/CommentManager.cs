using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Concrete
{
    public class CommentManager : ICommentService
    {

        ICommentRepository _commentRepository;

        public CommentManager(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
    
        public Task<List<Comment>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Comment>> GetAllCommentByGroupId(int groupId)
        {
            return await _commentRepository.GetAllCommentsByGroupId(groupId); 
        }

        public  async Task<List<Comment>> GetAllCommentByUserId(int userId)
        {
            return await _commentRepository.GetAllCommentsByUserId(userId);
        }

        public Task<Comment> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Comment>> GetCommentsOrderByDesc(int groupId)
        {
            return await _commentRepository.GetCommentsOrderByDesc(groupId);
        }

        public List<IGrouping<int, Comment>> GroupCommentsByGroupId(int userId)
        {
            return _commentRepository.GroupCommentsByGroupId(userId);
        }

        public  async Task<Comment> TAdd(Comment entity)
        {
           return   await _commentRepository.AddAsync(entity);
        }

        public async Task TDelete(int id)
        {
            await _commentRepository.DeleteAsync(id);
        }

        public async Task TUpdate(int id, Comment entity)
        {
           await _commentRepository.UpdateAsync(id, entity);
        }
    }
}
