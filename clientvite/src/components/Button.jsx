import React from 'react'
import {Link} from 'react-router-dom'

// props passed url, text , class
// called from  dashboard:
//  <Button text='Employees' class="btn-outline-info" url='/employees' />  

const Button = (props) => {
  return (
   <>
   <Link to={props.url} className={`btn ${props.class}`} 
   
   
   >{props.text}</Link>
   
   </>
  )
}

export default Button