const api_key = "c3fd22e823430a980e0cfb95e356d7d7";
const request = {
  fetchTrending: `/trending/movie/day?api_key=${api_key}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};
export default request;
