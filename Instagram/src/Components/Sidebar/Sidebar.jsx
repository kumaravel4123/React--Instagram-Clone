import React from 'react'
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';



function Sidebar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="sidebar">
                <div className=" m-3 position-fixed ">
                    <div className='d-flex flex-column'>
                        <a href="#"> <img className='logo-image ' src="images\instagram-text.png" alt="" /> </a>
                        <a href=""> <div className='navs-h' ><i className="bi bi-house-door-fill"></i> Home</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-search"></i> Search</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-compass-fill"></i> Explore</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-film"></i> Reels</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-send-fill"></i> Message</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-bell-fill"></i> Notification</div> </a>
                        <a href=""> <div className='navs' ><i className="bi bi-plus-lg"></i> Create</div> </a>
                        <a href="">  <div className='navs' onClick={() => { navigate("/profile") }} ><i className="bi bi-person-circle"></i> Profile</div> </a>
                    </div>
                    <div id='morebar' className=' d-flex flex-column position-fixed bottom-0 mb-3 '>
                        <a href=""> <div className='navs-b' ><i className="bi bi-list"></i> More</div> </a>
                        <a href=""> <div className='navs-b' ><i className="bi bi-ui-checks-grid"></i>From Meta</div> </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar