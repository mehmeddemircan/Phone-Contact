using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelefonRehberi.Business.Abstract
{
    public interface IMailService
    {

        Task SendEmailAsync(string toEmail, string subject, string content);
    }
}
