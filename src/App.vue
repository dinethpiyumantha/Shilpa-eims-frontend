<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Dashboard from './views/Dashboard';

export default {
  components : {
    'dashboard' : Dashboard
  }
}
</script>

<style>
#app{
  height: 100vh;
}
</style>
