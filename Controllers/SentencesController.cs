using System.Collections.Generic;
using MemorizeReact.Models;
using MemorizeReact.Services;
using Microsoft.AspNetCore.Mvc;

namespace MemorizeReact.Controllers
{
    [Route("api/[controller]")]
    public class SentencesController : ControllerBase
    {
        private ISentencesService _sentencesService;

        public SentencesController(ISentencesService sentencesService)
        {
            _sentencesService = sentencesService;
        }

        [HttpGet]
        public IEnumerable<Sentence> Get()
        {
            return _sentencesService.Get();
        }
    }
}