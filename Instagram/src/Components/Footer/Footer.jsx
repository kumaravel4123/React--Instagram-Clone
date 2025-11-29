import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <div className='Footer'>
                    
                    <div className='navs-h mt-2 ' ><i className="bi bi-house-door-fill"></i></div>
                    <div className='navs' ><i className="bi bi-compass-fill"></i></div>
                    <div className='navs' ><i className="bi bi-film"></i></div>
                    <div className='navs' ><i className="bi bi-plus-lg"></i></div>
                    <div className='navs ' ><i className="bi bi-send-fill"></i></div>
                    <div className='navs me-3' onClick={()=>{navigate("/profile")}} ><i className="bi bi-person-circle"></i></div>
                </div>
    </div>
  )
}

export default Footer