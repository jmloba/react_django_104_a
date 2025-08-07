import React from 'react'
import {useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import Button from '../Button';
const TaskReview = () => {
  const [list,setList] = useState([])
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const config ={
      'responseType':'blob'
    }
  useEffect(()=>{
      const fetchProtectedData = async ()=>{
      try{
        const response = await axiosInstance.get('/Review/')
        
        setList(response.data)
        console.log('response fetching employee  data:',response.data)
      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.response)

      }
      }
      fetchProtectedData()
    },[])


  return (
    <>
    <div>Task review</div>
    <div className={`main-body ${theme}`}>
      {/* from Task */}
      <div className={`body-data ${theme}`}>
        <h2>Task Review List</h2>
        <div className="row ">
          <div className={`menu_option ${theme}`}>
            <Button text='Dashboard' class=" btn-outline-primary" url='/dashboard' />                   
            <Button text='Task Review (Add)' 
            class="btn-outline-primary" url='/taskreview-add' />
          </div> 
          <div className={`data-list ${theme}`}>
            {
              list.map((review) => {
                return(
                <li key={review.id} className={`card ${theme}`}>
                  <div>
                      <h4>{review.reviewer_name}</h4>
                      <p>{review.review_title}</p>
                      <p>
                        {review.task}
                      </p>

                  </div>

                </li>
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

export default TaskReview