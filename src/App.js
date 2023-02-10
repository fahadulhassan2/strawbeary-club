import React, { useEffect, useState, useRef } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import Navbar from './components/Navbar/index'
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages'
import SigninPage from "./pages/signin";
import Login from "./pages/login";
import TraitsPage from "./pages/traitsPage";

import AdminPage from "./pages/admin";

function App() {
  const [Dark, setDark] = useState("false");
  const[ isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Router>

      <Switch>
        
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/login" component={Login} exact />
        {/* <Route path="/traits" component={TraitsPage} exact /> */}
        {/* <Route path="/terms" component={Term} exact /> */}
        <Route path="/manage" component={AdminPage} exact />
    
      </Switch>

    </Router>
    
    </>
  );
}

export default App;
