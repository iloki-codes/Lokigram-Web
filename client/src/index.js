import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import './styles/global.css';
import DataProvider from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
      <App />
    </DataProvider>
);
