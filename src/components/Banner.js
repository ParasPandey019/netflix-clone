import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "../stylesheets/Banner.css";
import requests from './requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);
    }

    fetchData();
  },[])


  return (
    <header style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>
        <div className="banner">
          <div className="banner_elements">
            <h1 className="banner_title">{movie.name}</h1>
            <button className="banner_play banner_btn">&#9654; Play</button>
            <button className="banner_list banner_btn"><span className="plus">&#43;</span> My List</button>
            <h2 className="banner_watch">Watch Now</h2>
            <h3 className="banner_description">{movie.overview ? movie.overview.slice(0,150)+"....": " "}</h3>
          </div>
          <div className='banner_fade'></div>
          <div className='banner_fade2'></div>
        </div>
    </header>
  )
}

export default Banner;