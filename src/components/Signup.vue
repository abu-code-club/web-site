<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Sign Up</span>
                </v-card-title>                
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex >
                            <v-text-field
                            name="input-10-2"
                            label="Enter your name"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>  
                    <v-layout row wrap>
                        <v-flex >
                            <v-text-field
                            name="input-10-2"
                            label="Enter your email"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>                                
                    <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                            label="Enter your password"
                            type="password"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                            label="Confirm your password"
                            type="password"
                            ></v-text-field>  
                        </v-flex>                  
                    </v-layout>                                         
                </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="cancel">Close</v-btn>
                        <v-btn color="blue darken-1" flat >Sign up</v-btn>         
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
        
            password: true
        }
    },
    methods:{
        cancel(){
            this.$emit('updateDialog', false);
        }
    }
}    
</script>
<style scoped>

</style>
