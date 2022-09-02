using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.DataAccess.Abstract
{
    public interface IPersonRepository : IEntityRepository<Person>
    {

        Task<List<Person>> GetUserByName(string name);
        Task<List<Person>> GetUserByGroupId(int groupId);
    }
}
