import React, { useEffect, useContext } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { FirebaseContext, AuthContext } from "./store/Context";
import SignUpScreen from "./screens/SignUpScreen";
import Player from "./screens/PlayerScreen";

function App() {
  const { firebase } = useContext(FirebaseContext);
  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [firebase, setUser]);

  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/signup" element={<SignUpScreen/>}>
              
            </Route>
          <Route 
            path="/" 
            element={user ? <Navigate to="/home" /> : <LoginScreen />} 
          />
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            } 
          />
           <Route path="/player/:id" element={<Player/>}/>
        </Routes>
      </Router>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
};

export default App;
