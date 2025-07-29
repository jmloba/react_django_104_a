import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';


const BooksCard = (props) => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  return (
    <>
    <div className={`card ${theme} `} >

      <img className='img-books' src={props.cover} alt="cov" />

      <h4  className={`card-title ${theme}`}>
        
       
      </h4>  
      <p>Title {props.title}</p>
      


      
      
    </div>
    
    

    </>
  )
}

export default BooksCard