import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PeepHomePage from "./components/PeepHomePage";
import SignUpPage from "./components/SignupPage.jsx";
import LoginPage from './components/LoginPage.jsx';
import Modal from "./utils/Modal.jsx";

import { getPeeps } from "../asyncFunctions/peepAPICall.js";

function App() {

  const [peeps, setPeeps] = useState([]);
  const [error, setError] = useState({ type: ``, message: ``, modalShown: false });
  const [createUpdateStatus, setCreatedUpdateStatus] = useState(``);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);


  const getPeepsHandler = async () => {
    const externalDataCallResult = await getPeeps();
    if (externalDataCallResult?.error) {
      const errorObject = { ...externalDataCallResult.error, modalShown: false };
      errorObject.message = `There was a problem getting the peeps: ${externalDataCallResult.error.message}`;
      setError(errorObject);
    }
    const peeps = externalDataCallResult?.peeps ? externalDataCallResult.peeps : [];
    setPeeps(peeps);

    if (peeps.length === 0) {
      setError({ type: '', message: 'There are no peeps yet, login or sign up to post!', modalShown: false });
    }
  }

  useEffect(() => {
    getPeepsHandler();
  }, []);

  useEffect(() => {
    console.log("Logged in: " + loggedIn);
  })

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    const storedLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (storedLoggedIn) {
      setLoggedIn(true);
      setLoggedInUser(storedLoggedInUser);
    }
  }, []);

  const handleAuthentication = (user) => {
    setLoggedIn(true);
    setLoggedInUser(user);
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUser(null);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
  };

  const handleModalClose = () => {
    setError({ ...error, modalShown: true });
  }

  return (
    <>
      {error.type && !error.modalShown && <Modal handleClose={handleModalClose} message={error.message} />}
      {createUpdateStatus && <Modal handleClose={() => setCreatedUpdateStatus(``)} message={createUpdateStatus} />}
      <div className="container">
        <Header setLogin={setLoggedIn} setLogout={handleLogout} username={loggedInUser ? loggedInUser.username : ""} />

        <Routes>
          <Route path="/" element={<PeepHomePage loggedInUser={loggedInUser} data={{ peeps, error: error.message }} />} />
          <Route path="/signup" element={<SignUpPage handleAuthentication={handleAuthentication} />} />
          <Route path="/login" element={<LoginPage loggedInUser={loggedInUser} handleAuthentication={handleAuthentication} />} />
        </Routes>

        <Footer />
      </div>

    </>
  )
}

App.propTypes = {
  "handleAuthentication": PropTypes.func,
  "setLoginUser": PropTypes.func,
  "setLogin": PropTypes.func,
}

export default App
