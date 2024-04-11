import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Auth';
import ChatRoom from './Chat';
import { Navigate } from 'react-router-dom';

function ProtectedChat() {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        return onAuthStateChanged(auth,(user) => {
        if(user){
            setUser(user);
            setLoading(false);
            return;
        }
        setUser(null);
        setLoading(false);
        });
    }, [])
    if(loading) {
      return (
        <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        );
    }

    return (user ? <ChatRoom /> : <Navigate to="/" />);
}

export default ProtectedChat;
