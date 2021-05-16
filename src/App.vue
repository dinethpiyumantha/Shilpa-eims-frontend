<template>
  <div id="app">
    <fullscreen :fullscreen.sync="fullscreen">
      <router-view/>
    </fullscreen>
  </div>
</template>

<script>
import Dashboard from './views/Dashboard'
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)

import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY/MM/DD')
    }
});

export default {
  components : {
    'dashboard' : Dashboard
  },

    methods: {
      toggle () {
        this.fullscreen = !this.fullscreen
      }
    },
    data() {
      return {
        fullscreen: false
      }
    }
}
</script>

<style>
#app{
  height: 100vh;
}
</style>
