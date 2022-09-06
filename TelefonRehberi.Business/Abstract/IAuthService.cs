using Core.Entities.Concrete;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.Core.Utilities.Security.JWT;
using TelefonRehberi.Entities.Concrete.Response;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Abstract
{
    public interface IAuthService 
    {

        IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password);
        IDataResult<User> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(User user);

        public string CreateRandomToken(); 
        

    
    }
}
