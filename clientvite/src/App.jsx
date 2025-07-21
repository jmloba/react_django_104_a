

import './assets/css/generalcss.css'

import LearnReact from './Components/LearnReact'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Main from './components/ui/Main'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import PostAdd from './components/posts/PostAdd'
import EmployeeAdd from './components/EmployeeAdd'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthProvider from './components/AuthProvider'


function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path='/' element={ <Main /> }/>
          <Route path='/register' element={ <Register/> }/>

          <Route path='/login' element={ <Login/> }/>
          <Route path='/logout' element={ <Logout/> }/>
          <Route path='/add_post' element={ <PostAdd/> }/>
          <Route path='/add_employee' element={ <EmployeeAdd/> }/>
          
          


        </Routes>
      <Footer/>  
      </BrowserRouter>
    </AuthProvider>
    
    
 
    
    </>
  )
}

export default App
