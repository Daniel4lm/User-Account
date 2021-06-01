import { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

/* Components */
import Header from "./components/header/Header";
import UserInfo from "./components/info/UserInfo";
import MainSection from "./components/main/MainSection";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import PaymentCandelled from "./components/main/forms/payment/PaymentCancelled";
import MobileNavbar from "./components/navigation/MobileNavbar";

import { UserContext } from "./context/UserContext";
import { ActionTypes } from "./types";

import users from "./data/users.json";
import style from "./styles/Layout.module.css";

function App() {

  const { state, dispatch, isMobile } = useContext(UserContext);

  useEffect(() => {

    dispatch({
      type: ActionTypes.LoadUser,
      payload: users[0]
    });

  }, []);

  useEffect(() => {

    if (!isMobile && state.toggle) {
      dispatch({
        type: ActionTypes.Toggle
      });
    }

  }, [isMobile]);

  return (
    <Router>
      <HelmetProvider>
        {state.toggle && <MobileNavbar />}
        <main className={style.container}>
          <Header />
          <UserInfo />
          <MainSection />
          <Navbar />
          <Footer />
        </main>
        {state.showCancelledScreen === true &&
          <PaymentCandelled />
        }
      </HelmetProvider>
    </Router>
  );
}

export default App;
