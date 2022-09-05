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
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.DataAccess.Concrete.EntityFramework
{
    public class PersonRepository : EfEntityRepositoryBase<Person, ApplicationDbContext>, IPersonRepository
    {
        public async Task<List<Person>> GetAllByUserAsync(int userId)
        {
            using (var context = new ApplicationDbContext())
            {
                return await context.Set<Person>().Where(u => u.UserId == userId).ToListAsync();
            }
        }

        public async Task<List<Person>> GetAllPersonOrderByDesc()
        {
            using (var context = new ApplicationDbContext())
            {
                var result = from person in context.Persons select person;

                return  await result.OrderByDescending(person => person.Id).ToListAsync(); 
            }
        }

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

        // grouping people by first letter  of name 
        public List<IGrouping<char, Person>>  GroupPeopleByName()
        {
            using (var context = new ApplicationDbContext())
            {
              

                return context.Set<Person>().AsEnumerable()
    .GroupBy(person => person.Name[0])
    .OrderBy(newGroup => newGroup.Key)
    .Select(newGroup => newGroup).ToList();


            }
        }
    }
}
