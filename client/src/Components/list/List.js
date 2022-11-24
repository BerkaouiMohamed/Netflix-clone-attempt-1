import React, { useState, useRef } from 'react'
import "./list.css"
import ListItem from './listitem/ListItem'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 240);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${ 1 }%)`;
    }
    if (direction === "right" && slideNumber < 9 - clickLimit) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-47 }%)`;
    }
  };

  return (<div className='lists'>
    <div className='list'>
      
      <h3 className='listname' >{list.title}</h3>
      <div className='items'>
        <KeyboardDoubleArrowLeftIcon className='slideiconeleft' onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
         />
         <div className='itemss' ref={listRef}>
{list.content.map((item)=>(
        <ListItem item={item} />))
}
       
       </div>
        <KeyboardDoubleArrowRightIcon className='slideiconeright'   onClick={() => handleClick("right")} />
      </div>
    </div>
    
</div>
  )
}

export default List