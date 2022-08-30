using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;


namespace TelefonRehberi.Entities.Concrete
{
    public class User : BaseEntity

    { 
       
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
    
    }
}
