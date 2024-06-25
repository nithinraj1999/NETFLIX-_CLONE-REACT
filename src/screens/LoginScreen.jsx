import React, { useState } from 'react'
import '../screens/LoginScreen.css'
import SignUpScreen from './SignUpScreen';
function LoginScreen() {

  const [signIn,setSignIn] = useState(false) 

    return (
        <div className="loginScreen">
  
         <div className="loginScreen_background">
            <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
            <button onClick={() => setSignIn(true)} className="loginScreen__button">Singin</button>
          </div>
          <div className="loginScreen__gradient"/>
          <div className="loginScreen__body">
          {signIn ? (
              <SignUpScreen/>
            ) : (
              <>
           
              <h1>Unlimited movies, TV shows and more</h1>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button onClick={()=> setSignIn(true)} className="loginScreen__getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
              </>
            )} 
           
          </div>
         
        </div>
      );
      
}

export default LoginScreen
