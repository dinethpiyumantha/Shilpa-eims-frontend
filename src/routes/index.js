import Vue from 'vue'
import Router from 'vue-router'
// use router
Vue.use(Router)

import Dashboard from '../views/Dashboard'
import About from '../views/About'
import UserHome from '../views/user-views/Home'

import Home from '../views/Home'

import TimeSchedule from '../views/time-scheduling/TimeSchedule'
import AddTimeSchedule from '../views/time-scheduling/AddTimeSchedule'
import Classroom from '../views/time-scheduling/Classroom'
import TCReport from '../views/time-scheduling/Report'

import Employee from '../views/employee/Employee'
import AddEmployee from '../views/employee/AddEmployee'
import EmpReport from '../views/employee/Report'

import Student from '../views/student/Students'
import AddStudent from '../views/student/AddStudent'
import SReport from '../views/student/Report'
import Subject from '../views/student/Subject'
import EditStudent from '../views/student/EditStudent'

import Examination from '../views/examination/Examination'
import AddExamination from '../views/examination/AddExamination'
import EReport from '../views/examination/Report'

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin Panel',
      component: Dashboard,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/schedule',
          name: 'Schedule',
          component: TimeSchedule
        },
        {
          path: '/add-schedule',
          name: 'Add Schedule',
          component: AddTimeSchedule
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
        },
        {
          path: '/add-employee',
          name: 'Add Employee',
          component: AddEmployee
        },
        {
          path: '/employees',
          name: 'Employees',
          component: Employee
        },
        {
          path: '/report-employee',
          name: 'Employee Report',
          component: EmpReport
        },

    //LAKSHAN

        {
          path: '/student',
          name: 'Student',
          component: Student
        },
        
        {
          path: '/add-student',
          name: 'Add Student',
          component: AddStudent
        },
        {
          path: '/student-report',
          name: 'Student Report',
          component: SReport
        },
        {
          path: '/subject',
          name: 'Subject',
          component: Subject
        },

        {
          path: '/Edit-Student/:id',
          name: 'EditStudent',
          component: EditStudent
        },

        // Pawan
        {
          path: '/examination',
          name: 'Examination',
          component: Examination
        },
        {
          path: '/add-examination',
          name: 'Add Examination',
          component: AddExamination
        },
        {
          path: '/examination-report',
          name: 'Examination Report',
          component: EReport
        },
      ]
    },
    {
      path: '/',
      name: 'User View',
      component: UserHome
    }
  ]
})