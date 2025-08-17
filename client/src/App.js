import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PageRender from './customRouter/PageRender.js';
import PrivateRouter from './customRouter/PrivateRouter.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';

import StatusModal from './components/StatusModal.js';
import Notify from './components/alert/Alert.js';
import Header from './components/header/Header.js';
import Register from './pages/Register.js';

import Peer from 'peerjs';
import { io } from 'socket.io-client';
import SocketClient from './SocketClient.js';
import { refreshToken } from './redux/actions/authAction.js';
import { GLOBALTYPES } from './redux/actions/globalTypes.js';
import { getNotifies } from './redux/actions/notifyAction.js';
import { getPosts } from './redux/actions/postAction.js';
import { getSuggestions } from './redux/actions/suggestionsAction.js';

function App() {

  const { auth, status, modal } = useSelector(state => state);
  console.log(auth, status, modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
    const socket = io();
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket});
    return () => socket.close()
  },[dispatch]);

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
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
            <Route path="/" component={auth.token ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <PrivateRouter path="/:page" element={<PageRender />} />
          <PrivateRouter path="/:page/:id" element={<PageRender />} />

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
