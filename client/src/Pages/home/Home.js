import Listes from '../../Components/list/Listes'
import React, { useEffect, useState } from 'react'
import Featured from '../../Components/featured/Featured'
import NavBar from '../../Components/navbar/NavBar'
import './home.css'
import axios from 'axios'

function Home({type}) {
  const [lists,setLists]=useState([])
  const [genre,setGenre]=useState()
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type,genre]);

return(
    <div className='home'> 
    <NavBar/>        
    <Featured type={type} setGenre={setGenre} />
    
    <Listes lists={lists}/>
   </div>
  )
}

export default Home