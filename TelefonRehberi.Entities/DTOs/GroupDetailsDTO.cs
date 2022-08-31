using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelefonRehberi.Entities.DTOs
{
    public class GroupDetailsDTO
    {
        public int UserId { get; set; }

        public string  UserName  { get; set; }

        public string  UserSurname  { get; set; }

        public string UserPhone { get; set; }


        public int GroupId { get; set; }
        public string GroupName { get; set; }

        public string GroupDescription { get; set; }

        public string GroupTitle { get; set; }

        public int GroupCapacity { get; set; }
        public string GroupImage { get; set; }
    }
}
