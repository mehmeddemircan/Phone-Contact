using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Abstract
{
    public interface IGroupService : IGenericService<Group>
    {

        Task<List<GroupDetailsDTO>> GetGroupDetailsAsync(); 
        Task<List<GroupDetailsDTO>> GetGroupDetailsById(int id);
        Task<List<GroupDetailsDTO>> GetGroupsByUser(int userId);
        
        

    }
}
