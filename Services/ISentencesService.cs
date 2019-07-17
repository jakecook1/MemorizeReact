using System.Collections.Generic;
using MemorizeReact.Models;

namespace MemorizeReact.Services
{
    public interface ISentencesService
    {
        IEnumerable<Sentence> Get();

        IEnumerable<Sentence> Create(IEnumerable<Sentence> sentences);
    }
}