using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        IGroupService _groupService;
        IUserService _userService; 
        public GroupsController(IGroupService groupService, IUserService userService)
        {
            _groupService = groupService;
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult<Group>> AddGroup(Group group)
        {
            return await _groupService.TAdd(group);
        }

        [HttpGet]

        public async Task<List<Group>> GetAllGroup()
        {
            return await _groupService.GetAll();
        }


        [HttpGet("groupdetails")]

        public async Task<ActionResult<List<GroupDetailsDTO>>> GetGroupDetails()
        {

            return await _groupService.GetGroupDetailsAsync();
        }

        [HttpGet("groupdetails/{id}")]
        // get users in group
        public async Task<ActionResult<List<GroupDetailsDTO>>> GetGroupDetailsById(int id)
        {

            return await _groupService.GetGroupDetailsById(id);
        }

        [HttpDelete("{id}")]    
        public async Task  DeleteGroup (int id)
        {

            var users = await _userService.GetByGroupID(id); 

            foreach (var user in users) 
            {
                user.GroupId = null; 
            }

            await _groupService.TDelete(id);
        }

    }
}
