import React from 'react'

import {useState, useEffect } from 'react'
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider'
import {Link} from 'react-router-dom'
import Button from '../Button';
import { fetchPosts, updatePost, deletePost,createPost } from '../services/apiService';


const DevDotCodeMain = () => {
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const [posts,setPosts] = useState([]) // iit value array

  useEffect( ()=>{
    const getPosts = async ()=>{
      const postData = await fetchPosts();
      setPosts(postData)
      console.log('postData: ', postData) 
    } 
    getPosts();
  }
  ,[]   )  ;

  const handleUpdatePost = async(id)=>{
    // console.log('passed id:', id)
    // record to update

    const updatedPost ={
      title:'Updated Post',
      // body:`this is body that has been updated ${Date.now()}`,
      body:'this is body that has been updated ',
      userId:1,
    }

    const post = await updatePost(id , updatedPost)
    setPosts(
      posts.map( (p) => p.id ===id  ? post : p   )
    )
  }
  const handleDeletePost = async (id)=>{
    console.log ('delete clicked ', id)
    const post = await deletePost(id  )
    setPosts(posts.filter( (p)=> p.id !==id  ))
    console.log('deletion response', post)
  }
  const handleCreatePost =  async()=>{
    const newPost ={
      title:'New Post',
      body:`the new post body area ${Date.now()}`,
      userId : 1}
    const post = await createPost(newPost)  
    setPosts([post, ...posts])
    console.log('data has been aded', post)

      
    
    

  }

  return (
    <>
    <div className={`main-body ${theme}`}>
      
      <div className={`body-data ${theme}`}>
        <h3 className={`body-data-title ${theme}`}   >Sample devcode tutorial Main</h3>

        <div className="menu_option">
          {/* <Button text='Add Post' class="btn-outline-info" url='/devdotcode-add' />             */}
          <button type="button" className='btn btn-outline-primary'
          onClick={handleCreatePost}> 
            Create Post</button>

          
        </div>
        <div className={`body-data-list  ${theme}`}>
          
          {posts.map(post =>(

            <div className={`card ${theme}`} key={post.id}>
              <h4 className="post-title">
                {post.title}
              </h4>
              <p className='post-content'>{post.body}</p>
              <p>Id is {post.id}</p>

              <div className="btn-group">

              <button 
              className='btn btn-outline-primary'
              onClick={()=>handleUpdatePost(post.id)}

              >Update</button>

              <button
              className='btn btn-outline-danger btn-sm  '
              onClick={()=>handleDeletePost(post.id)}
              >
                Delete</button>
              </div>

              


            </div>
          )

          )}


        </div>        

      </div>

    </div>
    </>
  )
}

export default DevDotCodeMain

 
//  https://jsonplaceholder.typicode.com/posts

// from you tube 
// https://www.youtube.com/watch?v=AstpAjPpu0U&t=1402s