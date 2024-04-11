import { useNavigate } from "react-router-dom"
import { SignIn, auth} from "./Auth"
import { signOut } from "firebase/auth"

export const NavBar = () => {
  const navigate = useNavigate()
  const handleSignOut = async () => {
    if(auth.currentUser){
    await signOut(auth)
    .then( () =>  {
      console.log("SignOut Successful");
      navigate("/");
    })
    .catch((error) => {
      alert(`Error signing out:  ${error.message}`);
    })
  }
  else{
    alert("You are not signed in")
  }
  }
  

    return(
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1">
        <a href="https://github.com/Ianj751/Real-Time-Chat-App" target="_blank" className="btn btn-ghost text-xl">QuickChat</a>
      </div>
    <div className="flex-none">
      <button className="btn btn-square btn-ghost" onClick={handleSignOut}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white' width={30} height={30}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
      </button>
    </div>
  </div>)
  }
  
export const LoginPage = () => {//if logged in redirect to chat
    return (<> 
        <NavBar />
        <SignIn />         
    </>)
}