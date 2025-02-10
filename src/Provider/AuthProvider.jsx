import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
export const Auth_Context = createContext();

const AuthProvider = ({children}) => {
    const [user, set_user] = useState(null);
    const [loading, set_loading] = useState(true);
    console.log(loading, user);

    const create_user = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        set_loading(true);
    }
    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (current_user) => {
            set_user(current_user);
            set_loading(false);
        });
        return () => {
            subscriber();
        }
    }, []);
    const sign_out = () => {
        return signOut(auth);
        set_loading(true)
    }
    const user_login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        set_loading(true)
    }
    const user_update_profile = (update_data) => {
        
    }
    const auth_info = {
        user,
        set_user,
        create_user,
        sign_out,
        user_login,
        loading
    }
    return (
        <Auth_Context.Provider value={auth_info}>
            {children}
        </Auth_Context.Provider>
    );
};

export default AuthProvider;