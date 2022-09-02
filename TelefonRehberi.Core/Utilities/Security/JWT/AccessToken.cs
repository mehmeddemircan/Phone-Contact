using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelefonRehberi.Core.Utilities.Security.JWT
{
    public class AccessToken
    {
        public User User { get; set; }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }

   
    }
}
