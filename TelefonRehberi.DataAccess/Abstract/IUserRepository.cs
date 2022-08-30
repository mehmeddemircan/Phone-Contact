using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.DataAccess.Abstract
{
    public interface IUserRepository : IEntityRepository<User>
    {

        Task<List<User>> GetUserByName(string name);
    }
}
