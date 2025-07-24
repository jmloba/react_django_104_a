

import './assets/css/generalcss.css'

import LearnReact from './Components/LearnReact'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Books from './components/books/Books'
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
