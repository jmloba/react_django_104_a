import React from 'react'
import {useState} from 'react'

import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const Register = () => {

  const[username,SetUsername]= useState('')
  const[email,setEmail]= useState('')
  const[password,SetPassword]= useState('')
  const[errors,setErrors] =useState('')
  const[success,setSuccess]=useState(false)
  const[loading,setLoading] =useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    const userData= {username, email, password}
    console.log('userData : \n ***', userData)

    try{
      // check if cors installed django
      // pip install django-cors-headers
      const response =await axios.post('http://127.0.0.1:8000/api/v1/register/',
        userData
      )
      console.log('response :', response.data)
      // clear errors
      setErrors({})
      setSuccess(true)

    }catch (error){
      setErrors(error.response.data)
      console.log('error on tryblock ', error.response.data )

    }finally{
      setLoading(false)
    }

    // https://www.youtube.com/watch?v=5FFqW7D5W20&t=17656s   5:44:00


  }

  return (
    
    <>
    <div className="main-body">
      
      <div className="row form-box justify-content-center">
        <div className="col-md-6 bg-light-dark">
          <h4 className='text-light'>Registration Page</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-line'>
              <input type="text" className='form-control mb-3' placeholder='Enter Username'  
              value={username} 
              onChange={(e)=>SetUsername(e.target.value) }/>

              <small> 
                {errors.username && 
                <div className='text-danger'>
                  {errors.username}
                </div>}
              </small>

            </div>
            <div className='form-line'>
              <input type="text" className='form-control mb-3' placeholder='Enter email' 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} />

              <small> 
                {errors.email && 
                <div className='text-danger'>
                  {errors.email}
                </div>}
              </small>
            </div>


            <div className='form-line'>
              
            

              < input type="password" className='form-control mb-3' placeholder='Enter password' 
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
            />
              <small> 
                {errors.password && 
                <div className='text-danger'>
                  {errors.password}
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

export default Register