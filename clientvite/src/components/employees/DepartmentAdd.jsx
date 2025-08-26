
import React, { useEffect } from 'react'
import { useContext, useState } from 'react';

import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'

const DepartmentAdd = ({departments,setDepartments,setShowDepartmentAdd}) => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [loading,setLoading] = useState(false)
  const [deptName,setDeptName] = useState('')
  const onSubmitHandler = (event)=>{
    event.preventDefault()
    console.log(formData)

  }
  function viewEntries(){
    console.log('Department Name:', deptName)
  }
   function handleReset(){
    setDeptName('')


  }
  const navigate=useNavigate()
  const handleSaveForm = async (e)=>{
    e.preventDefault();
    viewEntries()
    const formData = new FormData();
    formData.append('deptname', deptName)
    try{
      const response = await axiosInstance.post('/department/', formData)
      console.log('ok respose', response.data)
      handleReset();
      const resp_dept = await axiosInstance.get('/department/')
      setDepartments(resp_dept.data) 
      setShowDepartmentAdd(false)

      

    }catch(error){
      console.log('error saving : ', error)
      return null
    }
    navigate('/employees')
  }
  return (
    <>
    
    <div className="form-area">
    <h4>Add Department routine</h4>
    <form onSubmit={handleSaveForm}>
      <div className="form-data">
        <div className="form-group form-control">
              <div className="row ">
                <label className={`form-text  ${theme} `} htmlFor="name">Department</label>
                <input type="text" 
                className='form-control'
                name='deptName' 
                id='deptName'
                
                value={deptName}
                onChange={(e)=>setDeptName(e.target.value)} required
                />
              </div>
        </div>
      </div>

      {loading ? (
        <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
        ):(
        <button type='submit' className='btn btn-info d-block mx-auto'>Save</button>
        )
      }
    </form>

    </div>
    </>
    
  )
}

export default DepartmentAdd