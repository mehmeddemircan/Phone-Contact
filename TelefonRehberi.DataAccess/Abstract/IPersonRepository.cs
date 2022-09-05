using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.DataAccess.Abstract
{
    public interface IPersonRepository : IEntityRepository<Person>
    {

        Task<List<Person>> GetUserByName(string name);
        Task<List<Person>> GetUserByGroupId(int groupId);

        // get users by userId for all user we won't see the same users , every users can see only their contacts they added
        Task<List<Person>> GetAllByUserAsync(int userId);

        Task<List<Person>> GetAllPersonOrderByDesc();
        List<IGrouping<char, Person>> GroupPeopleByName(); 
    }
}
