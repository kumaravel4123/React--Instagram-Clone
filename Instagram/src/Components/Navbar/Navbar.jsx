import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar my-0">
            <div className="container-fluid">
                <img className='logo-image my-0 ms-4' src="images\instagram-text.png" alt="" />
                <form className="d-flex justify-content-center align-items-" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <i className="bi bi-heart"></i>
                </form>
            </div>
        </nav>
    )
}

export default Navbar