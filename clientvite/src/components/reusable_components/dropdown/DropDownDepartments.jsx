import React from 'react'

const DropDownDepartments = ({departments,setSelectedDepartmentId}) => {
  function handleSelect(event){
    setSelectedDepartmentId(event.target.value)
    
  }
  return (
    <>
    <div className="gender-option d-flex justify-content-center mt-5 ">
      <div className="w-50 p-3 border rounded">
        <label htmlFor="department">Department</label>
        <select name='department' className='form-select form-control' onChange={handleSelect}  >


        {(departments).map( (option)=>(
          <option  value={option.id} >{option.deptname}-{option.id} </option>

        )
        )}

      </select>



      </div>

    </div>
    </>
  )
}

export default DropDownDepartments