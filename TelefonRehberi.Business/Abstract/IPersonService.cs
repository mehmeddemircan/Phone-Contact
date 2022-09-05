using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Abstract
{
    public interface IPersonService : IGenericService<Person>
    {
        //Task<User> Add(User user);

        //Task<List<User>> GetAll(); 

        //Task<User> GetById(int userId);

        Task<List<Person>> GetByName(string name);
        Task<List<Person>> GetByGroupID(int groupId);

        Task<List<Person>> GetAllByUser(int userId);

        Task<List<Person>> GetAllPersonIdDesc();
        List<IGrouping<char, Person>> GroupPeopleByName();

        //Task UpdateUser(int userId, User user);

        //Task DeleteUser(int userId);
    }
}
