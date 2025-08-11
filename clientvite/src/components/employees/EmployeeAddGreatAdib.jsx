import React from 'react'
import Button from '../Button'
import { useContext, useState } from 'react';


import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import Input from '../reusable_components/input/Input';


const EmployeeAddGreatAdib = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [loading,setLoading] = useState(false)
  const navigate=useNavigate()

  const [empid,setEmpid] = useState('')
  const [empName,setEmpName] = useState('')
  const [designation,setDesignation] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState('')
  const [department,setDepartment] = useState('')
  const [image,setImage] = useState(null)


// to be used in reusable component
  const [email2,setEmail2]=useState('')
  const [ emailError,setEmailError] =useState('')

  const handleEmailChange= (e)=>{
    setEmail2(e.target.value)
    setEmailError(validateEmail(e.target.value)? '':'Invalid email')

  }
  const handleCancelButton =()=>{
    setEmail2('')
  }
  const handleSubmitButton =()=>{
    alert(`email is ${email2}`)
  }
  const validateEmail = (email)=>{
      return /\$+@\$+/.test(email)
  }
//-----
  const handleReset =()=> {
    setEmpid(''),
    setEmpName(''),
    setDesignation(''),
    setEmail(''),
    setGender(''),
    setDepartment(''),
    setImage(null)

  }



  function viewEntries(){
    console.log('empid', empid)
    console.log('empName', empName)
    console.log('designation', designation)
    console.log('email', email)
    console.log('gender', gender)
    console.log('department', department)
    console.log('image', image)

  }

  const handleSaveForm =  async (e)=>{
    e.preventDefault()
    viewEntries()

    const formData = new FormData()
    formData.append('emp_id',empid)
    formData.append('emp_name',empName)
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
    
    
  return (
    <>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h4>Employee Add</h4>

          <div className="menu_option">
            <Button text='Employee List' class="btn-outline-primary" url='/employees' /> 
          </div>

{/* ----  sample to call reusable input =========  */}
          <div className="input-flex">
            <form className={`form ${theme}`}>
            
              <Input 
               type='email'
               placeholder='Enter email'
               value={email2}

               
               errorMessage={emailError}
               customStyles={{width: '300px'}}
               onChange={handleEmailChange}

              />   
              <button onClick={handleSubmitButton}>submit</button>

            </form>
          </div>
{/* ⇈⇈⇈  ---- sample to call reusable input =========  */}


          <form className={`form ${theme}`} onSubmit={handleSaveForm}>
            <div className={`form-data ${theme}`} >
              <div className="form-group form-control">

                
                {/* empid */}
                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="empid">Emp Id</label>
                  <input type="text" 
                  name='empid' 
                  value={empid}
                  onChange={(e)=>setEmpid(e.target.value)} required
                  />
                </div>
                {/* name */}
                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="empName">Name</label>
                  <input type="text" 
                    name='empName' 
                    value={empName}
                    onChange={(e)=>setEmpName(e.target.value)} required
                  />
                </div>
                {/* designation */}
                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="designation">Designation</label>
                  <textarea type="text" 
                    name='designation' 
                    value={designation}
                    onChange={(e)=>setDesignation(e.target.value)} required
                  />
                </div>
                {/* email */}

                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="email">Email</label>
                  <input type="email" 
                    name='email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} required
                  />
                </div>
                {/* gender */}
                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="email">Gender</label>
                  <input type="text" 
                    name='gender' 
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)} required
                  />
                </div>
                                {/* department */}
              
                <div className="row">
                  <label className={`form-text ${theme} `} htmlFor="department">Department</label>
                  <input type="text" 
                    name='department' 
                    value={department}
                    onChange={(e)=>setDepartment(e.target.value)} 
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

                <div className="row">
                  {/* <CustomSelectDepartment /> */}
                  
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
    </div>
    </>
  )
}

export default EmployeeAddGreatAdib