import Vue from 'vue'
import Router from 'vue-router'
// use router
Vue.use(Router)

import Home from '../views/Home'
import TimeSchedule from '../views/time-scheduling/TimeSchedule'
import Classroom from '../views/time-scheduling/Classroom'
import TCReport from '../views/time-scheduling/Report'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: TimeSchedule
    },
    {
      path: '/classroom',
      name: 'Classroom',
      component: Classroom
    },
    {
      path: '/time-class-report',
      name: 'Time Schedule and Classroom Report',
      component: TCReport
    }
  ]
})