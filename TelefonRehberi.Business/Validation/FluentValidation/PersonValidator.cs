using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Entities.Concrete;

namespace TelefonRehberi.Business.Validation.FluentValidation
{
    public class PersonValidator : AbstractValidator<Person>
    {
        public PersonValidator()
        {
        
            RuleFor(x => x.Name).MinimumLength(2).WithMessage("Isım en az 2 karakter olmalı ");
            //RuleFor(x => x.Surname).Length(0,30);
            //RuleFor(x => x.PhoneNumber).Length(0, 10);  
        }
    
    }
}
