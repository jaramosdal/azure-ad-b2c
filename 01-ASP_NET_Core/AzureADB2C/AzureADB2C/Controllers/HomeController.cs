using Microsoft.AspNetCore.Mvc;

namespace AzureADB2C.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(string returnUrl = null)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }
    }
}
