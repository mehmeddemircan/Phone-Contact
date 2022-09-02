using Autofac;
using Autofac.Extras.DynamicProxy;
using Castle.DynamicProxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Business.Concrete;
using TelefonRehberi.Core.Utilities.Interceptors;
using TelefonRehberi.Core.Utilities.Security.JWT;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.DataAccess.Concrete.EntityFramework;

namespace TelefonRehberi.Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<PersonManager>().As<IPersonService>();
            builder.RegisterType<PersonRepository>().As<IPersonRepository>();

            builder.RegisterType<GroupManager>().As<IGroupService>();
            builder.RegisterType<GroupRepository>().As<IGroupRepository>();

            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<UserRepository>().As<IUserRepository>();
            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();
        }
    }


}
