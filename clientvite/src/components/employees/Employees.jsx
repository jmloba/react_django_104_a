import React from 'react'
import { useContext, useState , useEffect, } from 'react';
import { AuthContext} from '../AuthProvider'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate } from 'react-router-dom'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const Employees = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const navigate=useNavigate()
    
//list= data fetched  from employee api
  const [list,setList] = useState([])

  const [errors,setErrors]= useState({})
  const[success,setSuccess]=useState(false)
  const handleDelete= async (id)=>{
      
      console.log('delete pressed', id)
      try{
        const post = await axiosInstance.delete(`/employees/${id}/`)
        console.log('respose post :',post)
        setList(list.filter( (p)=> p.id !==id  ))



      }catch(error){
        console.log(error)
      }


    }
    
  useEffect(()=>{
      const fetchProtectedData = async ()=>{
      try{
        const response = await axiosInstance.get('/employees/')
        
        setList(response.data)
        console.log('response fetching employee  data:',response.data)
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
        <h2>Employee List</h2>
        <div className={`menu_option ${theme}`}>
  

          <Button text='Dashboard' class=" btn-outline-primary" url='/dashboard' />                   
 
          
          <Button text='Add Employee by GreatAdib' 
          class="btn-outline-primary" url='/employees-add3' />

        </div>

        <div className={`data-list ${theme}`}>
          {

            list.map((employee) => {
              return (
                
                
                <li key={employee.id} className=
                {`card ${theme} `}>
                  <div className='employee-card-image'>
                    <img src={employee.image} alt="" />

                  </div>
                  <p>Employee Id: {employee.emp_id}</p>
                  <p>Name : {employee.emp_name}</p>
                  <p>Designation : {employee.designation}</p>
                  <p>Email : {employee.email}</p>

                  <div className='btn-group'>
                    <button className='btn btn-danger ' onClick={()=>handleDelete(employee.id)}> Delete</button>
                  </div>
                  

                </li>

                

              )
            }

            )

            

          }

        </div>
      </div>

    </div>
    </>
  )
}

export default Employees