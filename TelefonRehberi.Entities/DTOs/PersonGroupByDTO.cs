using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Entities.DTOs
{
    public class PersonGroupByDTO : BaseEntity
    {
        public string Name { get; set; }

        public string Surname { get; set; }
    }
}
