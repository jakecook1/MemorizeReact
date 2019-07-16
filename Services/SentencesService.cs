using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace MemorizeReact.Services
{
    public class SentencesService : ISentencesService
    {
        public SentencesService() {}

        public IEnumerable<string> Get()
        {
            var lines = File.ReadAllLines(@"./Data/Sentences.data");

            return (from line in lines
                    select line).ToList();
        }
    }
}