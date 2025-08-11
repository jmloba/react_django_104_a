
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

        
        <div className="button-group">
          <h4>Dashboard</h4>
          <div className= {`button-selection ${theme} ` }>
          {/* <NavLinksTutor1 /> */}
          <Button text='Books' class="btn-outline-info" url='/books' />            
          <Button text='Employees' class="btn-outline-info" url='/employees' />  

          <Button text='Employees(Table)' class="btn-outline-info " url='/employees_table' /> 


          <Button text='DevDotCode tutorial' class="btn-outline-info" url='/devdotcode' />            

          <Button text='Task' class="btn-outline-info" url='/task' />    
          <Button text='ProjectApp' class="btn-outline-info" url='/app_project' />    

          {/*         <Button text='Task Reviews' class="btn-outline-info" url='/task-review' />     */}


          </div>
        </div>

        {/* sample for reusable component */}
        <div className="button-group">
            
            <Button text='reusable Sample1' class="btn-outline-info" url='/reusable-passing-props' />   
        </div>


        {/* datepicker */}
        <div className="button-group">
          <h3>Dates</h3>
          <div className= {`button-selection ${theme} ` }>
            
            <Button text='restricted dates' class="btn-outline-info" url='/datepicker-restricted-dates' />   

            <Button text='datepicker scrollable month' 
            class="btn-outline-info" url='/datepicker-scrollable-month' />            

            <Button text='datepicker daterange' 
            class="btn-outline-info" url='/datepicker-daterange' />       
          </div>

        </div>




         

      </div>

    </>
    
  )
}

export default DashBoard