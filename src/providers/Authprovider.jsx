import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     const singIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
     }
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(createUser)
        setLoading(false)
        console.log(currentUser)
       })
       return ()=>{
        return unsubscribe()
       }
     },[])
    const authInfo = {
            user,
            loading,
            createUser,
            singIn
    }
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default Authprovider;