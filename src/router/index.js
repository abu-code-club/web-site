import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Announcements from '@/components/pages/Announcements.vue'
import Events from '@/components/pages/Events.vue'
import Team from '@/components/pages/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/announcements',
          name: 'Announcements',
          component: Announcements,
          alias: ['/']
        },
        {
          path: '/events',
          name: 'Events',
          component: Events,
        },
        {
          path: '/team',
          name: 'Team',
          component: Team,
        },
      ]
    },

  ]
})
