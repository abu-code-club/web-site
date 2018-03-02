<template>
    <div>
        <v-card class="member">
            <v-layout  row wrap>
                <v-flex>
                    <v-avatar
                    :tile="false"
                    :size="140"
                    class="grey lighten-4"
                    >
                    <img src="/static/profile.png" alt="avatar">
                    </v-avatar>                    
                </v-flex>
            </v-layout>
            <v-card-text>
                <h3>{{ member.name }}</h3>
                <v-icon>mail</v-icon> {{ member.email }}
            </v-card-text>
            <v-divider></v-divider>
            <div class="content">
                <v-card-text v-html="member.content" >
                </v-card-text>                
            </div>

            
        </v-card>
    </div>
</template>
<script>
export default{
    props: ['member'],
    data(){
        return{

        }
    }
}    
</script>
<style scoped>
    .content{
        height: 100px;
    }
    .member{
        margin-bottom: 20px;
    }
</style>
