using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;

namespace TelefonRehberi.Entities.Concrete
{
    public class CommentLike : BaseEntity
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Comment")]
        public int CommentId { get; set; }

        public bool Liked { get; set; } = false;
    }
}
