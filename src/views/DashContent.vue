<template>
    <div class="col-10 p-0">
       <nav class="navbar navbar-expand-md navbar-light bg-white text-dark " style="height: 60px">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shilpa Educational Institute Management System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" @click="toggle"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                </div>
                <div>
                    <button class="btn btn-white text-dark"><i class="fas fa-bell"></i></button>
                    <button class="btn btn-white text-dark"><i class="fas fa-expand"></i></button>
                    <router-link to="/about"><button class="btn btn-white text-dark"><i class="fa fa-info-circle text-secondary" aria-hidden="true"></i></button></router-link>
                    <router-link to="/about"><button class="btn btn-white text-dark"><i class="fas fa-ellipsis-v"></i></button></router-link>
                </div>
            </div>
        </nav>
        <div class="p-5 dash-content overflow-auto">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import fullscreen from 'vue-fullscreen'
    import Dashboard from '../views/Dashboard'

    import Vue from 'vue'
    Vue.use(fullscreen)
    export default {
    methods: {
      toggle () {
        Dashboard.$refs['fullscreen'].toggle() // recommended
        // Dashboard.fullscreen = !Dashboard.fullscreen // deprecated
      },
      fullscreenChange (fullscreen) {
        Dashboard.fullscreen = fullscreen
      }
    },
    data() {
      return {
        fullscreen: false
      }
    }
  }
</script>


<style scoped>
.dash-content{
  height: calc(100vh - 80px);
}
</style>