import React, { useState,useRef,useContext } from 'react'
import '../screens/LoginScreen.css'
import SignUpScreen from './SignUpScreen';
// import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../store/Context';

function LoginScreen() {
  const navigate = useNavigate()
  const emailref = useRef(null)
  const passwordref = useRef(null)
  const {firebase} = useContext(FirebaseContext)

  const handleSignUp =()=>{
    navigate("/signup")
  }

  const signInFn = (e) =>{
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    )
    .then((authUser) =>{
      console.log(authUser)
      navigate('/home')
    })
    .catch((error)=>alert("cannot login"))
  }

  // const [signIn,setSignIn] = useState(false) 
    return (
        <div className="loginScreen">
  
         <div className="loginScreen_background">
            <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
            <button onClick={ handleSignUp} className="loginScreen__button">SingUp</button>
          </div>
          <div className="loginScreen__gradient"/>
          <div className="loginScreen__body">
          
           
              <h1>Unlimited movies, TV shows and more</h1>
              <div className="loginScreen__input">
                <form>
                  <input ref={emailref} type="email" placeholder="Email Address" />
                  <input ref={passwordref}  type="password" placeholder="Enter password" />
                  <button type='submit' onClick={signInFn} className="loginScreen__getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
              {/* </>
            )}  */}
           
          </div>
         
        </div>
      );
      
}

export default LoginScreen
