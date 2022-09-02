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
    public class PersonRepository : EfEntityRepositoryBase<Person, ApplicationDbContext>, IPersonRepository
    {
        public async Task<List<Person>> GetUserByGroupId(int groupId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Person>().Where(u => u.GroupId == groupId).ToListAsync(); 
            }
        }

        public async Task<List<Person>> GetUserByName(string name)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Person>().Where(e => e.Name == name).ToListAsync();
            }
        }
    }
}
