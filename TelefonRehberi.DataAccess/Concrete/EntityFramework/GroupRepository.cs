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
                            
                                 select new GroupDetailsDTO
                                 {
                                     //UserId = user.Id,
                                     //UserName = user.Name,
                                     //UserSurname = user.Surname,
                                     //UserPhone = user.PhoneNumber,
                                     Users = g.Users,
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

            //persons in group
            using (var context = new ApplicationDbContext())
            {
                

                var result = from g in context.Groups
                             where g.Id == id
                             select new GroupDetailsDTO
                             {
                                 Users = g.Users,
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

        public async Task<List<GroupDetailsDTO>> GetGroupsByUserId(int userId)
        {
            using (var context = new ApplicationDbContext())
            {
                var result = from g in context.Groups
                             where g.UserId == userId
                             select new GroupDetailsDTO
                             {
                                 Users = g.Users,
                                 GroupId = g.Id,
                                 GroupImage = g.ThumbNailImage,
                                 GroupTitle = g.Title,
                                 GroupName = g.Name,
                                 GroupCapacity = g.Capacity,
                                 GroupDescription = g.Description,
                             };

                return await result.ToListAsync();
       }    }
    }
}
