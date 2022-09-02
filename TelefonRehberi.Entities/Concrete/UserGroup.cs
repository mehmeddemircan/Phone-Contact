using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelefonRehberi.Entities.Concrete
{
    public  class UserGroup
    {
        
        
     
        public int UserId { get; set; }

    

        public int GroupId { get; set; }

        public Person User { get; set; }

        public Group Group { get; set; }

    }
}
