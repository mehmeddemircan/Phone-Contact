using Microsoft.IdentityModel.Tokens;

namespace TelefonRehberi.Core.Utilities.Security.Encryption
{
    public class SigningCredentialsHelper
    {

        public static SigningCredentials CreateSigningCredentials(SecurityKey securityKey)
        {
            return new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);
        }
    }
}