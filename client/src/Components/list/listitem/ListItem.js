import React, { useEffect, useState } from 'react'
import './listitem.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem({item}) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
    
  }, [item]);console.log(movie,"1223")

  const [ishoverd, setIshoverd] = useState(false)

  const [liked, setLiked] = useState(false);
  const likee = () => {
    setLiked(!liked); setUnliked(false)
  }
  const [unliked, setUnliked] = useState(false);
  const unlikee = () => {
    setUnliked(!unliked); setLiked(false)
  }
  return (

    <div className='item1' onMouseEnter={() => setIshoverd(true)} onMouseLeave={() => setIshoverd(false)} >
   
      
      <div className='imgitem'>
        <div className='hover'  >



        <iframe className='itemdispv'  src={movie.trailer} title="YouTube video player" frameborder="0"  allowautoplay   allowfullscreen style={{ display: ishoverd ? "block" : "none" }} ></iframe>

{      //  <video className='itemdispv' src='  autoPlay={false} loop  style={{ display: ishoverd ? "block":"none" }}/>
}




          <img className='itemdisp' src={movie.img} alt='' style={{ display: !ishoverd ? "block" : "none" }} /></div>
        <div className='filmdiscr' >
          <Link to="/watch" state={{movie}}>   <PlayCircleOutlineIcon className='iconlist' />
          <AddCircleOutlineIcon className='iconlist' /> </Link>
          <ThumbUpOffAltIcon className='iconlist' onClick={() => likee()} style={{ display: liked && "none" }} />
          <ThumbUpIcon className='iconlist' onClick={() => likee()} style={{ display: !liked && "none" }} />
          <ThumbDownOffAltIcon className='iconlist' onClick={() => unlikee()} style={{ display: unliked && "none" }} />
          <ThumbDownIcon className='iconlist' onClick={() => unlikee()} style={{ display: !unliked && "none" }} />

          <h3 className='filmname'>
            {movie.title}
          </h3>
          <span className='filmdicription' >{movie.duration}<br />{movie.genre}<br />{movie.year}</span>

        </div>

      </div>
     
    </div>
  )
}

export default ListItem
