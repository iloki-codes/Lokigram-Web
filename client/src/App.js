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

import SocketClient from './SocketClient.js';
import { refreshToken } from './redux/actions/authAction.js';
import { getNotifies } from './redux/actions/notifyAction.js';
import { getPosts } from './redux/actions/postAction.js';
import { getSuggestions } from './redux/actions/suggestionsAction.js';
import { useSocket } from './socketContext.js';

function App() {

  const { auth, status, modal } = useSelector(state => state);
  console.log(auth, status, modal);

  const dispatch = useDispatch();

  const socket = useSocket();

  useEffect(() => {
    dispatch(refreshToken());
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
  },[]);

  return (

    <>

    <Router>

      <Notify />

      <div className={`App ${(status || modal) && 'mode'} bg-gradient-to-r from-pink-300 via-yellow-200 to-red-300 flex flex-col flex-wrap items-center`}>

        <div className="main ml-40 mr-40">

          {/* {!auth.token && <Login />} */}

          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && socket && <SocketClient />}


          <Routes>

            <Route path="/" element={auth.token ? <Home /> : <Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/:page" element={<PrivateRouter element={<PageRender />} />} />

            <Route path="/:page/:id" element={<PrivateRouter element={<PageRender />} />} />

          </Routes>

        </div>

      </div>

    </Router>
    </>

  );

}

export default App;