<template>
    <div>
        
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon v-if="mobile"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title" class=""></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat :to="{name: 'Announcements'}">Announcements</v-btn>
                <v-btn flat :to="{name: 'Events'}">Events</v-btn>
                <v-btn flat :to="{name: 'Team'}">Team</v-btn>
                <v-btn flat v-if="!isSignedIn" @click="signInDialog = true">Sign in</v-btn>
                <v-btn flat v-if="!isSignedIn" @click="signUpDialog = true">Sign up</v-btn>
                <v-btn flat v-if="isSignedIn" @click="signOut">Sign out</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-container fluid  grid-list-md grid-list-sm grid-list-xs>
            <router-view/>
        </v-container>

        <sign-in :dialog="signInDialog" @updateDialog="cancelDialog"></sign-in>
        <sign-up :dialog="signUpDialog" @updateDialog="cancelDialog"></sign-up>

    </div>
</template>
<script>
import SignIn from '@/components/Signin.vue'
import SignUp from '@/components/Signup.vue'
import {authentication} from '../../firebase'
export default{
    components:{
        SignIn,
        SignUp
    },
    data () {
        return {
            isSignedIn: false,
            signUpDialog: false,
            signInDialog: false,
            active: null,
            title: 'Code Club'
        }
    },
    created(){
        //this.$router.push({name: 'Announcements'});
        authentication.onAuthStateChanged(user => {
            this.isSignedIn = user != null;
        })
    },
    methods:{
        openSignInDialog(){
            this.signInDialog = true;
        },
        cancelDialog(param){
            this.signInDialog = param;
            this.signUpDialog = param;

        },
        signOut(){
            this.$store.dispatch('signOut');
            
        }
    },
    computed:{
        mobile(){
            return this.$vuetify.breakpoint.width <= 600
        }
    }
}
</script>