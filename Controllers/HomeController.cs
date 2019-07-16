using System.Collections.Generic;
using MemorizeReact.Services;
using Microsoft.AspNetCore.Mvc;

namespace MemorizeReact.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private ISentencesService _sentencesService;

        public HomeController(ISentencesService sentencesService)
        {
            _sentencesService = sentencesService;
        }

        [HttpGet("[action]")]
        public IEnumerable<string> Sentences()
        {
            return _sentencesService.Get();
        }
    }
}
