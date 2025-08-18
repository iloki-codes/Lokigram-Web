import { createContext, useContext, useRef } from "react";

const PeerContext = createContext(null);

export const PeerProvider = ({children}) => {
    const peerRef = useRef(null); // webrtc object

    return (
        <PeerContext.Provider value={peerRef}>
            {children}
        </PeerContext.Provider>
    )
};

export const usePeer = () => useContext(PeerContext);