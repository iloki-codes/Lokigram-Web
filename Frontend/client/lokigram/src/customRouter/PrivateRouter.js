import { Route, Navigate, Routes } from 'react-router-dom';

const PrivateRouter = (props) => {

      const firstLogin = localStorage.getItem('firstLogin');
      return firstLogin 
      ?  <Route {...props} /> : <Navigate to="/" />
};

export default PrivateRouter;