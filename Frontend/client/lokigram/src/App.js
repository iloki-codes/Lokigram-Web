import React from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';

import smlogo from './assets/smlogo.png';

function App() {

  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  
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
    
    <div className="App">
      
      <Signup />
      
      <footer>
          <p className=''>Lokigram Version 0.1.0</p>
      </footer>
    
    </div>
  
  );

}

export default App;
