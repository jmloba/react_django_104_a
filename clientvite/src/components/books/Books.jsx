import React from 'react'
import {useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

import bookAdd from './BookAdd'
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'

import '../../assets/css/generalcss.css'

const Books = () => {
  function Books(props) {
    return (
      <>
      <li>Title { props.title },Cover: {props.cover}</li>;
      </>
    )
  }
  const [list,setList] = useState([])

  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const config ={
    'responseType':'blob'
  }

  useEffect( ()=>{
    const fetchProtectedData= async ()=>{
      try{
        const response = await axiosInstance.get('/books/')


        setList(response.data)
        console.log('response fetching the data:',response.data)


      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.response)

      }
    }
    fetchProtectedData();
    },[]
  )  
  
  return (
    <>
      <div className={`main-body ${theme}`}>
        {/* from books */}
        <div className={`body-data ${theme}`}>
          <div className="row ">
            <h3 className={`body-data-title ${theme}`}   >Books</h3>
            
            <div className="menu_option">
              <Link to='/books-add' className='navbar-brand   navbartext ' >Add Books</Link>   

              <Link to='/books-add-yousaf' className='navbar-brand   navbartext ' >Add Book (Yousaf)</Link>   

            </div>

            <div className={`data-list ${theme}`}>
              {
              list.map((book) => {
                return (
                  <>
                    <li key={book.id}>
                    <div  className={`card ${theme} `} >

                      <img className='img-books' src={book.cover} alt="cov" />

                      <h4  className={`card-title ${theme}`}>
                      </h4>  
                      <p>Title {book.title}</p>
                    </div>                  

                </li>
                  </>
              
                )

              })
              }

            </div>

            
          </div>
        </div>

      </div>
    
    </>
    
  )
}

export default Books