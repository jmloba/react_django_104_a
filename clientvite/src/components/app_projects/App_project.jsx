import React from 'react'
import {useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance'


import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import Button from '../Button';
import AppProjectManagerAdd from './AppProjectManagerAdd';

import '../../assets/css/generalcss.css'
import '../../assets/css/var.css'
import './App_project.css'
const App_project = () => {

  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [list,setList] = useState([])
  const [projectManagers,setProjectManagers] = useState([])
  const [projects,setProjects] = useState([])
    const [loading,setLoading] = useState(false)

  const handleProjectDel= async(id)=>{
    try{
      const rec = await axiosInstance.delete(`/projects/${id}/`)
        console.log('response project deletion :',rec)
        setProjects(projects.filter( (p)=> p.id !==id  ))

    } catch(error){
      console.log(error)
    }

  }  
  const handleProjectMgrDel = async(id) =>{
        try{
      const rec = await axiosInstance.delete(`/projectmanager/${id}/`)
        console.log('response project deletion :',rec)
        setProjectManagers(projectManagers.filter( (p)=> p.id !==id  ))

    } catch(error){
      console.log(error)
    }
  }

  const GetProject = async()=>{
    try{
      setLoading (true)
      const res = await axiosInstance('/projects/')
      
      setProjects(res.data)
      console.log('from api -> projects',projects)

      const projmgr = await axiosInstance('/projectmanager/')
      setProjectManagers(projmgr.data)

      setLoading (false)

    }catch(error){
      console.log('App Project Error', res.error)
    }
    

  }
  useEffect(()=>{
    GetProject()
  },[]

  )

  return (
    <>
    <div className={`main-body ${theme}`}>
      
      <div className={`data-list ${theme}`}>
        
       

        {/* declare table for project */}
        <div className="data-table">
          <div className="table-div">
            <h2>Projects</h2>
            <table className='table table-hover table-striped table-success'>
              <thead className='table-dark'>
                <tr>
                  <th>index</th>
                  <th>Record Number</th>
                  <th>Project Name</th>
                  <th>Project Mgr</th>
                  <th>xx</th>
                </tr>
              </thead>
              <tbody>
                {
                projects.map((project, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{project.id}</td>
                      <td>{project.name}</td>
                      <td>{project.projectmanager}</td>
                      
                      <td>
                        <button type='btn btn-outline-danger' onClick={()=>handleProjectDel(project.id)} >Delete</button>
                      </td>

                    </tr>

                )
                })
                }
              </tbody>
            </table>
          </div>
        
        {/* declare table for projectmanager */}
          <div className="table-div">
            <AppProjectManagerAdd />
            <h2>Project Managers</h2>
            <table className='table table-hover table-striped table-success'>
              <thead className='table-dark'>
                <tr>
                  <th>index</th>
                  <th>Record Number</th>
                  <th>Project Manager</th>
                  <th>xx</th>
                </tr>
              </thead>
              <tbody>
                {
                projectManagers.map((projectmanager, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{projectmanager.id}</td>
                      <td>{projectmanager.name}</td>
                      
                      <td>
                        <button type='btn btn-outline-danger' onClick={()=>handleProjectMgrDel(projectmanager.id)} >Delete</button>
                      </td>

                    </tr>

                )
                })
                }
              </tbody>
            </table>
          
          </div>

        </div>


      </div>
    </div>

    
    </>
  )
}

export default App_project