import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ element }) => {

      const firstLogin = localStorage.getItem('firstLogin');
      return firstLogin ? element : <Navigate to="/" replace />
};

//       <Routes><Route {...props} /></Routes>

export default PrivateRouter;