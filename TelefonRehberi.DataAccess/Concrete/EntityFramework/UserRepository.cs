using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.DataAccess.EntityFramework;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.DataAccess.Concrete.Contexts;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.DataAccess.Concrete.EntityFramework
{
    public class UserRepository : EfEntityRepositoryBase<User, ApplicationDbContext>, IUserRepository
    {
        public async Task<List<User>> GetUserByName(string name)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<User>().Where(e => e.Name == name).ToListAsync();
            }
        }
    }
}
