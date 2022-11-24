import React, { useEffect, useState } from 'react'
import "./featured.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import image from "../../assets/background.jpg"
import logo from "../../assets/logo.png"
import axios from 'axios';
import { Link } from 'react-router-dom';


function Featured({type,setGenre}) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
const movie=content

  return (
    <div className='featured'>
{type && (
        <div className="category">
          <span>{type === "movie" ? "Movie" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}










<img className='back' src={movie.img}>
</img>
<div className='info'>
    <img className='logo' src={movie.imgTitle}></img>
    <div className='button'>
    <Link to="/watch" state={{movie}}> 
        <button className='play'><PlayCircleIcon/> play </button></Link>
        <button className='infoi'><InfoIcon/>info </button>


    </div>
</div>
    </div>
    
  )
}

export default Featured