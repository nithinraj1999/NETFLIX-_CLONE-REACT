import React,{useEffect, useRef} from 'react'

import '../screens/SignUpScreen.css'
import { auth } from '../firebase'
function SignUpScreen() {

  const emailref = useRef(null)
  const passwordref = useRef(null)

  const register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error)
    });
  }

  const signIn = (e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    )
    .then((authUser) =>{
      console.log(authUser)
    })
    .catch((error)=>alert(error.message))
  }


  return (
    <div className='signupScreen'>
        <form>
          <h1>Sign In</h1>
          <input ref={emailref} placeholder="Email" type="email" />
          <input ref={passwordref} placeholder="Password" type="password" />
          <button type ="submit" onClick={signIn} >Sign In</button>
          <h4>
            <span className="signupScreen__gray">New to Netflix?</span>
            <span className="signupScreen__link" onClick={register} > Sign Up now.</span>  
          </h4>
        </form>
    </div>
  )
}

export default SignUpScreen
