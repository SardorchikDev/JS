const api = `https://www.omdbapi.com/?apikey=c65fcde9`;

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('btn');
const moviesContainer = document.getElementById('movies');

function searchMovies(query) {
  fetch(api + '&s=' + query)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.Response === 'True') {
        var movies = data.Search;
        var html = '';
        for (var i = 0; i < movies.length; i++) {
          html += '<div class="movie">';
          html += '<img src="' + movies[i].Poster + '" alt="' + movies[i].Title + '">';
          html += '<div class="movie-info">';
          html += '<h3>' + movies[i].Title + '</h3>';
          html += '<span>' + movies[i].Year + '</span>';
          html += '</div>';
          html += '</div>';
        }
        moviesContainer.innerHTML = html;
      } else {
        moviesContainer.innerHTML = '<p style="text-align:center;grid-column:1/-1;">Topilmadi oka</p>';
      }
    });
}

searchBtn.addEventListener('click', function() {
  var query = searchInput.value;
  if (query) {
    searchMovies(query);
  }
});

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    var query = searchInput.value;
    if (query) {
      searchMovies(query);
    }
  }
});
