import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './dropdown'
import {useState, useEffect, useRef} from 'react'


const MenuItems = ( {items, depthLevel} ) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()
  useEffect( ()=>{
    const handler = (event)=>{
      if (dropdown && ref.current  && !ref.current.contains(event.target)){
        setDropdown(false)
      }

    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return()=>{
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)

    }

  },[dropdown]);

  const onMouseEnter =()=>{
    setDropdown(true) 
  }
  const onMouseLeave = ()=>{
    setDropdown(false) 
  }


  return (
    <>
    <li key={items.id} className='menu-items' ref={ref} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
    {
      // check if item has submenu
    items.submenu ?(
      <>
      <button type='button' 
        aria-haspopup ='menu'  
        aria-expanded = {dropdown?"true": "false" }
        onClick={ ()=>setDropdown((prev)=>!prev) } 
         >
          {items.title} {''}
          {
          depthLevel >0 ?
            <span> &raquo;</span>
            :<span className='arrow'></span>
          }
      </button>
        <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
      </>
      
    ):(
      // no submenu
      <a href={items.url}>{items.title}</a>
    )
    }
    
   </li>
    </>
   
  )
}

export default MenuItems