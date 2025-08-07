import React from 'react'
import { useContext, useState , useEffect, } from 'react';
import { AuthContext} from '../AuthProvider'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate } from 'react-router-dom'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const Task_add = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const [errors,setErrors]= useState({})
    const[success,setSuccess]=useState(false)
    const [loading,setLoading] = useState(false)
    
    const [values, setValues] = useState({
          title: '',
          content:''
        })
    const handleChanges = (e) =>{
      e.preventDefault()
      console.log ('fields edited', e.target.name ,': ', e.target.value )
      setValues({...values,[e.target.name]:e.target.value})

    }
  
  const navigate=useNavigate()
  const sendMessage = (e) => {
    e.preventDefault();
    this.timer = setTimeout(() => alert('Hey ??'), 1000);
  }

  const handleReset = ()=>{
    setValues({
      title:'',
      content:''})

  }
  const handleSubmitForm = async (e)=>{
    e.preventDefault()
    console.log('values to save',{values})

    setLoading(true)
    try{
      const response = await axiosInstance.post('/Task/',values)
      console.log('response: ' , response.data)
      setSuccess(true)
      sendMessage()

    }catch(error){
      console.log('error response is :' ,error.response)
    }finally{
      setLoading(false)
    }
  }
     
  useEffect(()=>{
      const fetchProtectedData = async ()=>{
      try{
        const response = await axiosInstance.get('/Task/')
        
        setList(response.data)
        console.log('response fetching TAsk  data:',response.data)
      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.response)

      }
      }
      fetchProtectedData()
    },[])

  return (
    <>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h2>Form Task(Add)</h2>
        <div className={`menu_option ${theme}`}>
  

          <Button text='Dashboard' class=" btn-outline-primary" url='/dashboard' />    
          <Button text='Task' class=" btn-outline-primary" url='/task' />  
        </div>       
        <form  className={`form ${theme}`} onSubmit={handleSubmitForm}>
          <div className="form-group ">
            <div className="row">
              <label htmlFor='title' className={`form-text ${theme} `}>Title</label>

              <input type="text" 
              className="form-control form-control-lg" 
              placeholder = 'Title'
              
              name='title' 
              onChange={(e)=>handleChanges(e)}
              value = {values.title}
              />
            </div>
            <div className="row">
                 <label htmlFor='content' className={`form-text ${theme} `}>Content</label>
              <input type="text" 
              className="form-control form-control-lg" 
              placeholder = 'content'
              id='content' 
              name='content' 
              value = {values.content}
              
              onChange={ (e)=>handleChanges(e)} required
    
              />
            </div>

                  {success &&
            <div className="alert alert-success">"Data saved..."</div>
             
              } 
             <button type='button' className='btn btn-info d-block mx-auto'
             onClick={()=>handleReset()}
             >Reset</button>

              {loading ? (
                  <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please wait</button>
                  ):(
                  <button type='submit' className='btn btn-info d-block mx-auto'>Save</button>
                  )
              }
          </div>
        </form>        
      </div> 
    </div>     
 
    </>
    
  )
}

export default Task_add
