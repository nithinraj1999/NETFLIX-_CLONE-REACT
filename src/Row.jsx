import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css'
import { Link, useNavigate } from 'react-router-dom';




function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const filtered = (Array.isArray(movies) ? movies : []).filter(element => element !== undefined);

  const trailer =(mid)=>{
    navigate(`/player/${mid}`)
  }

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {filtered.map((movie) => (
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (
      // <Link to={`/player/${movie.id}`}>
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={()=>trailer(movie.id)}
          />
        // </Link>
        )))}

      </div>
    </div>
  );
}

export default Row;
