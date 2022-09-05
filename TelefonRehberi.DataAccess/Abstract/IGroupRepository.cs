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
    public interface IGroupRepository : IEntityRepository<Group>
    {
        Task<List<GroupDetailsDTO>> GetGroupDetails();
        Task<List<GroupDetailsDTO>> GetGroupDetailsById(int id);
        Task<List<GroupDetailsDTO>> GetGroupsByUserId(int userId);
    }
}
