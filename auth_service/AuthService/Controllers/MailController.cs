using AuthService.Helpers;
using AuthService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Configuration;

namespace AuthService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MailController : ControllerBase
    {
        private ApiRequestHelper _api;
        private IConfiguration _configuration;

        public MailController(IConfiguration config)
        {
            _configuration = config;
        }

        [HttpPost]
        public async Task<IActionResult> ReceiveMailData(Mail mailData)
        {
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                var token = await HttpContext.GetTokenAsync("access_token");
                _api = new ApiRequestHelper(_configuration, token);

                var realm = "";
                var username = "";
                var fullname = "";


                var issuer = identity.FindFirst("iss");

                if (issuer != null)
                {
                    realm = issuer.Value;
                    realm = realm.Substring(realm.LastIndexOf('/') + 1);
                }

                var prefferedUsername = identity.FindFirst("preferred_username");

                if (prefferedUsername != null)
                {
                    username = prefferedUsername.Value;
                }

                var givenName = identity.FindFirst(ClaimTypes.GivenName);

                if (givenName != null)
                {
                    fullname = givenName.Value + " ";
                }

                var familyName = identity.FindFirst(ClaimTypes.Surname);

                if (familyName != null)
                {
                    fullname += familyName.Value;
                }

                var mailSignature = "\n\n";

                if (!string.IsNullOrEmpty(fullname))
                {
                    mailSignature += fullname;
                }
                else
                {
                    if (!string.IsNullOrEmpty(username))
                    {
                        mailSignature += $"User: {username}";
                    }
                }

                if (!string.IsNullOrEmpty(realm))
                {
                    mailSignature += $"\nThis mail was sent from {realm} application.";
                }

                mailData.Body += mailSignature;

                var result = _api.PostData("send-mail", mailData);

                if (result != null)
                {
                    return Ok(new
                    {
                        message = "Mail sent successfully."
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        message = "Mail created but could not be sent."
                    });
                }
            }

            return Unauthorized();
        }
    }
}