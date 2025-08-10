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


const AppProjectManagerAdd = () => {
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const [name,setName] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate=useNavigate()
    function viewEntries(){
      console.log('Name:', name)
    }
    function handleReset(){
      setName('')

    }
    const handleSaveForm = async(e)=>{
      e.preventDefault();
      viewEntries()
      const formData = new FormData();
      formData.append('name', name)
      try{
        const response = await axiosInstance.post('/projectmanager/', formData)
        console.log('ok respose', response.data)
        handleReset();
        navigate('/dashboard')

      }catch(error){
        console.log('error saving : ', error)
        return null


      }
    }
  return (
    <>
    <div className="add-form">
      <h4>Add project Manager</h4>
      <form className={`form ${theme}`}  onSubmit={handleSaveForm}>
        <div className="form-data">
          <div className="form-group form-control">
            {/* name */}
              <div className="row">
                <label className={`form-text ${theme} `} htmlFor="name">Name</label>
                <input type="text" 
                name='name' 
                value={name}
                onChange={(e)=>setName(e.target.value)} required
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

export default AppProjectManagerAdd