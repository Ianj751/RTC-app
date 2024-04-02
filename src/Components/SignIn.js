import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {createContext, useContext, useState} from 'react';


const provider = new GoogleAuthProvider();
const auth = getAuth();
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  const value = {
    currentUser,
    setCurrentUser
  }
  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const UserAuth = () => {
  return useContext(AuthContext);
}

const handleSignIn = async () => {
   try{
     await signInWithPopup(auth, provider)
   }
   catch(error){  
    alert(error.message);
   }
}


export const SignIn = () => {


  return (<>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary"onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  </>)

}




