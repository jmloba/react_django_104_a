import React from 'react'
import {useState} from 'react'
import { Form } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../AxiosInstance'

const Books = () => {
  const [title,setTitle ] = useState('')
  const [cover,setCover ] = useState()
  const funcNewBook = ()=>{
    const uploadData = new FormData();
    uploadData.append('title',title)
    uploadData.append('cover',cover, cover.name);

    console.log('Title:', title,'\nCover:',cover)

    fetch('http://127.0.0.1:8000/api/v1/books/',
      {
        method:'POST',
        body: uploadData
      }).then(res => console.log(res))
      .catch(error => console.log ('error',error))
    }
  
  useEffect( ()=>{
    const fetchProtectedData =async ()=>{
      try{
        const response = await axiosInstance.get('/protected-view/'
        )
        console.log ('response is :',response.data)

      }catch(error){
        console.error('***error in fetching data', error)

      }

    }
    fetchProtectedData()
  },[]

  )
  
  
  return (
  <>
    <div className="main-body">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark">

          <h4 className='text-light'>Add Books Page</h4>
          <div className="div-form">
            <div className="form-line">
              <label>
                <input type="text" value={title} onChange={(evt)=>setTitle(evt.target.value)}/>
              </label>
            </div>
            <div className="form-line">
            <label>
              <input type="file"  onChange={(evt)=>setCover(evt.target.files[0])}/>
            </label>

            </div>

            <br />
            <button onClick={()=> funcNewBook()} className='btn btn-outline-primary'>New Book</button>

          </div>

        </div>  
      </div>  
    </div>      
  </>
   
  )

}

export default Books
