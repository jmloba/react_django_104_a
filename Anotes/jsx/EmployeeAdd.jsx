import React, { useState } from 'react'
import { useEffect } from 'react'


import axios from 'axios'
import {Link} from 'react-router-dom'
import axiosInstance from '../AxiosInstance'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const EmployeeAdd = () => {
  const [emp_id, setEmpId ] = useState('')
  const [emp_name,setEmpName] = useState('')
  const [designation, setEmpDesignation]=   useState('')
  const[errors,setErrors] =useState('')
  const[success,setSuccess]=useState(false)
  const[loading,setLoading] =useState(false)

  
  
  const handleSubmit= async (e)=>{
    e.preventDefault()
    setLoading(true)
    const userData = {emp_id, emp_name,designation}
    console.log('entries', userData)
    try{

      const response =await axiosInstance.post('/employees/',
        userData
      )
      console.log('response :', response.data)
      // clear errors
      setErrors({})      
      setSuccess(true)


    }catch(error){
         setErrors(error.response.data)
      console.log('error on tryblock ', error.response.data )
      
    }finally{
      setLoading(false)
    }

  }


  return (
    <>
    <div className="main-body">
      <div className="row form-box justify-content-center">
        <div className="col-md-6 bg-light-dark">
          <h4 className='text-light'>Add Employee Page</h4>
          <form onSubmit={handleSubmit}>
              <div className='form-line'>
                <input type="text" className='form-control mb-3' placeholder='Enter Employee Id'  
                value={emp_id} 
                onChange={(e)=>setEmpId(e.target.value)} />                
                <small> 
                  {errors.emp_id && 
                  <div className='text-danger'>
                    {errors.emp_id}
                  </div>}
                </small>


              </div>
              <div className='form-line'>
                <input type="text" 
                className='form-control mb-3' placeholder='Enter EmployeeName'  
                value ={emp_name}
                onChange={(e)=>setEmpName(e.target.value)}
                />
                <small> 
                  {errors.emp_name && 
                  <div className='text-danger'>
                    {errors.emp_name}
                  </div>}
                </small>

                
              </div>
              <div className='form-line'>
                <input type="text"
                className='form-control mb-3' placeholder='Enter Designation'  
                value={designation}
                onChange={(e)=>setEmpDesignation(e.target.value)}
               
                />
                  <small> 
                  {errors.designation && 
                  <div className='text-danger'>
                    {errors.describe('first', () => { second })}
                  </div>}
                </small>
              </div>

      {success && 
        <div className='alert alert-success text-center'>Data has been saved </div>
      }   
      {loading ? (
                    <button type = 'submit' className='btn btn-info d-block mx-auto' disabled ><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>

      ):(
            <button type = 'submit' className='btn btn-info d-block mx-auto'>Submit</button>
      )}        


            

          </form>
        </div>    
      </div>    
      
    </div>
    
    </>
    
  )
}

export default EmployeeAdd