import React from 'react'
import './watch.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
function Watch() {
  let location = useLocation();
  const movie=(location.state.movie)

  



  return (
    <div className='watch'>
        <Link to="/">
      <div className='iconw' >
  <ArrowBackIcon />
<h4>HOME</h4>
</div></Link>
<iframe className='watchv' src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Watch