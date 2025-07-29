import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import axiosInstance from '../../axiosInstance';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const EmployeesAdd = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [errors,setErrors]= useState({})
  const[success,setSuccess]=useState(false)
  const [loading,setLoading] = useState(false)
    const [values, setValues] = useState({
      emp_id: '',
      empName : '',
      empDesignation :'',
      email:'',
      gender: '',
      department:'',
      // empPhoto:''

    })

    const handleChanges = (e) =>{
      e.preventDefault()
      setValues({...values,[e.target.name]:[e.target.value]})

    }
    const handleReset = () =>{
      
      console.log ('pressed reset button')
      setValues({
        emp_id:'',
        empName:'',
        empDesignation :'',
        email:'',
        gender: '',
        department:'',
        // empPhoto:''

      })

    }


    
    const handleSaveForm = async (e)=>{
      e.preventDefault();
      console.log('values of inputs', values)
      try{
      const response =await axiosInstance.post('/employees/', values)
      console.log('response is :' ,response.data)

      }catch(error){

      console.log('error response is :' ,error.response)

      }
      // console.log('response on saving ', response.data)
    
      

    }

  return (
        <>
        <div className={`main-body ${theme}`}>
          <div className={`body-data ${theme}`}>
            <h2>Employee</h2>
            <div className=''>
              <Link to='/employees' className='navbar-brand   navbartext ' >Employee List</Link>   

            </div>
          <form className={`form ${theme}`} onSubmit={handleSaveForm}>
    
            <div className="form-group ">
              <label htmlFor='emp_id' className={`form-text ${theme} `}>Id</label>
              <input type="text" 
              className="form-control form-control-lg" 
              placeholder = 'Employee Id'
              id='emp_id' 
              name='emp_id'  
              value = {values.emp_id}
              
              onChange={ (e)=> handleChanges(e) } required
    
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
              value = {values.empName}
              onChange={ (e)=> handleChanges(e)} required
              />
    
            </div>
    
            <div className="form-group ">
              <label htmlFor='empDesignation' className={`form-text ${theme} `}>Designation</label>

              <input type="text" className="form-control form-control-lg" 
              placeholder = 'Employee Designation' 
              id='empDesignation'
              name='empDesignation'
              onChange={ (e)=> handleChanges(e)}
              
              />
            </div>
    
            <div className="form-group ">
              <label htmlFor='email' className={`form-text ${theme} `}>Email</label>
              <input type="email" 
              className="form-control form-control-lg" 
              placeholder = 'Employee Email' 
              id   ='email'
              name='email'
              value = {values.email}
              
              onChange={ (e)=> handleChanges(e)} required
              />
            </div>

            <div className={`form-radiotext ${theme}`}>
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

            </div>

            <div className="form-group ">
              <label htmlFor='department' className={`form-text ${theme} `}>Department</label>
              <select  className="form-control form-control-lg" id='department' name='department'
              onChange={ (e)=> handleChanges(e)} required>
                <option value="accounting">Accounting</option>
                <option value="sales">Sales</option>
                <option value="wholesale">Wholesale</option>
              </select>
            </div>



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

export default EmployeesAdd