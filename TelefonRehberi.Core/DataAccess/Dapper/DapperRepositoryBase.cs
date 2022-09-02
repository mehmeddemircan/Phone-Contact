using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;

namespace TelefonRehberi.Core.DataAccess.Dapper
{
    public class DapperRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity>
    where TEntity : BaseEntity, new()
    where TContext : DbContext, new()
    {
        public Task<TEntity> AddAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Task<List<TEntity>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int id, TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
