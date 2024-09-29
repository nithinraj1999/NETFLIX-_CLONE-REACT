import React, { useState, useEffect,useContext } from "react";
import { AuthContext,FirebaseContext } from "./store/Context"; 

import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {

  const [show,handleShow] = useState(false)
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();
 
  const transitionNavBar =() =>{
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar,);
  },[])

  const logout =()=>{
    firebase.auth().signOut();
    navigate("/")
  }

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav_content">
        <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo"
            />
          <button className="logout__button" onClick={logout}>Logout</button>

        <img 
           className="nav_avatar"
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile"
           />
      </div>
    </div>
  );
}

export default Nav;
