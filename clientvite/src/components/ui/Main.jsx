import React from 'react'
import Button from '../Button'

const Main = () => {
  return (
    <>
    <div className="main-body rounded">
      <div className='text-center '>
      <h3 className='text-center Main-title'>Main Body</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae, temporibus dicta tempore quidem, eveniet voluptates dolorem eum error quasi dolor atque sunt impedit suscipit!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus asperiores velit, quas ipsam vitae quam hic reprehenderit. Aliquid!</p>
        
      <Button text='Explore Now' class="btn-outline-warning"  url='/dashboard' />
      
      </div>

    </div>
    
    </>

  )
}

export default Main