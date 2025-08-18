import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import './styles/global.css';
import DataProvider from './redux/store.js';
import { SocketProvider } from './socketContext.js';
import { PeerProvider } from './peerContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SocketProvider>
      <PeerProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </PeerProvider>
    </SocketProvider>
);
