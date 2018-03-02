<template>
    <div>

         
        <v-container fluid grid-list-md grid-list-sm grid-list-xs text-md-center text-sm-center text-xs-center>
            <v-layout row justify-center v-for="i in layoutCount" :key="`member-layout-${i}`">
                <v-flex md2 xs10 v-for="(member, j) in getMembers(i - 1, i)" :key="`member-layout-${i}-flex-${j}`" >
                    <team-member  :member="member" ></team-member>        
                </v-flex>
            </v-layout>
        </v-container> 

    </div>
</template>
<script>
import TeamMember from '@/components/TeamMember.vue';
const NUMBER_OF_COLS = 4;
const NUMBER_OF_COLS_FOR_XS = 1;
export default{
    components:{
        TeamMember,
    },
    data(){
        return{
            members: [
                {
                    uuid: '129381923812312381209831',
                    name: 'Mock User1',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Team Leader<br>Senior Computer Engineering Student',
                },
                {
                    uuid: '1293819238123123812098312',
                    name: 'Mock User2',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'test',
                },
                {
                    uuid: '1293819238123123812098331',
                    name: 'Mock User3',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },
                {
                    uuid: '129381923812312381209831231',
                    name: 'Mock User4',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },       
                {
                    uuid: '231321129381923812312381209831231',
                    name: 'Mock User5',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },     
                {
                    uuid: '231321132129381923811232312381209831231',
                    name: 'Mock User6',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },   
                {
                    uuid: '12938192384112312381209831',
                    name: 'Mock User7',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },
                {
                    uuid: '12938192381623123812098312',
                    name: 'Mock User8',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },
                {
                    uuid: '12938159238123123812098331',
                    name: 'Mock User9',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },
                {
                    uuid: '1293819123812312381209831231',
                    name: 'Mock User10',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },       
                {
                    uuid: '2313221129381923812312381209831231',
                    name: 'Mock User11',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },     
                {
                    uuid: '2313211321329381923811232312381209831231',
                    name: 'Mock User12',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },  
                                {
                    uuid: '2313211321329381923811232312381209831231',
                    name: 'Mock User13',
                    email: 'mock.user@mail.com',
                    picture: '/assets/profile.png',
                    content: 'Content of mock user',
                },                                                   
            ]
        }
    },
    methods:{
        getMembers(start, end){
            if(this.$vuetify.breakpoint.width <= 600){

                start = start * NUMBER_OF_COLS_FOR_XS;
                end = end * NUMBER_OF_COLS_FOR_XS;
            }
            else{

                start = start * NUMBER_OF_COLS;
                end = end * NUMBER_OF_COLS;
            }


            if (end > this.members.length){
                end = this.members.length;
            }
            return this.members.slice(start, end);
        }
    },
    computed:{
        layoutCount(){
            if(this.$vuetify.breakpoint.width <= 600){
                const cols = this.members.length / NUMBER_OF_COLS_FOR_XS ;
                return Math.ceil(cols);
            }
            else{
                const cols = this.members.length / NUMBER_OF_COLS ;
                return Math.ceil(cols);
            }
        }
    },
}
</script>
<style >

</style>
