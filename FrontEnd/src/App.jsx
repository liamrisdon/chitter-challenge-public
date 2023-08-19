import './App.css';
// import { useState } from 'react';
import { Route, Routes } from "react-router-dom";


import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PeepHomePage from "./components/PeepHomePage";
import SignUpPage from "./components/SignupPage.jsx";
import LoginPage from './components/LoginPage.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<PeepHomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>

    </>
  )
}

export default App
