using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Abstract
{
    public interface IPersonService : IGenericService<Person>
    {
        //Task<User> Add(User user);

        //Task<List<User>> GetAll(); 

        //Task<User> GetById(int userId);

        Task<List<Person>> GetByName(string name);
        Task<List<Person>> GetByGroupID(int groupId);

        //Task UpdateUser(int userId, User user);

        //Task DeleteUser(int userId);
    }
}
