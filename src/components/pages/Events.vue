<template>
    <div>
        <v-container >
            <v-data-table
                :headers="headers"
                :items="events"
                hide-actions
                item-key="uuid"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <tr>
                        <td  @click="props.expanded = !props.expanded">{{ props.item.name }}</td>
                        <td  @click="props.expanded = !props.expanded">{{ props.item.date }}</td>
                        <td  @click="props.expanded = !props.expanded">{{ props.item.mentor }}</td>
                        <td class="text-xs-right">
                            <v-btn outline color="indigo" @click="joinEvent(props.item.uuid)">Join</v-btn>
                        </td>
                    </tr>
                    </template>
                    <template slot="expand" slot-scope="props">
                    <v-card flat>
                        <v-card-text>{{props.item.detail}}</v-card-text>
                    </v-card>
                </template>
            </v-data-table>            
        </v-container>
    </div>
</template>
<script>
export default{
    data(){
        return{
            headers: [
                {
                    text: 'Event',
                    align: 'left',
                    sortable: true,
                    value: 'name'
                },
                { text: 'Date', value: 'date', sortable: true, },
                { text: 'Mentor', value: 'mentor' },
                { text: '', value: 'operation' },
            ],     
            events:[
                {
                    value: false,     
                    uuid:'1',                      
                    name: 'Mock Event 1',
                    date: 'March 11, 2018',
                    mentor: 'mock mentor',
                    detail: '',
                },
                {
                    value: false,                           
                    uuid:'12',
                    name: 'Mock Event 1',
                    date: 'March 11, 2018',
                    mentor: 'mock mentor',
                    detail: '',
                },
                {
                    value: false,                           
                    uuid:'13',
                    name: 'Mock Event 1',
                    date: 'March 11, 2018',
                    mentor: 'mock mentor',
                    detail: '',
                },
                {
                    value: false,                           
                    uuid:'14',
                    name: 'Mock Event 1',
                    date: 'March 11, 2018',
                    mentor: 'mock mentor',
                    detail: '',
                }                                
            ]
        }
    },
    created(){

    },
    methods:{
        joinEvent(uuid){
            console.log('joined')
        }
    },
}
</script>
<style>

</style>
