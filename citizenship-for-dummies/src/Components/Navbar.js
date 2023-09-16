
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function navbjar() {
  return (
    <>
    <nav className = "navbar">
        <div className="navbar-container">
         <Link to="/" className="navbar-logo">
            TRVL <i class="fa fa-camera-retro fa-2x"></i> fa-2x
         </Link>   
        </div>
    </nav>
    </>
  )
}

