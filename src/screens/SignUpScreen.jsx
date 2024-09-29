// import React,{useEffect, useRef,useContext} from 'react'

// import '../screens/SignUpScreen.css'
// // import { auth } from '../firebase'

// import {FirebaseContext} from "../store/Context"
// import { useNavigate } from 'react-router-dom';


// function SignUpScreen() {

//   const navigate = useNavigate();
//   const emailref = useRef(null)
//   const passwordref = useRef(null)

//   const {firebase} = useContext(FirebaseContext)


//   const register = (e) =>{

    



//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(
//       emailref.current.value,
//       passwordref.current.value
//     )
//     .then((authUser)=>{
//       console.log(authUser);
//     })
//     .then(()=>{
//       firebase.auth().signOut();
//     })
//     .then(()=>{
//       navigate('/')
//     })
//     .catch((error)=>{
//       alert("error creating user")
//     });
//   }



//   return (
//     <div className='signupScreen'>
//       <div className="loginScreen_background">
//             <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
//             <button onClick={() => setSignIn(true)} className="loginScreen__button">SingUp</button>
//       </div>
      
//         <form>
//           <h1 >Sign Up</h1>
//           <input ref={emailref} placeholder="Email" type="email" />
//           <input ref={passwordref} placeholder="Password" type="password" />
//           <button type ="submit" onClick={register} >Sign Up</button>

//         </form>
//     </div>
//   )
// }

// export default SignUpScreen


import React, { useRef, useContext, useState } from 'react';
import '../screens/SignUpScreen.css';
import { FirebaseContext } from '../store/Context';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { firebase } = useContext(FirebaseContext);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const register = (e) => {
    e.preventDefault();

    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Validate email format
    if (!emailRef.current.value || !/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Validate password length
    if (!passwordRef.current.value || passwordRef.current.value.length < 6) {
      setPasswordError('Please enter valid password');
      return;
    }

    // Register user
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .then(() => {
        firebase.auth().signOut();
      })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert('Error creating user');
      });
  };

  return (
    <div className="signupScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <button className="loginScreen__button">SignUp</button>
      </div>

      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        {emailError && <p className="error">{emailError}</p>}
        <input ref={passwordRef} placeholder="Password" type="password" />
        {passwordError && <p className="error">{passwordError}</p>}
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpScreen;
