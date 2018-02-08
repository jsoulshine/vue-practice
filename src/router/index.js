import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/skills'
import Cropper from '@/components/Cropper'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills,
      children: [
        {
          path: 'cropper',
          name: 'cropper',
          component: Cropper
        }
      ]
    }
  ]
})
