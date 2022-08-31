
using CoreApiResponse;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Business.Concrete;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.DataAccess.Concrete.EntityFramework;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController
    {
        //IUserService _userService= new UserManager(new UserRepository());
        //IUserService _userService = new UserManager(new UserRepository());

        IUserService _userService;

        public UsersController(IUserService userService)
        {
           
            _userService = userService;
            
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User user)
        {
            return await _userService.TAdd(user);
        }

        [HttpGet]
        public async  Task<List<User>> GetAllUser()
        {
            return await _userService.GetAll();
        }

        [HttpPut("{userId}")]

        public async Task UpdateUser(int userId, User user)
        {
            user.Id = userId;
            await _userService.TUpdate(userId, user);
        }


        [HttpGet("{userId}")]

        public async Task<ActionResult<User>> GetUserById(int userId)
        {
            return await _userService.GetById(userId);
        }

        [HttpDelete("{userId}")]

        public async Task DeleteUser(int userId)
        {   
            await _userService.TDelete(userId); 
        }

        [HttpGet("users/{name}")]

        public async Task<ActionResult<List<User>>> GetUserByName(string name)
        {

            return await _userService.GetByName(name); 
        }

        [HttpGet("groups/{groupId}/allUsers")]
        public async Task<ActionResult<List<User>>> GetUserByGroupId(int groupId)
        {

            return await _userService.GetByGroupID(groupId);
        }
    }
}
