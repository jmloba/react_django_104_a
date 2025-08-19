import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import Input from '../reusable_components/input/Input';
import './employees.css'

const EmployeeAdd2 = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [loading,setLoading] = useState(false)
  const navigate=useNavigate()

  const [empId,setEmpId]=useState('')
  const [ empIdError,setEmpIdError] =useState('')

  const [name,setName]=useState('')
  const [ nameError,setNameError] =useState('')

  const [designation ,setDesignation]=useState('')
  const [ designatinonError,setDesignationError] =useState('')

  const [email,setEmail]=useState('')
  const [ emailError,setEmailError] =useState('')

  const [gender,setGender]=useState('')
  const [ genderError,setGenderError] =useState('')

const [department,setDepartment]=useState('')
  const [ departmentError,setDepartmentError] =useState('')

  const [image,setImage] = useState(null)
  const [ imageError,setImgeError] =useState('')


  const [ hasError,setHasError] =useState(true)

  // on changes
  const checkfields=()=>{
    setHasError(false)
        if (empId==''){
      setHasError(true)
    }
    if (name==''){
      setHasError(true)
    }
    if (designation==''){
      setHasError(true)
    }

  }
  const handleEmpIdChange= (e)=>{
    setEmpId(e.target.value)
    setEmpIdError(e.target.value===''?'Empid is empty':'')
    checkfields()
   }
   const handleGenderChange= (e)=>{
    setGender(e.target.value)
    setGenderError(e.target.value===''?'Gender is empty':'')
    checkfields()
   }
   const handleDepartmentChange= (e)=>{
    setDepartment(e.target.value)
    setDepartmentError(e.target.value===''?'Department is empty':'')
    checkfields()
   }



  const handleNameChange= (e)=>{
    setName(e.target.value)
    setNameError(e.target.value===''?'name is empty':'')
    
    checkfields()
    
  }
  const handleDesignationChange= (e)=>{
    setDesignation(e.target.value)
    setDesignationError(e.target.value===''?'Designation is empty':'')
    checkfields()
    
  
    
  }
  const handleEmailChange= (e)=>{
    setEmail(e.target.value)
    setEmailError(validateEmail(e.target.value)? '':'Invalid email')
    
    
  }
  const validateEmail = (email)=>{
      return /\$+@\$+/.test(email)
  }
  const handleImageChange= (e)=>{
    e.preventDefault
    setImage(e.target.files[0])
  }

  
  const handleReset =()=>{
    setEmpId('')
    setName('')
    setDesignation('')
    setEmail('')
    setImage(null)
  }
  const handleSubmitButton =async (e)=>{
    // alert(`Name is ${name} \n designation : ${designation} \n email ${email}`)
    e.preventDefault()

    const formData = new FormData()
    formData.append('emp_id',empId)
    formData.append('emp_name',name)
    formData.append('designation',designation)
    formData.append('email',email)
    formData.append('gender',gender)
    formData.append('department',department)
    if (image !== null) {
      formData.append('image', image)
    } 


        try{
        const response = await axiosInstance.post('/employees/', formData,
          {
             headers: {'Content-Type':'multipart/form-data' }
          }
          )
        console.log('ok respose', response.data)
        handleReset();
        navigate('/employees')

      }catch(error){
        console.error('Error Uploading image : ', error)
        return null;

      }
  }
  //   useEffect(()=>{
  //     if (hasError){
        
  //     }
  //  },[])
  
  return (
    <>
    <h2>Form</h2>  
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h4>Employee Add</h4>
    <form className={`form ${theme}`}>
      {/* ----  sample to call reusable input =========  */}
          <div className="input-flex">
               <Input 
               type='text'
               placeholder='Enter Employee Id'
               value={empId}
               errorMessage={empIdError}
               customStyles={{width: '300px'}}
               onChange={handleEmpIdChange}
              />   
              <Input 
               type='text'
               placeholder='Enter Name'
               value={name}
               errorMessage={nameError}
               customStyles={{width: '300px'}}
               onChange={handleNameChange}
              />   
               <Input 
               type='text'
               placeholder='Enter Designation'
               value={designation}
               errorMessage={designatinonError}
               customStyles={{width: '300px'}}
               onChange={handleDesignationChange}
              />   
              <Input 
               type='email'
               placeholder='Enter Email'
               value={email}
               errorMessage={emailError}
               customStyles={{width: '300px'}}
               onChange={handleEmailChange}
              />    
              <Input 
               type='text'
               placeholder='Gender'
               value={gender}
               errorMessage={genderError}
               customStyles={{width: '300px'}}
               onChange={handleGenderChange}
              />    

           <Input 
               type='text'
               placeholder='Department'
               value={department}
               errorMessage={departmentError}
               customStyles={{width: '300px'}}
               onChange={handleDepartmentChange}
              />    
         {/* image */}
                <div className="row image ">
                  <input type="file" 
                    name='image' 
                    src={image}
                    // multiple
                    onChange={(e)=>setImage(e.target.files[0])} 
                  />
                </div>
             
             
              {hasError ?(
              <button onClick={handleSubmitButton} disabled >Entries has Error </button>

              ):(
                <button onClick={handleSubmitButton}  >submit</button>
              )}
              
            
          </div>
{/* ⇈⇈⇈  ---- sample to call reusable input =========  */}
    </form>

      </div>
    </div>
    </>

    
  )
}

export default EmployeeAdd2