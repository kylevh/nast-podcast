<<<<<<< HEAD
//styles
import "./App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import StartPage from "./pages/start/StartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
=======
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import StartPage from './pages/start/StartPage'
import { AnimatePresence } from 'framer-motion';

import './App.css';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </AnimatePresence>
>>>>>>> aced3465392e0943c8d7d30dba13ce3e77f9c257
    </div>
  );
}

export default App;
