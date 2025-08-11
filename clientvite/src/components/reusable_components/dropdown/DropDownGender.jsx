  // note calling dropdown gender
  // <div className="row">
  //  <DropDownGender   setGenderValue={setGenderValue}  />
  //  </div>

  


import React from 'react'

const DropDownGender = (props) => {
   
  const options=[
     {label:"Male",  value:1},
    {value:2, label:"Female"},
    {value:3, label:"Others"}
  ]
  function handleSelect(event){
    props.setGenderValue(event.target.value)

    

  }
  return (
    <>
    <div className="gender-option d-flex justify-content-center mt-5 ">
      <div className="w-50 p-3 border rounded">
        <label htmlFor="gender">Gender</label>
        <select name='gender' className='form-select' onChange={handleSelect}  >

        {options.map( (option)=>(
          <option key={option.value} value={option.value} >{option.label} </option>

        )
        )}

      </select>



      </div>

    </div>
    </>
  )
}

export default DropDownGender