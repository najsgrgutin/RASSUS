using AuthService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AuthService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MailController : ControllerBase
    {
        [HttpPost]
        public IActionResult ReceiveMailData(Mail mailData)
        {
            return Ok();
        }
    }
}