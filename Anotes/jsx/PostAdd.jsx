
import {useState} from 'react'



const PostAdd = () => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [slug, setSlug] = useState('')

   const handleFormSubmit = async (e)=>{
    e.preventDefault()
    const userData= {title,body,slug}
    console.log ('entered data :', userData)
   
   }

  
  return (
    <>
    <div className="main-body">
      <div className="row form-box justify-content-center">
        <div className="col-md-6 bg-light-dark">
          <h4 className='text-light'>Add Post</h4>
          <form action="" onSubmit={handleFormSubmit}>

            <input type="text"   className='form-control mb-3' placeholder='Enter Title'  
            value={title}
              onChange={(e)=>setTitle(e.target.value) }
              />

            <input type="text"   className='form-control mb-3' placeholder='Enter Body'  
            value={body} 
            onChange={(e)=>setBody(e.target.value) }/>


            <input type="text"   className='form-control mb-3' placeholder='Enter slug'  
            value={slug} 
            onChange={(e)=>setSlug(e.target.value)}/>
            <button type='submit' className='btn btn-info'>Save</button>

            


          </form>

        </div>
      </div>  
    </div>

    
    </>
    
  )
}

export default PostAdd