<template>
  <div id="app">
    <dashboard/>
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
