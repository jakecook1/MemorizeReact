using System.Collections.Generic;
using System.Net.Mime;
using System.Threading.Tasks;
using MemorizeReact.Dto;
using MemorizeReact.Models;
using MemorizeReact.Services;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

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
        public IEnumerable<SentenceDto> Get()
        {
            // TODO: Add auto mapper
            var sentences = _sentencesService.Get();
            
            return (from sentence in sentences
                    select new SentenceDto { Text = sentence.Text }).ToList();
        }

        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        public IActionResult Create([FromBody]List<SentenceDto> model)
        {
            if (ModelState.IsValid)
            {
                var sentences = model.Select(x => new Sentence { Text = x.Text});

                return Ok(new
                {
                    sentences =  _sentencesService.Create(sentences)
                                                  .Select(x => new SentenceDto { Text = x.Text})
                });
            }
            
            return BadRequest("Invalid model");
        }
    }
}