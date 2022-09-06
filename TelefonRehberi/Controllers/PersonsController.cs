
using CoreApiResponse;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Business.Concrete;
using TelefonRehberi.Core.Utilities.Results;
using TelefonRehberi.DataAccess.Concrete.EntityFramework;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : BaseController
    {


        IPersonService _personService;
    
        public PersonsController(IPersonService personService)
        {

            _personService = personService;
           
            
        }

        [HttpPost]
        public async Task<ActionResult<Person>> AddPerson(Person person)
        {
            return await _personService.TAdd(person);
        }

        [HttpGet]
        public async Task<List<Person>> GetAllPerson()
        {
            return await _personService.GetAll();
        }

        [HttpGet("users/{userId}/allPersons")]
        public async  Task<List<Person>> GetAllByUserId(int userId)
        {
            return await _personService.GetAllByUser(userId);
        }

        [HttpPut("{personId}")]

        public async Task UpdatePerson(int personId, Person person)
        {
            person.Id = personId;
            await _personService.TUpdate(personId, person);
        }


        [HttpGet("{personId}")]

        public async Task<ActionResult<Person>> GetPersonById(int personId)
        {
            return await _personService.GetById(personId);
        }

        [HttpDelete("{personId}")]

        public async Task DeletePerson(int personId)
        {   
            await _personService.TDelete(personId); 
        }

        [HttpGet("persons/{name}")]

        public async Task<ActionResult<List<Person>>> GetPersonByName(string name)
        {

            return await _personService.GetByName(name); 
        }

        [HttpGet("groups/{groupId}/allPersons")]
        public async Task<ActionResult<List<Person>>> GetPersonByGroupId(int groupId)
        {

            return await _personService.GetByGroupID(groupId);
        }

        [HttpGet("orderBy-desc")]

        public async Task<ActionResult<List<Person>>> GetPersonOrderByDesc ()
        {
            return await _personService.GetAllPersonIdDesc();
        }


        [HttpGet("grouping-by-name")]

        public List<IGrouping<char, Person>> GroupPeopleByName()
        {
            return  _personService.GroupPeopleByName(); 
        }

        
    }
}
