using Core.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TelefonRehberi.Business.Abstract;
using TelefonRehberi.Entities.DTOs;

namespace TelefonRehberiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IAuthService _authService;
        private IUserService _userService;
        private IMailService _mailService;

        private readonly IConfiguration _configuration; 

        public AuthController(IAuthService authService,IUserService userService, IMailService mailService, IConfiguration configuration)
        {
            _authService = authService;
            _userService = userService; 
            _mailService = mailService;
            _configuration = configuration;

        }

        [HttpPost("login")]
        public ActionResult Login(UserForLoginDto userForLoginDto)
        {
            var userToLogin = _authService.Login(userForLoginDto);
            if (!userToLogin.Success)
            {
                return BadRequest(userToLogin.Message);
            }

            var result = _authService.CreateAccessToken(userToLogin.Data);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("register")]
        public ActionResult Register(UserForRegisterDto userForRegisterDto)
        {
            var userExists = _authService.UserExists(userForRegisterDto.Email);
            if (!userExists.Success)
            {
                return BadRequest(userExists.Message);
            }

            var registerResult = _authService.Register(userForRegisterDto, userForRegisterDto.Password);
            var result = _authService.CreateAccessToken(registerResult.Data);

            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpPost("forgot-password")]

        public async Task<ActionResult<User>> ForgotPassword(string email)
        {
            var user = _userService.GetByMail(email);
            if (user == null)
            {
                return BadRequest("User not found");
            }




            user.PasswordResetToken = _authService.CreateRandomToken();
            user.ResetTokenExpires = DateTime.Now.AddDays(1);

            string url = $"{_configuration["AppUrlReact"]}/resetpassword/{email}/{user.PasswordResetToken}";

           await  _mailService.SendEmailAsync(email, "Reset Password", "<h1>Follow the instructions to reset your password</h1>" + $"<p>To reset your password <a href='{url}'>Click here</a> </p>");

            return user; 

        }



    }
}
