using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Business.Validation.FluentValidation;
using TelefonRehberi.Core.Aspects.Validation;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Concrete
{
    public class UserManager : IUserService
    {

        IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
       

        public async Task<List<User>> GetAll()
        {
            return await _userRepository.GetAllAsync();
        }

        public async Task<List<User>> GetByGroupID(int groupId)
        {
            return await _userRepository.GetUserByGroupId(groupId);
        }

        public async Task<User> GetById(int id)
        {
            return await _userRepository.GetById(id);
        }

        public async Task<List<User>> GetByName(string name)
        {
            return await _userRepository.GetUserByName(name);
        }


        [ValidationAspect(typeof(UserValidator))]
        public  async Task<User> TAdd(User entity)
        {
            return await _userRepository.AddAsync(entity);
        }

        public async Task TDelete(int id)
        {
            await _userRepository.DeleteAsync(id);
        }

        public async Task TUpdate(int id, User entity)
        {
            await _userRepository.UpdateAsync(id, entity);
        }

     
    }
}
