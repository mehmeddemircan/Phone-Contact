using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;
using TelefonRehberi.Entities.Common;

namespace TelefonRehberi.Entities.Concrete
{
    public class Comment : BaseEntity
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Group")]
        public int GroupId { get; set; }

        public CommentStatus Status { get; set; } = CommentStatus.Pending;

        public string CommentText { get; set; }

        public DateTime CreatedTime { get; set; } = DateTime.Now;

        public int CommentLike { get; set; } = 0;

        public int CommentDislike { get; set; } = 0;
        public ICollection<CommentLike>?  CommentLikes { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedTime { get; set; }



    }
}
