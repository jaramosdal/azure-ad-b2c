using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AzureADB2C.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index(string returnUrl = null)
        {
            ViewBag.ReturnUrl = returnUrl;
            ViewBag.JwtB2C = await HttpContext.GetTokenAsync("id_token");

            List<Claim> claimsUser = User.Claims.ToList();
            var b2cUserId = claimsUser.FirstOrDefault(u => u.Type.EndsWith("objectidentifier")).Value;
            var userPrincipalName = claimsUser.FirstOrDefault(u => u.Type == "emails").Value;

            return View();
        }
    }
}
