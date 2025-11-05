import React from 'react'
import "./Sidebar.css";

function Sidebar() {
    return (
        <>
            <div className="m-3">
                <div className='d-flex flex-column'>
                    <img className='logo-image ' src="images\instagram-text.png" alt="" />
                    <div className='navs-h' ><i className="bi bi-house-door-fill"></i> Home</div>
                    <div className='navs' ><i className="bi bi-search"></i> Search</div>
                    <div className='navs' ><i className="bi bi-compass-fill"></i> Explore</div>
                    <div className='navs' ><i className="bi bi-film"></i> Reels</div>
                    <div className='navs' ><i className="bi bi-send-fill"></i> Message</div>
                    <div className='navs' ><i className="bi bi-bell-fill"></i> Notification</div>
                    <div className='navs' ><i className="bi bi-plus-lg"></i> Create</div>
                    <div className='navs' ><i className="bi bi-person-circle"></i> Profile</div>
                </div>
                <div className='d-flex flex-column position-fixed bottom-0 mb-3'>
                    <div className='navs-b' ><i className="bi bi-list"></i> More</div>
                    <div className='navs-b' ><i className="bi bi-ui-checks-grid"></i> Also from Meta</div>
                    
                </div>
            </div>
        </>
    )
}

export default Sidebar