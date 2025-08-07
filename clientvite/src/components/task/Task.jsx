import React from 'react'
import {useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import Button from '../Button';

import '../../assets/css/generalcss.css'
const Task = () => {
  const [list,setList] = useState([])
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const config ={
      'responseType':'blob'
    }
  const handleDelete=async(id)=>{
    console.log('Task id no:', id)
    try{
      const response = await axiosInstance.delete(`/Task/${id}/`)
              console.log('response post :',response)
        setList(list.filter( (p)=> p.id !==id  ))


    }catch(err){
      console.log(err)
    }

  }  
  const get_date_only =(passed_date)=>{
    const str = passed_date.substring(0,10)
    return str

  }
  useEffect(()=>{
    const fetchProtectedData = async ()=>{
    try{
      const response = await axiosInstance.get('/Task/')
      
      setList(response.data)
      console.log('response fetching Task  data:',response.data)
    }catch(error){
      console.error ('\n error (fetchProtectedData )fetching data',error.response)

    }
    }
    fetchProtectedData()
  },[])  

  return (
    <>
    <div>Task routine</div>
    <div className={`main-body ${theme}`}>
      {/* from Task */}
      <div className={`body-data ${theme}`}>
        <h2>Task List</h2>
        <div className="row ">
          <div className={`menu_option ${theme}`}>
            <Button text='Dashboard' class=" btn-outline-primary" url='/dashboard' />                   
            <Button text='Add Tasks' 
            class="btn-outline-primary" url='/task-add' />

          </div>   
          <div className={`data-list ${theme}`}>
            {
              list.map((task) => {
                return(
                  <li key={task.id} className={`card ${theme}`}>
                    <div>
                      <h4>{task.title}</h4>
                      <p>{task.content}</p>
                      <p><small>Date Posted : {get_date_only(task.date_posted)}</small></p>

                    </div>

                  <div className='btn-group'>
                    <button className='btn btn-danger ' onClick={()=>handleDelete(task.id)}> Delete</button>
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

export default Task