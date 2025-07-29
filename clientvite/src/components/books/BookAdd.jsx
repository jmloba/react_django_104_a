import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const BookAdd = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  
  const [title,setTitle]=useState("")
  const [errors,setErrors]= useState({})
  const[success,setSuccess]=useState(false)
  const [loading,setLoading] = useState(false)
  const [cover,setCover]=useState(null)

  const viewdata=()=>{
    console.log('cover data', cover)
  }
  function handleImage(e){
    console.log("files selected ", e.target.files[0])

    setCover(e.target.files)
    console.log("value of cover", cover)

    
  }
  
  const handleSaveBook = async (e)=>{
    e.preventDefault()
    const formData = new FormData()

    formData.append('title', title)
    // formData.append('cover', cover)
    console.log('formData Content :',formData)
    setLoading(true)
    try{
      axiosInstance.post('/books/',formData )
      .then((response)=>{
            console.log('response data  added***', response.data)
      })
      
      // clear errors
      setErrors({})
      setSuccess(true)


    }catch(error){
      setSuccess(false)
      console.log('error in saving:', error.response)
      setErrors(error.response.data)
    }finally{
      setLoading(false)
    }





  }
  return (
    <>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h4>Add Book</h4>
        <div className="container">
          <form  method='POST' onSubmit={handleSaveBook}>
            <div className="form-group">
                <input type="text" 
                className="form-control form-control-lg"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/> 

            </div>
            <div className="form-group">
              
              <label>Select Cover(Image)</label>
              <input type="file" 
                className="form-control form-control-lg"
                placeholder="Cover Image"
                name="cover"
                onChange={handleImage}

                // multiple
                // onChange={(e)=>setImage(e.target.files[0,1])}
                />
            </div>
            

            {success &&
            <div className="alert alert-success">"Data saved..."</div>
             
              } 

            {loading ? (
               <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
            ):(
               <button type='submit' className='btn btn-info d-block mx-auto'>Save</button>

            )
            
            }

          </form>
          {/* <button onClick={()=>viewdata()} >view data</button> */}
        </div>
        
      </div>

    </div>
    </>
  )
}

export default BookAdd