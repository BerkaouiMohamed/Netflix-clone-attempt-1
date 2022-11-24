import React from 'react'
import List from './List'
import './list.css'

function listes({lists}) {
  return (
   



    <div className='listeshide' >
     
    {  lists.map((list)=>
<List list={list}/>)}

    </div>

  )
}

export default listes