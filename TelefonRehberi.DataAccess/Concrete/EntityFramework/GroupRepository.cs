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
    public class GroupRepository : EfEntityRepositoryBase<Group, ApplicationDbContext>, IGroupRepository
    {

        public async Task<List<GroupDetailsDTO>> GetGroupDetails()
        {
            using (var context = new ApplicationDbContext())
            {
                var result = from g in context.Groups
                             join user in context.Users on g.Id equals user.GroupId
                             select new GroupDetailsDTO
                             {
                                 UserId = user.Id,
                                 UserName = user.Name,
                                 UserSurname = user.Surname,
                                 UserPhone = user.PhoneNumber,
                                 GroupId = g.Id,
                                 GroupImage = g.ThumbNailImage,
                                 GroupTitle = g.Title,
                                 GroupName = g.Name,
                                 GroupCapacity = g.Capacity,
                                 GroupDescription = g.Description,
                             };
                return await result.ToListAsync();

            }

        }

        public async Task<List<GroupDetailsDTO>> GetGroupDetailsById(int id)
        {   

            //users in group
            using (var context = new ApplicationDbContext())
            {


                var result = from g in context.Groups
                             join user in context.Users on g.Id equals user.GroupId where g.Id == id
                             select new GroupDetailsDTO
                             {
                                 UserId = user.Id,
                                 UserName = user.Name,
                                 UserSurname = user.Surname,
                                 UserPhone = user.PhoneNumber,
                                 GroupId = g.Id,
                                 GroupImage = g.ThumbNailImage,
                                 GroupTitle = g.Title,
                                 GroupName = g.Name,
                                 GroupCapacity = g.Capacity,
                                 GroupDescription = g.Description,
                             };

                return await result.ToListAsync();
            }
        }
    }
}
