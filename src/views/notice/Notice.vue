<template>
    <div id="show-notice">
        
        <!-- <div v-for="notice in notices" :key="notice.index" class="single-notice">
            <h2 v-rainbow>{{ notice.heder | toUppercase }}</h2>
            
            <article>{{ notice.body }}</article>
            <h6 class="right">{{notice.date}}</h6>
        </div> -->
        <!-- filter notice -->
        <div class="w-100 d-flex flex-row-reverse">
            <input type="text" class="btn btn-outline-primary" v-model="search" placeholder="search notice" />
        </div>
        
        <div v-for="notice in filteredheder" :key="notice.index" class="single-notice">
            <h2 v-rainbow class="align-center" >{{ notice.heder | toUppercase }}</h2>
             
           
            <div class="d-flex justify-content-between">
                
                 <article>{{ notice.body }}</article><br>
                <img v-bind:src="'http://localhost:8000/'+notice.image"  alt="Generic placeholder image" width="240" height="140">
                
            </div>
            <br>
            <div class="d-flex justify-content-between">
                <h6 class="right">{{notice.date}}</h6>
                <h6 class="right">{{notice.postBy}}</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
    data () {
        return {
            notices: [],
            noticeCount:'',
            search: ''
        }
    },

    methods: {
    },
    created() {
        this.$http.get('http://localhost:8000/api/allNotice').then(function(data){
            //console.log(data);
            this.notices = data.body.allNotice;
            this.noticeCount = data.body.allNotice.length;
            //console.log(data.body.allNotice.length);

        });
    },
        computed: {
        filteredheder: function(){
            return this.notices.filter((notice) => {
                return notice.heder.match(this.search);
            });
        }
    },
        filters: {
        /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
        toUppercase(value){
            return value.toUpperCase();
        }
    },
      directives: {
        'rainbow' :{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        }
      }

   
}
</script>

<style>
#show-notice{
    max-width: 0px auto;
    margin: 0px auto;
}
.single-notice{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>