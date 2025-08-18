import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PageRender from './customRouter/PageRender.js';
import PrivateRouter from './customRouter/PrivateRouter.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';

import Footer from './components/Footer.js';
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
  },[])

  // useEffect(() => {
  //   const newPeer = new Peer(undefined, {
  //     host: '/', secure: true                 // host
  //   })

  //   dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  // },[dispatch])

  return (

    <>

    <Router>

      <Notify />

      <div className={`App ${(status || modal) && 'mode'}`}>

        <div className="main ml-40 mr-40">

          {/* {!auth.token && <Login />} */}

          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && socket && <SocketClient />}


          <Routes>
            <Route path="/" element={auth.token ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/:page" element={
              <PrivateRouter>
                <PageRender />
              </PrivateRouter>
              }
              />
            <Route path="/:page/:id" element={
              <PrivateRouter>
                <PageRender />
              </PrivateRouter>
              }
            />

          </Routes>

        </div>

      </div>

    </Router>

      <Footer />

    </>

  );

}

export default App;