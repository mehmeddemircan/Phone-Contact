using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Business.Validation.FluentValidation;
using TelefonRehberi.Core.Aspects.Validation;
using TelefonRehberi.DataAccess.Abstract;
using TelefonRehberi.Entities.Concrete;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberi.Business.Concrete
{
    public class PersonManager : IPersonService
    {

        IPersonRepository _personRepository;

        public PersonManager(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }
       

        public async Task<List<Person>> GetAll()
        {
            return await _personRepository.GetAllAsync();
        }

        public async Task<List<Person>> GetAllByUser(int userId)
        {
            return await _personRepository.GetAllByUserAsync(userId);
        }

        public async Task<List<Person>> GetAllPersonIdDesc()
        {
            return await _personRepository.GetAllPersonOrderByDesc(); 
        }

        public async Task<List<Person>> GetByGroupID(int groupId)
        {
            return await _personRepository.GetUserByGroupId(groupId);
        }

        public async Task<Person> GetById(int id)
        {
            return await _personRepository.GetById(id);
        }

        public async Task<List<Person>> GetByName(string name)
        {
            return await _personRepository.GetUserByName(name);
        }

        public List<IGrouping<char, Person>> GroupPeopleByName()
        {
            return  _personRepository.GroupPeopleByName(); 
        }

        [ValidationAspect(typeof(PersonValidator))]
        public  async Task<Person> TAdd(Person entity)
        {
            return await _personRepository.AddAsync(entity);
        }

        public async Task TDelete(int id)
        {
            await _personRepository.DeleteAsync(id);
        }

        public async Task TUpdate(int id, Person entity)
        {
            await _personRepository.UpdateAsync(id, entity);
        }

     
    }
}
