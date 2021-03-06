import {authentication} from '../firebase'


export default{
    state:{
        
    },
    mutations: {
        
    },
    actions:{
        signUp(context, user){
            return authentication.createUserWithEmailAndPassword(user.email, user.password)   
            .then(response => {
                return context.dispatch('signIn', user)
                .then(resp => {
                   context.dispatch('updateProfile', user);
                    return resp;
                });
            });
        },
        updateProfile(context, user){
            authentication.currentUser.updateProfile({
                displayName: user.name
            })
        },
        signIn(context, user){
            return authentication.signInWithEmailAndPassword(user.email, user.password)
        },
        signOut(context){
            return authentication.signOut();
        }

    },
    getters:{

    }
}