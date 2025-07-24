import React from 'react'
import {useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance'
import BooksCard from './BooksCard'
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'

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

  useEffect( ()=>{
    const fetchProtectedData= async ()=>{
      try{
        
        
        const response = await axiosInstance.get('/books/')
        // -> gives 401  but instead send togeter with header

        
        console.log('dashboard try response', response.data)
        setList(response.data)
  
      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.data)

      }
    }
    fetchProtectedData();
    },[]
  )  
  
  return (
    <>
      <div className={`main-body ${theme}`}>
        <div className={`body-data ${theme}`}>

          <div className="row justify-content-center">
            <h3 className={`body-data-title ${theme}`}   >Books</h3>
            <ul className=''>
              {
              list.map((book) => <BooksCard key={book.id} title={book.title} cover={book.cover} />)
              }
            </ul>
          </div>
          
          
          

        </div>


        
      </div>
    
    </>
    
  )
}

export default Books