import React from 'react';
import { useEffect } from 'react';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageRender from './customRouter/PageRender.js';
import PrivateRouter from './customRouter/PrivateRouter.js';

// import { Router } from 'react-router-dom';
import Header from './components/header/Header.js';
// import Storytab from './components/home/Storytab.js';
import Notify from './components/alert/Alert.js';
import Register from './pages/Account.new.js';

import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
// import { getSuggestions } from './redux/actions/suggestionsAction';
// import { io } from 'socket.io-client';
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient.js';
import { Server } from 'socket.io';
import smlogo from './assets/smlogo.png';

function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken());
    const socket = io();
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket});
    return () => socket.close()
  },[dispatch]);

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      // dispatch(getSuggestions(auth.token))
      // dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token]);

  
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])

  // useEffect(() => {
  //   const newPeer = new Peer(undefined, {
  //     path: '/', secure: true
  //   })
    
  //   dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  // },[dispatch])
  
  return (
    
    <div className="App">
      <img src={smlogo} alt='logo'/>
       <Router>
      <Notify />

      <input type="checkbox" id="theme" />
      {/* <div className={`App ${(status || modal) && 'mode'}`}> */}
        <div className="main">
          {auth.token && <Header />}
          {/* {status && <StatusModal />} */}
          {auth.token && <SocketClient />}
          {/* {call && <CallModal />} */}
          
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
          
        {/* </div> */}
      </div>
    </Router>

      {/* <Signup /> */}
      
      <footer>
          <p className=''>Lokigram Version 0.1.0</p>
      </footer>
    
    </div>
  
  );

}

export default App;
