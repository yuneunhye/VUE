import { createRouter, createWebHistory } from 'vue-router'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import AskTitleview from '../views/AskTitleview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/news'
    },
    {
      path: '/ask',
      name: 'ask',
      component:AskView
     
    },
    {
      path: '/news',
      name: 'news',
      component:NewsView
     
    },
    {
      path: '/jobs',
      name: 'jobs',
      component:JobsView
     
    },
     {
      path: '/user/:id',
      name: 'user',
      component:UserView
     
    },
      {
      path: '/item/:id',
      name: 'askTitleview',
      component:AskTitleview
     
    }
  ]
})

export default router
