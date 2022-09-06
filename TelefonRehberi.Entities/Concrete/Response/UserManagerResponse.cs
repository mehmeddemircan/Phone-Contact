using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Entities.Concrete.Response
{
    public class UserManagerResponse
    {

     

            public UserForRegisterDto User { get; set; }

            public string Message { get; set; }

            public bool IsSuccess { get; set; }

            public IEnumerable<string> Errors { get; set; }

            public DateTime? ExpireDate { get; set; }

        
    }
}
