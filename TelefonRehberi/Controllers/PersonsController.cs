
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
    public class PersonsController : BaseController
    {
        //IUserService _userService= new UserManager(new UserRepository());
        //IUserService _userService = new UserManager(new UserRepository());

        IPersonService _personService;

        public PersonsController(IPersonService personService)
        {

            _personService = personService;
            
        }

        [HttpPost]
        public async Task<ActionResult<Person>> AddUser(Person person)
        {
            return await _personService.TAdd(person);
        }

        [HttpGet]
        public async  Task<List<Person>> GetAllUser()
        {
            return await _personService.GetAll();
        }

        [HttpPut("{personId}")]

        public async Task UpdateUser(int personId, Person person)
        {
            person.Id = personId;
            await _personService.TUpdate(personId, person);
        }


        [HttpGet("{personId}")]

        public async Task<ActionResult<Person>> GetUserById(int personId)
        {
            return await _personService.GetById(personId);
        }

        [HttpDelete("{personId}")]

        public async Task DeleteUser(int personId)
        {   
            await _personService.TDelete(personId); 
        }

        [HttpGet("persons/{name}")]

        public async Task<ActionResult<List<Person>>> GetUserByName(string name)
        {

            return await _personService.GetByName(name); 
        }

        [HttpGet("groups/{groupId}/allPersons")]
        public async Task<ActionResult<List<Person>>> GetUserByGroupId(int groupId)
        {

            return await _personService.GetByGroupID(groupId);
        }
    }
}
