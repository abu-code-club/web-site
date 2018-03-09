<template>
    <div>
        <v-container fluid grid-list-md grid-list-xs>
            <div v-for="(announcement, i) in announcements" :key="`div-${i}`">
                <announcement-template  :announcement="announcement"></announcement-template>
                <v-divider v-if="i + 1 < announcements.length" class="divider"></v-divider>
            </div>
        </v-container>
        
        <post-announcement v-if="dialog" :dialog="dialog" @closePostAnnouncement="cancel"></post-announcement>

        <v-btn
            color="pink" dark large
            fixed bottom right 
            fab
            @click="dialog = true">
            <v-icon>add</v-icon>
        </v-btn>          
    </div>
</template>
<script>
import AnnouncementTemplate from '@/components/AnnouncementTemplate';
import PostAnnouncement from '@/components/PostAnnouncement';

export default{
    components:{
        AnnouncementTemplate, 
        PostAnnouncement,
    },
    data(){
        return{
            dialog: false,
            announcements: [
                {   
                    uuid: '801928309182309810293812908301928309128129381',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
                    files: [],
                    time: '2018-03-01T23:13:01+00:00',
                    user: 'mock.user',
                },
                {   
                    uuid: '80192830918230981029382312908301928309128129381',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
                    files: [],
                    time: '2018-03-01T23:13:01+00:00',
                    user: 'mock.user',
                },
                {   
                    uuid: '801928309182309810293812908123301928309128129381',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
                    files: [],
                    time: '2018-03-01T23:13:01+00:00',
                    user: 'mock.user',
                },
                {   
                    uuid: '801928309182309810293812908123301928309128129381',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
                    files: [],
                    time: '2018-03-01T23:13:01+00:00',
                    user: 'mock.user',
                },                                  
            ],
        }
    },
    methods: {
        cancel(){
            this.dialog = false;
        }
    }

}    
</script>
<style scoped>
    .divider{
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
