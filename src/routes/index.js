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
import ClassroomUpdate from '../views/time-scheduling/ClassroomUpdate'
import TCReport from '../views/time-scheduling/Report'
import TimeScheduleEdit from '../views/time-scheduling/UpdateTimeSchedule'

import Employee from '../views/employee/Employee'
import AddEmployee from '../views/employee/AddEmployee'
import EmpReport from '../views/employee/Report'

import Student from '../views/student/Students'
import AddStudent from '../views/student/AddStudent'
import SReport from '../views/student/Report'
import Subject from '../views/student/Subject'

import AddTeacher from '../views/teacher/addTeacher'
import ListTeacher from '../views/teacher/listTeacher'
import ReportTeacher from '../views/teacher/reportTeacher'
import SubjectTeacher from '../views/teacher/subjectTeacher'

import Examination from '../views/examination/Examination'
import AddExamination from '../views/examination/AddExamination'
import EReport from '../views/examination/Report'
import ViewExamination from '../views/examination/ViewExamination'

import FeePayment from '../views/finance/FeePayment'
import PReport from '../views/finance/Report'
import SmallExpenses from '../views/finance/SmallExpenses'

import Attendance from '../views/attendance/Attendance'
import AddAttendance from '../views/attendance/AddAttendance'
import ATTReport from '../views/attendance/Report'

import updateAttendance from '../views/attendance/updateAttendance'

import Notice from '../views/notice/Notice'
import NoticeControler from '../views/notice/NoticeControler'

export default new Router({
  mode: 'history',
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
        // Dineth
        {
          path: '/schedule',
          name: 'Schedule',
          component: TimeSchedule,
          children: [
            {
              path: '/schedule/edit/:id',
              name: 'Schedule Edit',
              component: TimeScheduleEdit,
            }
          ]
        },
        {
          path: '/add-schedule',
          name: 'Add Schedule',
          component: AddTimeSchedule
        },
        {
          path: '/classroom',
          name: 'Classroom',
          component: Classroom,
          children: [
            {
              path: '/classroom/edit/:id',
              name: 'Classroom Update',
              component: ClassroomUpdate
            }
          ]
        },
        {
          path: '/time-class-report',
          name: 'Time Schedule and Classroom Report',
          component: TCReport
        },
        // Asanka
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
        // Lakshan
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
        {
          path: '/view-examination',
          name: 'View Examination',
          component: ViewExamination
        },
        // Deen
        {
          path: '/fee-payment',
          name: 'Fee Payment',
          component: FeePayment
        },
        {
          path: '/payment-report',
          name: 'Payment Report',
          component: PReport
        },
        {
          path: '/small-expenses',
          name: 'Small Expenses',
          component: SmallExpenses
        },
        // Sadisha
        {
          path: '/attendance',
          name: 'Attendance',
          component: Attendance
        },
        {
          path: '/add-attendance',
          name: 'Add Attendance',
          component: AddAttendance
        },
        {
          path: '/attendance-report',
          name: 'Attendance Report',
          component: ATTReport
        },
        {
          path: '/attendance-update/:id',
          name: 'Attendance Report',
          component: updateAttendance
        },
        // Thisara
        {
          path: '/notification',
          name: 'Notifications',
          component: Notice
        },
        {
          path: '/controler-notification',
          name: 'Notifications',
          component: NoticeControler
        },
        // Sandani
        {
          path: '/add-teacher',
          name: 'Add Teacher',
          component: AddTeacher
        },
        {
          path: '/list-teacher',
          name: 'List Teacher',
          component: ListTeacher
        },
        {
          path: '/report-teacher',
          name: 'Report Teacher',
          component: ReportTeacher
        },
        {
          path: '/subject-teacher',
          name: 'Subject Teacher',
          component: SubjectTeacher
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