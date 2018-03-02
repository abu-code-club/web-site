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
                <v-btn flat @click="signInDialog = true">Sign in</v-btn>
                <v-btn flat @click="signUpDialog = true">Sign up</v-btn>

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

export default{
    components:{
        SignIn,
        SignUp
    },
    data () {
        return {
            
            signUpDialog: false,
            signInDialog: false,
            active: null,
            title: 'Code Club'
        }
    },
    created(){
        //this.$router.push({name: 'Announcements'});
    },
    methods:{
        cancelDialog(param){
            this.signInDialog = param;
            this.signUpDialog = param;

        }
    },
    computed:{
        mobile(){
            return this.$vuetify.breakpoint.width <= 600
        }
    }
}
</script>