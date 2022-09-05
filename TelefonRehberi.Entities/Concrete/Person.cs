using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;


namespace TelefonRehberi.Entities.Concrete
{
    public class Person : BaseEntity

    {

        [ForeignKey("User")]
        public int? UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }



        [ForeignKey("Group")]
      
        public int? GroupId { get; set; }  


        //public List<UserGroup> UserGroups { get; set; }



    }
}
