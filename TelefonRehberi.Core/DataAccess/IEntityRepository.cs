using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Core.DataAccess
{
    public interface IEntityRepository<T> where T : BaseEntity,new()
    {
        Task<T> AddAsync(T entity);

        Task<List<T>> GetAllAsync();

        Task UpdateAsync(int id,T entity);

        Task<T> GetById(int id);

        T Get(Expression<Func<T, bool>> filter);


        Task DeleteAsync(int id); 
    }
}
