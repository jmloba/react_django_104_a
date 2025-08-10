import React from 'react'
import Button from '../Button'
import { useContext, useState } from 'react';
import './App_project.css'
import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import DateInput from '../dateinput/DateInput';

import DatePicker from 'react-datepicker'
import ReactDatePicker from '../reusable_components/ReactDatePicker';
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from 'react-icons/fa';

const AppProjectAdd = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [name,setName] = useState('')

  const [startDate,setStartDate]= useState(null)

  const [comment,setComment]=useState('')
  const [status,setStatus]=useState('')
  const [loading,setLoading] = useState(false)
  const navigate=useNavigate()
  function viewEntries(){
    console.log('Name:', name)
  }
  function handleReset(){
    setName('')


  }
  function CustomInputCalendar({value,onClick}){
    return(
      <>
      <div className='input-group'>
        <input type="text" className='form-control' value={value} onClick={onClick} readOnly/>
        <div className="input-group-append">
          <span className="input-group-text">
            <FaCalendarAlt/>

          </span>

        </div>

      </div>
      </>
    )
  }

  const handleSaveForm = async(e)=>{
      e.preventDefault();
      viewEntries()
      const formData = new FormData();
      formData.append('name', name)
      
      formData.append('projectmanager',1)
      formData.append('comments', comment)
      formData.append('status', status)

      try{
        const response = await axiosInstance.post('/projects/', formData)
        console.log('ok respose', response.data)
        handleReset();
        navigate('/dashboard')

      }catch(error){
        console.log('error saving : ', error)
        return null


      }
    }
  const convert =(selected)   =>{
    const day = selected.getDate();
    const month = selected.getmonth >=10 ? selected.getMonth() +1 : `0${selected.getMonth()+1}`
    const year = selected.getFullYear();
    setStartDate(`${day}/${month}/${year}`)
    return `${day}/${month}/${year}`

  }

  return (
    <>
    <h3>Add project routine</h3>
      <form className={`form ${theme}`}  onSubmit={handleSaveForm}>
        <div className="form-data">
          <div className="form-group form-control">
              <div className="row">
                <label className={`form-text ${theme} `} htmlFor="name">Name</label>
                <input type="text" 
                name='name' 
                id='name'
                
                value={name}
                onChange={(e)=>setName(e.target.value)} required
                />
              </div>
              <div className="row">
                <label className={`form-text ${theme} `} htmlFor="comment">Comment</label>
                <input type="text" 
                id='comment'
                name='comment' 
                value={comment}
                onChange={(e)=>(setComment(e.target.value))} 
                />
              </div>
              <div className="row">
                <label className={`form-text ${theme} `} htmlFor="status">Status</label>
                <input type="text" 
                name='status' 
                id='status'
                value={status}
                onChange={(e)=>(setStatus(e.target.value))} 
                />
              </div>
              {/* date picker */}
              <div className="row">
                {/* <DateInput value={startDate} name=
                {startDate} /> */}
                <ReactDatePicker  />
                {startDate}


               
              </div>
              
          </div>
        </div>
        <div className="date-startdate">
          {startDate}
        </div>
          {loading ? (
            <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
            ):(
            <button type='submit' className='btn btn-info d-block mx-auto'>Save</button>
            )
          }

      </form>
           
    </>
  )
}

export default AppProjectAdd