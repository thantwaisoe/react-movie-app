import { useEffect, useState } from 'react';
import './App.css';
import MovieCards from './MovieCards';
import searchIcon from './search.svg';
// api key =  8c16a93a
const App = () => {
  // API URL
  const API_URL = 'http://www.omdbapi.com?apikey=8c16a93a';
  // movie data
//   const movie_1 = {
//     Year: '2006',
//     Title: 'Superman Returns',
//     imdbID: 'tt0348150',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
//   };
  const [keyWord, setKeyWord] = useState('')
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`).then((data) =>
      data.json()
    );
    setMovies(res.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={keyWord}
          onChange={(e) => {setKeyWord(e.target.value)}}
        />
        <img src={searchIcon} alt="search" onClick={() => {searchMovies(keyWord)}} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
            {movies.map((movie) => {
               return <MovieCards movies={movie} />
            })}
        </div>
      ) : (
        <div className='empty'>
          <h3>No Movie Found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
