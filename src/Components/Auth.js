import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try{
      await signInWithPopup(auth, provider)
      .then(() =>{ 
        console.log(auth.currentUser);
        navigate('/chat');} )
    }
    catch(error){  
     alert(error.message);
    }
  }

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

export const isLoggedIn = () =>{ return(auth.currentUser ? true : false);}

