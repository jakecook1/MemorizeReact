using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MemorizeReact.Models;

namespace MemorizeReact.Services
{
    public class SentencesService : ISentencesService
    {
        private string _fileName;
        private string _dirName;

        public SentencesService()
        {
            // TODO: this could be passed in by the user
            _dirName = @"./Data";
            _fileName = @"./Data/Sentences.data";

            Directory.CreateDirectory(_dirName);

            // Check if file exists if not create it.
            if (!File.Exists(_fileName))
            {
                using (var fs = File.Create(_fileName))
                {
                    Console.WriteLine("File {0} created.", _fileName);
                }
            }
        }

        public IEnumerable<Sentence> Get()
        {
            var lines = File.ReadAllLines(_fileName);

            return (from line in lines
                    select new Sentence { Text = line }).ToList();
        }

        public IEnumerable<Sentence> Create(IEnumerable<Sentence> sentences)
        {
            File.WriteAllLines(_fileName, sentences.Select(x => x.Text));
            return sentences;
        }
    }
}