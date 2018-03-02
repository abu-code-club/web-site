import {authentication} from '../firebase'

export default class AuthenticationService{

    signUp(user){
        return authentication.createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            
        })
        .catch(error => {
            
        })
    }

    signIn(user){

    }

    signOut(){

    }
}