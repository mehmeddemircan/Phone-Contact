using Core.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Core.Helpers;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getAll")]

        public PagedList<User> GetAllUser([FromQuery] UsersParameter usersParameter)
        {
            return  _userService.GetAllByPage(usersParameter); 
        }


  
    }
}
