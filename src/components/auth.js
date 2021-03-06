import React, { useEffect, useState, createContext} from 'react';
import firebase from '../components/firebase'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        // firebase.auth().signOut();

        firebase.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
        {children}
        </AuthContext.Provider>

    )
}
