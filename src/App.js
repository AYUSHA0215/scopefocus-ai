import logo from './logo.svg';
import './tailwind.output.css';
import React, { useState, useEffect, useRef } from 'react';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './auth/firebase';
import { ChakraProvider } from '@chakra-ui/react'
import Contact from './pages/Contact';
import About from './pages/Aboutus';


const App = () => {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <section>
            <Routes>
              <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/about' element={<About />} />
             </Routes>
          </section>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
