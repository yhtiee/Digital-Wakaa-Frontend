import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import { ServiceProvider } from './Context API/ServicesContext';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ServicesPage from './Pages/ServicesPage';
import Service from './Pages/Service';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <ServiceProvider>
          <Routes>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/services" element={<ServicesPage/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </ServiceProvider>
      </BrowserRouter>
    </>
  )
}

export default App
