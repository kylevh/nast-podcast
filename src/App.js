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
    </div>
  );
}

export default App;
