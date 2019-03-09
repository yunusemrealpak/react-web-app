using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace react_web_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private static List<Movie> movies = new List<Movie>()
        {
            new Movie() { Id=1, title = "Harry Potter Felsefe Taşı", cover="http://www.esenshop.com/Uploads/UrunResimleri/Harry-Potter---Harry-Potter-ve-Felsefe-T-068f.jpg"},
            new Movie() { Id=2, title = "Harry Potter Felsefe Taşı", cover="http://www.esenshop.com/Uploads/UrunResimleri/Harry-Potter---Harry-Potter-ve-Felsefe-T-068f.jpg"},
            new Movie() { Id=3, title = "Harry Potter Felsefe Taşı", cover="http://www.esenshop.com/Uploads/UrunResimleri/Harry-Potter---Harry-Potter-ve-Felsefe-T-068f.jpg"},
            new Movie() { Id=4, title = "Harry Potter Felsefe Taşı", cover="http://www.esenshop.com/Uploads/UrunResimleri/Harry-Potter---Harry-Potter-ve-Felsefe-T-068f.jpg"},
            new Movie() { Id=5, title = "Harry Potter Ateş Kadehi", cover="http://media.sinematurk.com/film/e/df/cbcd0b5f4a60/15742_10.jpg"},
            new Movie() { Id=6, title = "Harry Potter Ateş Kadehi", cover="http://media.sinematurk.com/film/e/df/cbcd0b5f4a60/15742_10.jpg"},
            new Movie() { Id=7, title = "Harry Potter Ateş Kadehi", cover="http://media.sinematurk.com/film/e/df/cbcd0b5f4a60/15742_10.jpg"},
            new Movie() { Id=8, title = "Harry Potter Ateş Kadehi", cover="http://media.sinematurk.com/film/e/df/cbcd0b5f4a60/15742_10.jpg"}
        };

        // GET: api/Movie
        [HttpGet]
        public List<Movie> Get()
        {
            return movies;
        }

        // GET: api/Movie/5
        [HttpGet("{id}", Name = "Get")]
        public Movie Get(int id)
        {
            var movie = movies.Find(x => x.Id == id);

            return movie;
        }

        // POST: api/Movie
        [HttpPost]
        public void Post([FromBody] Movie value)
        {
            value.Id = movies.Count + 1;
            movies.Add(value);
        }

        // PUT: api/Movie/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Movie value)
        {
            var movie = movies.FirstOrDefault(x => x.Id == id);
            if (movie != null)
            {
                movie.title = value.title;
                movie.cover = value.cover;
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Movie Delete(int id)
        {
            var movie = movies.Find(x => x.Id == id);
            movies.Remove(movie);

            return movie;
        }
    }

    public class Movie
    {
        public int Id { get; set; }
        public string title { get; set; }
        public string cover { get; set; }
    }
}
