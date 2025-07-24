import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';


const BooksCard = (props) => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  return (
    <>
    <div className={`card ${theme} `}>

      <img src={props.cover} alt="cov" />
      

      
      <h6 className={`card-item-id ${theme}`}> Book Id:{props.key}</h6>

      <h4  className={`card-title ${theme}`}>
        Book Title {props.title}
      </h4>  

      
      
    </div>
    
    

    </>
  )
}

export default BooksCard