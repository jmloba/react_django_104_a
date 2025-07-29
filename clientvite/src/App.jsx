
import './assets/css/var.css'
import './assets/css/generalcss.css'

import LearnReact from './Components/LearnReact'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'

import Books from './components/books/Books'
import BookAdd from './components/books/BookAdd'
import BookAdd_yousaf from './components/books/BookAdd_yousaf'

import Employees from './components/employees/Employees'
import EmployeesAdd from './components/employees/EmployeesAdd'

import EmployeesAdd2 from './components/employees/EmployeesAdd2'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'

import DevDotCodeMain from './components/devdotcode/DevDotCodeMain'
import DevDotCodeAdd from './components/devdotcode/DevDotCodeAdd'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import DashBoard from './components/dashboard/DashBoard'
import { useState } from 'react'

import './assets/css/generalcss.css' 
import '../src/components/Navbar/Navbar2.css'


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path='/' element={ <Main /> }/>
          <Route path='/books' element={ <Books/> }/>
          <Route path='/books-add' element={ <BookAdd/> }/>
          <Route path='/books-add-yousaf' element={ <BookAdd_yousaf/> }/>

          <Route path='/devdotcode' element={ <DevDotCodeMain/> }/>
          <Route path='/devdotcode-add' element={ <DevDotCodeAdd/> }/>


          <Route path='/employees' element={ <Employees/> }/>
          <Route path='/employees-add' element={ <EmployeesAdd/> }/>

          <Route path='/employees-add2' element={ <EmployeesAdd2/> }/>


          <Route path='/register' element={ <Register/> }/>

          <Route path='/login' element={ <Login/> }/>
          <Route path='/logout' element={ <Logout/> }/>


          <Route path='/dashboard' element={ <DashBoard/> }/>
          
          


        </Routes>
      <Footer/>  
      </BrowserRouter>
    </AuthProvider>
    
    
 
    
    </>
  )
}

export default App
