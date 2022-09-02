using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.DataAccess.Abstract;

namespace TelefonRehberi.Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserRepository _userRepository;

        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userRepository.GetClaims(user);
        }

        public void Add(User user)
        {
            _userRepository.AddAsync(user);
        }

        public User GetByMail(string email)
        {
            return _userRepository.Get(u => u.Email == email);
        }
    }
}
