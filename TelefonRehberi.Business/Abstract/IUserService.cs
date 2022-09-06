using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Helpers;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Abstract
{
    public interface IUserService
    {

        List<OperationClaim> GetClaims(User user);
        void Add(User user);
        User GetByMail(string email);

        PagedList<User> GetAllByPage(UsersParameter usersParameter);


    }
}
