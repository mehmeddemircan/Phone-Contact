using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using TelefonRehberi.Core.Entities;

namespace Core.Entities.Concrete
{
    public class User : BaseEntity
    {
     
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public bool Status { get; set; }

    


    }
}
