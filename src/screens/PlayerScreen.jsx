// import React from 'react'

// import '../screens/PlayerScreen.css'



// const Player = ()=>{
//     return(
//         <div className='player'>
//             <iframe width='90%' height='90%'
//              src="" title='trailer' allowFullScreen></iframe>
//              <h1>kjhhh</h1>
            
//         </div>
//     )
// }


// export default Player



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../screens/PlayerScreen.css';
import axios from 'axios';

const Player = () => {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const API_KEY ="21491b0dbbd546fdbc8f3c86d8620c2e"

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );
        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailerUrl(trailer ? `https://www.youtube.com/embed/${trailer.key}` : '');
      } catch (error) {
        console.error('Error fetching the trailer', error);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className='player'>
      <iframe
        width='90%'
        height='90%'
        src={trailerUrl}
        title='trailer'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
