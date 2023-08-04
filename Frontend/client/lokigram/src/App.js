import React from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import PageRender from './customRouter/PageRender.js';
import PrivateRouter from './customRouter/PrivateRouter.js';

import Header from './components/header/Header.js';
import Notify from './components/alert/Alert.js';
import Register from './pages/Register.js';
import StatusModal from './components/StatusModal.js';

import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { io } from 'socket.io-client';
import { GLOBALTYPES } from './redux/actions/globalTypes'
import Peer from 'peerjs';
import SocketClient from './SocketClient.js';

function App() {
  const { auth, status, modal } = useSelector(state => state)
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

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])
  
  return (
    <>

      <Router>
      
      <Notify />   

      <div className={`App ${(status || modal) && 'mode'}`}>    
        
        <div className="main ml-40 mr-40">

          <Login />
  
          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}


          <Routes>
            <Route exact path="/" component={auth.token ? Home : Login} />
            <Route exact path="/register" component={Register} />
          </Routes>

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
          
        </div>
      
      </div>
    
    </Router>
      
      <footer>
          <p className='fixed bottom-0 left-64 pl-96 pr-96 bg-emerald-500 text-lg'>Lokigram Version 0.1.0</p>
      </footer>
    
    </>
  
  );

}

export default App;
