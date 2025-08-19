
import './assets/css/var.css'
import './assets/css/generalcss.css'

import LearnReact from './Components/LearnReact'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'

import Books from './components/books/Books'
import BookAdd from './components/books/BookAdd'
import Employees from './components/employees/Employees'


import EmployeeAddGreatAdib from './components/employees/EmployeeAddGreatAdib'
import EmployeeAdd2 from './components/employees/EmployeeAdd2'
import EmployeeAdd4 from './components/employees/EmployeeAdd4'

import EmployeesTable from './components/employees/EmployeesTable'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import App_project from './components/app_projects/App_project'

import DevDotCodeMain from './components/devdotcode/DevDotCodeMain'
import DevDotCodeAdd from './components/devdotcode/DevDotCodeAdd'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import DashBoard from './components/dashboard/DashBoard'
import { useState } from 'react'

import './assets/css/generalcss.css' 
import '../src/components/Navbar/Navbar2.css'
import Task from './components/task/Task'
import Task_add from './components/task/Task_add'
import TaskReview from './components/task/TaskReview'
import axiosInstance from './axiosInstance'

import RestrictDefinedDates from './components/reusable_components/RestrictDefinedDates'
import ReactDatePickerScrollableMonth from './components/reusable_components/ReactDatePickerScrollableMonth'
import ReactDatePickerRange from './components/reusable_components/ReactDatePickerRange'
import PassingProps from './components/reusable_components/samples/PassingProps'


function App() {

  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path='/' element={ <Main /> }/>
          <Route path='/app_project' element={ <App_project/> }/>
          
          <Route path='/books' element={ <Books/> }/>
          <Route path='/books-add' element={ <BookAdd/> }/>
          

          <Route path='/devdotcode' element={ <DevDotCodeMain/> }/>
          <Route path='/devdotcode-add' element={ <DevDotCodeAdd/> }/>
          <Route path='/dashboard' element={ <DashBoard/> }/>

          <Route path='/employees' element={ <Employees/> }/>
          <Route path='/employees_table' element={ <EmployeesTable/> }/>
          

          <Route path='/employees-add3' element={ <EmployeeAddGreatAdib/> }/>

          <Route path='/employees-add2' element={ <EmployeeAdd2/> }/>
          <Route path='/employees-add4' element={ <EmployeeAdd4/> }/>


          <Route path='/register' element={ <Register/> }/>
          <Route path='/sign-up' element={ <Register/> }/>

          <Route path='/login' element={ <Login/> }/>
          <Route path='/logout' element={ <Logout/> }/>


          <Route path='/task' element={ <Task/> }/>
          
          <Route path='/task-add' element={ <Task_add/> }/>
          
          
          <Route path='/task-review' element={ <TaskReview/> }/>

          {/* dates */}
          <Route path='/datepicker-restricted-dates' element={ <RestrictDefinedDates/> }/>
          
          <Route path='/datepicker-scrollable-month' element={ <ReactDatePickerScrollableMonth/> }/>
          <Route path='/datepicker-daterange' element={ <ReactDatePickerRange/> }/>

          <Route path='/datepicker-daterange' element={ <ReactDatePickerRange/> }/>

          {/* REUSABLE */}
          <Route path='/reusable-passing-props' element={ <PassingProps/> }/>




        </Routes>
      <Footer/>  
      </BrowserRouter>
    </AuthProvider>
    
    
 
    
    </>
  )
}

export default App
