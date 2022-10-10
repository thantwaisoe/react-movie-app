import React from 'react';
const MovieCards = ({movies}) => {
  return (
    <div className="movie">
      <div>
        <p>{movies.Year}</p>
      </div>
      <div>
        <img
          src={
            movies.Poster !== 'N/A' ? movies.Poster : 'https://via.placeholder.com/400'
          }
          alt={movies.Title}
        />
      </div>
      <div>
        <span>{movies.Type}</span>
        <h3>{movies.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCards;
