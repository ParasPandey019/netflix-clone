import React, {useState, useEffect}from 'react';
import "../stylesheets/Navbar.css";
import Logo from "../media/logo.png";



function Navbar(props) {
  const [show, setShow] = useState(false);

  const transitionNavbar = () =>{
    if(window.scrollY > 100){
      setShow(true);
    }
    else{
      setShow(false)
    }
  }

 

  useEffect(() =>{
    window.addEventListener("scroll", transitionNavbar);
    return () =>window.removeEventListener("scroll", transitionNavbar)
  },[])

  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
      <div className="navLeft">
        <img  className="navbar_logo" src={Logo} alt=""></img>
        <span className='navLinks'>Home</span>
        <span className='navLinks'>TV Shows</span>
        <span className='navLinks'>My List</span>
      </div>
      <div className='navRight'>
       <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <img className="navbar_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""></img>
      </div>
    </div>
  )
}

export default Navbar;