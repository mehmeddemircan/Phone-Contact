using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Abstract
{
    public interface IGenericService<T>
    {

        Task<T> TAdd(T entity);

        Task<List<T>> GetAll();

        Task<T> GetById(int id);

        Task TUpdate(int id, T entity);

        Task TDelete(int id);
    }
}
