
import React, { useEffect, useState } from 'react'

const DropDownPManagers = (props) => {
  function handleSelect(event){
    
    props.setSelectedManagerId(event.target.value)
    
  }
  
  return (
    <>
     <div className="gender-option d-flex justify-content-center mt-5 ">
      <div className="w-50 p-3 border rounded">
        <label htmlFor="gender">ProjectManagers</label>
        <select name='manager' className='form-select form-control' onChange={handleSelect}  >


        {(props.list).map( (option)=>(
          <option  value={option.id} >{option.name}-{option.id} </option>

        )
        )}

      </select>



      </div>

    </div>

    </>
  )
}

export default DropDownPManagers