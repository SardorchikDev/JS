const API_KEY = 'c65fcde9';
const BASE_URL = 'https://www.omdbapi.com/';

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('btn');
const moviesContainer = document.getElementById('movies');

async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await res.json();
  if (data.Response === 'True') {
    displayMovies(data.Search);
  } else {
    moviesContainer.innerHTML = '<p style="text-align:center;grid-column:1/-1;">Topilmadi oka</p>';
  }
}

function displayMovies(movies) {
  moviesContainer.innerHTML = movies.map(movie => `
    <div class="movie">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <span>${movie.Year}</span>
      </div>
    </div>
  `).join('');
}

searchBtn.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) searchMovies(query);
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value;
    if (query) searchMovies(query);
  }
});

