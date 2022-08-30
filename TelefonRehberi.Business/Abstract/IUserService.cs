using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Abstract
{
    public interface IUserService : IGenericService<User>
    {
        //Task<User> Add(User user);

        //Task<List<User>> GetAll(); 

        //Task<User> GetById(int userId);

        Task<List<User>> GetByName(string name);

        //Task UpdateUser(int userId, User user);

        //Task DeleteUser(int userId);
    }
}
