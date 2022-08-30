using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Core.DataAccess.EntityFramework
{
    public class EfEntityRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity>
    where TEntity : BaseEntity, new()
    where TContext : DbContext, new()
    {
        public async Task<TEntity> AddAsync(TEntity entity)
        {
            using (var context = new TContext())
            {
                await context.Set<TEntity>().AddAsync(entity);
                await context.SaveChangesAsync();

                return entity;
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var context = new TContext())
            {
                var entity = await GetById(id);
                context.Set<TEntity>().Remove(entity);
                await context.SaveChangesAsync(); 
            }
        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            using (var context = new TContext())
            {
                return  await context.Set<TEntity>().ToListAsync(); 
            }
        }

        public async Task<TEntity> GetById(int id)
        {
            using (var context = new TContext())
            {
                return await context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);  

            }
        }



        public async Task UpdateAsync(int id, TEntity entity)
        {
            using (var context = new TContext())
            {
                context.Set<TEntity>().Update(entity); 
                await context.SaveChangesAsync();
            }
        }
    }
}
