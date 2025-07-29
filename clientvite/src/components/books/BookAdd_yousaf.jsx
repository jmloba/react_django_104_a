import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const BookAdd_yousaf = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  
  const [title,setTitle]=useState("")
  const [cover,setCover]=useState(null)


  const [post,setPost]  = useState({
    title :''
        // cover :'' 
   })


  const [errors,setErrors]= useState({})
  const[success,setSuccess]=useState(false)
  const [loading,setLoading] = useState(false)


  const viewdata=()=>{
    console.log('cover data', cover)
  }

  function handleImage(e){
    console.log("files selected ", e.target.files[0])

    setCover(e.target.files)
    console.log("value of cover", cover)

    
  }
  const handleInput = (e) => {


    setPost({...post,[e.target.name]:e.target.value})

  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log('on submit :' , post)
    setLoading(true)

    await axiosInstance.post('/books/',{post} )
    .then(response=> console.log(response))
    .catch(err=>console.log(err))
    




  }


  return (
    <>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h4>Add Book</h4>
        <div className="container">


          <form  method='POST' onSubmit={handleSubmit}>

            <div className="form-group">
                <input type="text" 
                className="form-control form-control-lg"
                placeholder="Title"
                name="title"
                value={post.title}
                
                

                onChange={(e)=>handleInput(e)}/> 

            </div>
            {/* <div className="form-group">
              
              <label>Select Cover(Image)</label>
              <input type="file" 
                className="form-control form-control-lg"
                placeholder="Cover Image"
                value = {post.cover}
                
                
                name="cover"
                onChange={(e)=>handleInput(e)}

                // multiple
                // onChange={(e)=>setImage(e.target.files[0,1])}
                />
            </div> */}
            

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

export default BookAdd_yousaf