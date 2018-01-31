import Vue from 'vue'
import Router from 'vue-router'
import skills from '@/components/skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: skills
    }
  ]
})
