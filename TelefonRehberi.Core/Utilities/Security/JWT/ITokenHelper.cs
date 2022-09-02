using Core.Entities.Concrete;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelefonRehberi.Core.Utilities.Security.JWT
{
    public interface ITokenHelper
    {
        IConfiguration Configuration { get; }

        AccessToken CreateToken(User user, List<OperationClaim> operationClaims);
    }
}
