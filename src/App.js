import './App.css';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import StartPage from './pages/start/StartPage'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { WindowContext } from './hooks/Context';

function App() {
  const [mainWindowShown, setMainWindowShown] = useState(0);

  const location = useLocation();
  return (
    <div className="App">
      <WindowContext.Provider value={{mainWindowShown, setMainWindowShown}}>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
