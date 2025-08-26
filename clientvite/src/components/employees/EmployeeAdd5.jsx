import React, { useEffect } from 'react'
import { useContext, useState } from 'react';

import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import DropDownDepartments from '../reusable_components/dropdown/DropDownDepartments';

const EmployeeAdd5 = ({setShowEmployeeAdd,setList,departments}) => {
  const [loading,setLoading] = useState(false)
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [selectedDepartmentId,setSelectedDepartmentId]=useState(null)

  const [empid,setEmpid] = useState('')
  const [empName,setEmpName] = useState('')
  const [email,setEmail] = useState('')
  const [designation,setDesignation] = useState('')
  const [image,setImage] = useState(null)
   function handleReset(){
    setEmpid('')
    setEmpName('')

  }    

  const handleSaveEmployee= async (e)=>{
    e.preventDefault();
    console.log('handle save Employee ')
    console.log('empid:  ', empid)
    console.log('empName:  ', empName)
    console.log('selected departid:  ', selectedDepartmentId)
    const formData = new FormData();
    formData.append('emp_id', empid)
    formData.append('emp_name', empName)
    formData.append('designation', designation)
    formData.append('deptname', selectedDepartmentId)
    formData.append('email', email)
    if (image !== null) {
      formData.append('image', image)
    } 
    try{
      const response = await axiosInstance.post('/employees/', formData,
          {
             headers: {'Content-Type':'multipart/form-data' }
          })
      console.log('ok respose', response.data)
      handleReset();

      setShowEmployeeAdd(false)

      const res_employeeList = await axiosInstance.get('/employees/')
      console.log('ok response getting new employeelist', response.data)
      setList(res_employeeList.data)

    }
    catch(error){
      console.log('error saving : ', error)
      return null

    }


  }


  return (
    <>
    <div className="form-area">
      <h4>Add Employee (EmployeeAdd5.jsx)</h4>


      <form onSubmit={handleSaveEmployee} >
        <div className="form-data"> 
          <div className="form-group ">
                <div className="row ">
                  <label className={`form-text  ${theme} `} htmlFor="empid">xxx Employee Id</label>
                  <input type="text" 
                  className='form-control'
                  name='empid' 
                  id='empid'
                  
                  value={empid}
                  onChange={(e)=>setEmpid(e.target.value)} required
                  />
                </div>
                <div className="row ">
                  <label className={`form-text  ${theme} `} htmlFor="empName">Employee Name</label>
                  <input type="text" 
                  className='form-control'
                  name='empName' 
                  id='empName'
                  
                  value={empName}
                  onChange={(e)=>setEmpName(e.target.value)} required
                  />
                </div>
                <div className="row   ">
                  <DropDownDepartments departments={departments} 
                setSelectedDepartmentId={setSelectedDepartmentId}/>

                </div>     
                <div className="row ">
                  <label className={`form-text  ${theme} `} htmlFor="designation">Designation</label>
                  <input type="text" 
                  className='form-control'
                  name='designation' 
                  id='designation'
                  
                  value={designation}
                  onChange={(e)=>setDesignation(e.target.value)} required
                  />
                </div>        

                {/* email */}
                <div className="row ">
                  <label className={`form-text  ${theme} `} htmlFor="email">Email</label>
                  <input type="text" 
                  className='form-control'
                  name='email' 
                  id='email'
                  
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)} required
                  />
                </div>  

                 {/* image */}
                <div className="row">
                  <input type="file" 
                    name='image' 
                    src={image}
                    // multiple
                    onChange={(e)=>setImage(e.target.files[0])} 
                  />
                </div>
          </div>
        </div>


        {loading ? (
          <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please waityyyy</button>
          ):(
          <button type='submit' className='btn btn-info d-block mx-auto'>Save xxx</button>
          )
        }

      </form>

    </div>
    </>
  )
}

export default EmployeeAdd5