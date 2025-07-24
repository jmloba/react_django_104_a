import React, { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { useContext } from 'react'


const Login = () => {

const[username,SetUsername]= useState('')
const[password,SetPassword]= useState('')
const[loading,setLoading] =useState(false)

const navigate=useNavigate()
const [errors, setErrors]= useState('')

// # get from AuthContext if loggedin  note data is wraped in curly bracket
const {isLoggedin, setIsLoggedin} = useContext(AuthContext)

const handleLogin = async(e)=>{
  e.preventDefault()
  

  const userData ={username,password}
  console.log('userData -->:', userData)

  try{
    const response = await axios.post("http://localhost:8000/api/v1/token/",userData  )

    console.log('try response: ', response.data)

    localStorage.setItem('accessToken', response.data.access)
    localStorage.setItem('refreshToken',response.data.refresh)
    setIsLoggedin(true)
    console.log('login sucessful')

    navigate('/')
    

  }catch(error){
    console.log('errors login :', error)
    setErrors('Invalid  Credentials')

    console.log('error on invalid credentials ', error  )

  }finally{
    setLoading(false)
  }



}
  return   (
    <>
    <div className="main-body">
      <div className="row form-box justify-content-center">
        <div className="col-md-6 bg-light-dark">
          <h4 className='text-light'>Login to Portal</h4>
          <form onSubmit={handleLogin}>
            <div className='form-line'>
              <input type="text" className='form-control mb-3' placeholder='Enter Username'  
              value={username} 
              onChange={(e)=>SetUsername(e.target.value) }/>
            </div>



            <div className='form-line'>
              < input type="password" className='form-control mb-3' placeholder='Enter password' 
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
            />
            </div>
            {errors && 
                <div className='alert alert-danger text-center mx-5'>Invalid Credentials </div>
              
              }
     
            {loading ? (
                          <button type = 'submit' className='btn btn-info d-block mx-auto' disabled ><FontAwesomeIcon icon={faSpinner} spin/>Logging in</button>
      
            ):(
                  <button type = 'submit' className='btn btn-info d-block mx-auto'>Login</button>
            )}        
              
            
      
            

          </form>

        </div>

      </div>     
    </div>
    </>


  )
}



export default Login
