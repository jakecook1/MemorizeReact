using System.Collections.Generic;

namespace MemorizeReact.Services
{
    public interface ISentencesService
    {
        IEnumerable<string> Get();
    }
}