import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const useAuth = () =>{
    //handle Sign Up 
 const auth = getAuth();
 const handleSignUp = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 return{
     handleSignUp,
 }
}

export default useAuth;