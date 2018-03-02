<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Sign In</span>
                </v-card-title>                  
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                            name="input-10-2"
                            label="Enter your email"
                            v-model="user.email"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>            
                    <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                            label="Enter your password"
                            :append-icon="password ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (password = !password)"
                            :type="password ? 'password' : 'text'"
                            v-model="user.password"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>                    
                </v-card-text>
                    <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="cancel">Close</v-btn>
                            <v-btn color="blue darken-1" flat @click="signIn">Sign in</v-btn>
                    </v-card-actions>                
                </v-card>
        </v-dialog>   
    </div>
</template>

<script>
export default{
    props: ['dialog'],
    data(){
        return {
            user: {
                email: '',
                password: '',
            },
            password: true
        }
    },
    methods:{
        cancel(){
            this.$emit('updateDialog', false);
        },
        signIn(){
            this.$store.dispatch('signIn', this.user)
            .then(user => {
                this.cancel();
            })
        }
    }    
}    
</script>
<style scoped>

</style>
