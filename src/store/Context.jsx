



import { createContext,useState } from 'react';
import firebase from '../firebase';


export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null)

export default function Context({children}){
    const [user,setUser] = useState(null)

    return(
    <FirebaseContext.Provider value={{ firebase: firebase }}>
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    </FirebaseContext.Provider>
    )
}