// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'
// import './screens/HomeScreen.jsx'
// import './screens/LoginScreen.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FirebaseContext } from './store/Context';
import firebase from './firebase'; // Make sure this import points to your Firebase setup
import Context from './store/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <App />

    </Context>
  </React.StrictMode>,
);
