<template>
  <div>
      <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon @click.native="cancel" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Announcement</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="save">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
              <v-container fluid  grid-list-md grid-list-xs>
                <v-layout row wrap>
                    <v-flex md12 xs12>
                        <v-text-field
                        label="Title"
                        v-model="announcement.title"
                        name="title"
                        required
                        ></v-text-field>                        
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex md12 xs12>
                    <vue-editor  v-model="announcement.text" required heifgt="100%"></vue-editor>                      
                    </v-flex>
                </v-layout>
              </v-container>
          </v-card-text>

          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>

  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'

export default {
    props: ['dialog'],
    components:{
        VueEditor,
    },
    data(){
        return {
            announcement: {
                title: '',
                text: '',
            },

        }
    },
    created(){

    },
    methods:{
        save(){
            this.cancel();
        },
        cancel(){
            this.$emit('closePostAnnouncement');
        }
    }
}
</script>
<style scoped>

</style>
