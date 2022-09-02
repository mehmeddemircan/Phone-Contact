using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;

namespace TelefonRehberi.Entities.Concrete
{
    public class Group : BaseEntity
    {

        public string Title { get; set; }
        public string Name { get; set; }

        public string? ThumbNailImage { get; set; }

        public string Description { get; set; }

        public string? Url { get; set; }

        public int Capacity { get; set; }

        public ICollection<Person>? Users { get; set; }

        //public  List<UserGroup>? UserGroups { get; set; }


    }
}
