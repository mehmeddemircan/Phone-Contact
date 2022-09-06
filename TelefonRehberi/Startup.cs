using Microsoft.EntityFrameworkCore;
using TelefonRehberi.DataAccess.Concrete.Contexts;

namespace TelefonRehberiApi
{
    public class Startup
    {
        protected readonly IConfiguration configuration;
        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("PostgreSQLConnection")));
        }
    }
}
