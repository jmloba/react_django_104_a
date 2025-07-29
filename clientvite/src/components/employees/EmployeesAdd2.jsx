import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'



const EmployeesAdd2 = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [errors,setErrors]= useState("")
  const[success,setSuccess]=useState(false)
  const [loading,setLoading] = useState(false)
  
  const [emp_id,setEmpId] = useState('')
  const [empName,setEmpName] = useState('')
  const handleReset = ()=>{
    setEmpId(''),
    setEmpName('')

  }

  const handleInput = (e)=>{

    setPost({...post,[e.target.name]:e.target.value})
    console.log ('handle input : ', {post})
  }

  const handleSaveForm = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('emp_id', emp_id)
    formData.append('emp_name', empName)
    try{ 
      const response = await axiosInstance.post('/employees/', formData)
      console.log('ok respose', response.data)
      setErrors({})
      setSuccess(true)
    }catch(error){
      setSuccess(false)

      console.log ('error response', error)
       
     
    }
    
  }



  return (
   <>
      <div className={`main-body ${theme}`}>
        <div className={`body-data ${theme}`}>
          <div className="menu_option">
            <Button text='Employee List' class="btn-outline-primary" url='/employees' /> 
          </div>


          <form className={`form ${theme}`} onSubmit={handleSaveForm}>
    
            <div className="form-group ">
              <label htmlFor='emp_id' className={`form-text ${theme} `}>Id</label>
              <input type="text" 
              className="form-control form-control-lg" 
              placeholder = 'Employee Id'
              id='emp_id' 
              name='emp_id'  
              value = {emp_id}
              
              onChange={(e)=>setEmpId(e.target.value) } required
    
              />
    
            </div>
    
            <div className="form-group ">
              <label htmlFor='empName' className={`form-text ${theme} `}> 
              Name</label>
              <input type="text" 
              className="form-control form-control-lg" 
              placeholder = 'Employee Name'
              name='empName'
              id='empName'
              value = {empName}
              onChange={(e)=>setEmpName(e.target.value)} required
              />
            </div>
    
            {/* <div className="form-group ">
              <label htmlFor='empDesignation' className={`form-text ${theme} `}>Designation</label>

              <input type="text" className="form-control form-control-lg" 
              placeholder = 'Employee Designation' 
              id='empDesignation'
              name='empDesignation'
              onChange={ (e)=> handleChanges(e)}
              
              />
            </div> */}
    
            {/* <div className="form-group ">
              <label htmlFor='email' className={`form-text ${theme} `}>Email</label>
              <input type="email" 
              className="form-control form-control-lg" 
              placeholder = 'Employee Email' 
              id   ='email'
              name='email'
              value = {values.email}
              
              onChange={ (e)=> handleChanges(e)} required
              />
            </div> */}

            {/* <div className={`form-radiotext ${theme}`}>
              <label  htmlFor='gender' className={`form-text ${theme} `}>Gender</label>
              

              <input  className='radiobutton' 
              type="radio"  
              name='gender'
              value={values.gender}
              onChange={ (e)=> handleChanges(e)} />Male 

              <input  className='radiobutton'  
              type="radio"  name='gender'
              value={values.gender}
              onChange={ (e)=> handleChanges(e)} />Female
              
              <input className='radiobutton'  
              type ="radio"  name='gender' 
              value={values.gender}
              onChange={ (e)=> handleChanges(e)} />Other

            </div> */}

            {/* <div className="form-group ">
              <label htmlFor='department' className={`form-text ${theme} `}>Department</label>
              <select  className="form-control form-control-lg" id='department' name='department'
              onChange={ (e)=> handleChanges(e)} required>
                <option value="accounting">Accounting</option>
                <option value="sales">Sales</option>
                <option value="wholesale">Wholesale</option>
              </select>
            </div> */}



            {/* <div className="form-group ">
              <label htmlFor='empPhoto' className={`form-text ${theme} `}>Image</label>
              <input type="file" className="form-control form-control-lg" placeholder = 'Employee Image'
              name='empPhoto' 
              id  ='empPhoto'
              value ={values.empPhoto}
              onChange={ (e)=> handleChanges(e)} 
              />
            </div> */}
    


    
           
            <div>
              <button type='button' className='btn btn-info d-block mx-auto'
              onClick={handleReset}>
                Reset</button>
              {success ?(
                <div className="alert alert-success">"Data saved..."</div>
              ):(
                <div className="alert alert-warning">{errors}</div>
              )

              } 

              {loading ? (
                <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
                ):(
                <button type='submit' className='btn btn-info d-block mx-auto'>Save</button>
                )
              }
            </div>
          </form>          


        </div>
        </div>
   
   
   </>

  )
}

export default EmployeesAdd2