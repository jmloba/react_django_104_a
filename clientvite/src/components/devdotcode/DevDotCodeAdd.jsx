import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext} from '../AuthProvider'
import axiosInstance from '../../axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSpinner} from '@fortawesome/free-solid-svg-icons'

import DevDotCodeMain from './DevDotCodeMain';
import {Link} from 'react-router-dom'

import '../../assets/css/generalcss.css'
import Button from '../Button';

const DevDotCodeAdd = () => {
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    
  return (
    <>
    <div className={`main-body ${theme}`}>
      <div className={`body-data ${theme}`}>
        <h3 className={`body-data-title ${theme}`}   >Sample 
          devcode tutorial Main</h3>

        <div className= {`button-selection ${theme}`}>
          <Button text='DevDotCode Main' class="btn-outline-info" url='/devdotcode' />            
        </div>      
        <div className= {`body-data-list ${theme}`}>
          <h3>test dta</h3>
        </div>    

      </div>


    </div>
    </>
  )
}

export default DevDotCodeAdd