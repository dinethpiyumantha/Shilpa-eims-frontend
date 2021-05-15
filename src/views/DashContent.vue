<template>
    <div class="col-10 p-0">
       <nav class="navbar navbar-expand-md navbar-light bg-white text-dark " style="height: 60px">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shilpa Educational Institute Management System</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                </div>
                <div>
                    <button type="button" class="btn btn-primary position-relative">
                    <i class="fas fa-bell"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{{noticeCount}}<span class="visually-hidden">unread messages</span></span>
                    </button>
                    <!-- <button title="Notifications" class="btn btn-white text-dark"><i class="fas fa-bell"></i></button> -->
                    <button title="Fullscreen" class="btn btn-white text-dark"><i class="fas fa-expand"></i></button>
                    <router-link to="/about"><button title="About Us" class="btn btn-white text-dark"><i class="fa fa-info-circle text-secondary" aria-hidden="true"></i></button></router-link>
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
export default {
    data () {
        return {
            //notices: [],
            noticeCount:''
        }
    },

    methods: {
    },
     created() {
        this.$http.get('http://localhost:8000/api/allNotice').then(function(data){
            //console.log(data);
            //this.notices = data.body.allNotice;
            this.noticeCount = data.body.allNotice.length;
            //console.log(data.body.allNotice.length);

        });
    },
         updated() {
        this.$http.get('http://localhost:8000/api/allNotice').then(function(data){
            //console.log(data);
            //this.notices = data.body.allNotice;
            this.noticeCount = data.body.allNotice.length;
            //console.log(data.body.allNotice.length);

        });
    }
   
}
</script>


<style scoped>
.dash-content{
  height: calc(100vh - 80px);
}
</style>