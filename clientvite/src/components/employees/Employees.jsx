import React from 'react'
import { useContext, useState , useEffect, } from 'react';
import { AuthContext} from '../AuthProvider'
import Button from '../Button';
import {Link} from 'react-router-dom'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate } from 'react-router-dom'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import './employees.css'


const Employees = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [showSearch, setShowSearch] = useState(true)
  const [showSearchArea, setShowSearchArea]=useState('noshow')
  const navigate=useNavigate()

  const toggle_search = ()=>{
    setShowSearch(!showSearch) 
    if (showSearch) {
      setShowSearchArea('show')
    }else{
      setShowSearchArea('noshow')
    }

    console.log('showsearch',showSearch)
        
  }
    
//list= data fetched  from employee api
  const [list,setList] = useState([])

  const [errors,setErrors] = useState({})
  const [success,setSuccess] = useState(false)

  const [empnoFrom,setEmpnoFrom] = useState('')
  const [empnoTo,setEmpnoTo] = useState('')
  const [textSearch,setTextSearch] = useState('')


  const handleSearch = async (e)=>{
    e.preventDefault()
    setEmpnoFrom('')
    setEmpnoTo('')
    console.log('search valuie is : ',textSearch)
    // sample endpoint
    // http://localhost:8000/api/v1/employees/?designation=doctor&emp_name=
    //http://127.0.0.1:8000/api/v1/employees/?q=prog
    try{


      // const response =  await axiosInstance.get(`/employees/?designation=${textSearch}`)

      const response =  await axiosInstance.get(`/employees/?q=${textSearch}`)
      
      setList(response.data)

    }catch(error){
      console.log(error)

    }


  }
  const handleSearchEmpno = async(e)=>{
    e.preventDefault()
    console.log('empno from ', empnoFrom)
    console.log('empno to ', empnoTo)
    setTextSearch('')

    // /employees/?q=&id_min=2323&id_max=2325


      try{
        const response =  await axiosInstance.get(`/employees/?id_min=${empnoFrom}&id_max=${empnoTo}`)
      
      setList(response.data)

      }catch(error){

      }



  }
  const handleDelete= async (id)=>{
      console.log('delete pressed', id)
      try{
        const post = await axiosInstance.delete(`/employees/${id}/`)
        console.log('response post :',post)
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
    <div className='employees'>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>

        <h2>Employee List</h2>

        <div className={`menu_option ${theme}`}>
          <Button text='Dashboard' class=" btn-outline-primary" url='/dashboard' />                   
          <Button text='Add Employee by GreatAdib' 
          class="btn-outline-primary" url='/employees-add3' />

          <Button text='Employee Add 2' 
          class="btn-outline-primary" url='/employees-add2' />

          {/* to use form proper;u in empadd3  */}
          <Button text='Employee Add 4 ' 
          class="btn-outline-primary" url='/employees-add4' />

          <button className='btn' onClick={toggle_search}> Show Search</button>
        </div>


        <div className={`search-area ${showSearchArea}`}>
          <div className="search1">
            <input type="text" name='searchtext' value={textSearch} onChange={(e)=>setTextSearch(e.target.value)}/>
            <button type='button' className='btn' onClick={handleSearch}>Search by Name/Designation</button>
          </div>  

          <div className="search2">
            <label htmlFor="empnoFrom">empno range</label>
            <div className="search-input">
              <input type="text" name='empnoFrom' value={empnoFrom} onChange={(e)=>setEmpnoFrom(e.target.value)}/>

              <input type="text" name='empnoTo' value={empnoTo} onChange={(e)=>setEmpnoTo(e.target.value)}/>
            </div>


            <button type='button' className='btn' onClick={handleSearchEmpno}>Search by Emp Id</button>

          </div>
        </div>


        {/* to display the list */}
        <div className={`data-list ${theme}`}>
          {

            list.map((employee,index) => {
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

    </div>
    </>
  )
}

export default Employees