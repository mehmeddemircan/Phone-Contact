using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Concrete
{
    public class GroupManager : IGroupService
    {
        IGroupRepository _groupRepository;

        public GroupManager(IGroupRepository groupRepository)
        {
            _groupRepository = groupRepository;
        }

        public async Task<List<Group>> GetAll()
        {
            return await _groupRepository.GetAllAsync();
        }

        public Task<Group> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<GroupDetailsDTO>> GetGroupDetailsAsync()
        {
            return await _groupRepository.GetGroupDetails(); 
        }

        public async Task<List<GroupDetailsDTO>> GetGroupDetailsById(int id)
        {
            return await _groupRepository.GetGroupDetailsById(id);
        }

        public async Task<Group> TAdd(Group entity)
        {
            return  await _groupRepository.AddAsync(entity);
        }

        public  async Task TDelete(int id)
        {
            await _groupRepository.DeleteAsync(id);    
        }

        public Task TUpdate(int id, Group entity)
        {
            throw new NotImplementedException();
        }
    }
}
