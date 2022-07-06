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
    </div>
  );
}

export default App;
