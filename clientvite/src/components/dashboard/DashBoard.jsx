
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'
import Button from '../Button';
import NavLinksTutor1 from '../NavLinksTutor1';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';

import '../Navbar/Navbar2.css' 


const DashBoard = () => {

  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  useEffect( ()=>{
    const fetchProtectedData= async ()=>{
      try{
        // const response = await axiosInstance.get('/books/')
        const response = await axiosInstance.get('/protected-view/')

        console.log('dashboard try response', response.data)
  
      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.data)

      }
    }
    fetchProtectedData();
    },[])  
  


  return (

    <>
      <div className= {`dashboard main-body ${theme}`}>

        <h4>Dashboard</h4>
        <div className= {`button-selection ${theme} ` }>
          {/* <NavLinksTutor1 /> */}
          <Button text='Books' class="btn-outline-info" url='/books' />            
          <Button text='Employees' class="btn-outline-info" url='/employees' />  

          <Button text='Employees(Table)' class="btn-outline-info " url='/employees_table' /> 


          <Button text='DevDotCode tutorial' class="btn-outline-info" url='/devdotcode' />            

          <Button text='Task' class="btn-outline-info" url='/task' />    
          {/*         <Button text='Task Reviews' class="btn-outline-info" url='/task-review' />     */}


         </div>

         {/* <div className="menu_option d-block">
          <ul>
            <li>
              <Link to='/books' className='navbar-brand navbartext ' >Books</Link>   
            </li>
          </ul>
         </div> */}

         

      </div>

    </>
    
  )
}

export default DashBoard