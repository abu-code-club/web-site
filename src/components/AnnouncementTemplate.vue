<template>
    <div>
        <v-card>
            <v-card-title class="title grey--text text--darken-4">
                {{ announcement.title }}
            </v-card-title>
            <v-card-text class="grey--text text--darken-3">
                {{ announcement.content }}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <div class="text-md-right">       
                        <div>
                            <span class="grey--text ">{{ moment(announcement.time).fromNow() }}</span>
                        </div>                        
                        <div >
                            <span class="grey--text ">{{ announcement.user }}</span>
                        </div>
                    </div>
                
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import * as moment from 'moment';
export default{
    props: ['announcement'],
    data(){
        return{
            moment: moment
        }
    }
}
</script>
<style>

</style>
