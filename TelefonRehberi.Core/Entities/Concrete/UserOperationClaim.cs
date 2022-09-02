using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using TelefonRehberi.Core.Entities;

namespace Core.Entities.Concrete
{
    public class UserOperationClaim : BaseEntity
    {
  
        public int UserId { get; set; }
        public int OperationClaimId { get; set; }

    }
}
