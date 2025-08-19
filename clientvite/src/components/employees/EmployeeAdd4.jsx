import React,{useState} from 'react'
import './EmployeeAdd4.css'

const EmployeeAdd4 = () => {

  const[text,setText] = useState('')
  const[formData,setFormData] = useState({
    username :'',
    email:'',
    occupation:'',
    gender:'',
    languages:[],


  })
   const onChangeHandler2 = (event) => {
    console.log('on change',event)
    if (event.target.name === 'languages') {
      let copy = { ...formData }

      if (event.target.checked) {
        console.log('language checked',event)
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }
  const onChangeHandler =(event)=>{
    console.log('on change event *** ',event)
    if(event.target.name==='languages'){
      let copy = {... formData}
      console.log('\n\nchange in languages')
        if (event.target.checked) {

        }else{

        }
    } 
    else{
      console.log('changes in other ----inputs')
      setFormData( ()=>(
        {
        ...formData,[event.target.name]:event.target.value
        }
        ))
    }

    

  } 

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className='container'>
      <h2>Header</h2>
   <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        {/* select option */}
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* gender radio button */}
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Languages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" onClick={console.log('result form data',{formData})}>Submit</button>
        </div>
      </form>
      <div className='result-div'>
        <p>result</p>
        <p>username: <span> {formData.username}</span></p>
        <p>email : <span>{formData.email}</span> </p>
        <p>occupation : <span>{formData.occupation}</span> </p>
        <p>gender : <span>{formData.gender}</span> </p>
        <p>languages : <span>{formData.languages}</span> </p>
      </div>
      



    </div>
    
  )
}

export default EmployeeAdd4