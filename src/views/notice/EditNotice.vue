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
            <h4 v-rainbow class="align-center" >{{ notice.heder}}</h4>
             
           
            <div class="d-flex justify-content-between">
                
                 <article>{{ notice.body | snippet }}</article><br>
                 <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight"><button class="btn my-0 py-0"><i class="fas fa-edit"/></button></div>
                <div class="p-2 bd-highlight"><button class="btn my-0 py-0" v-bind:id="notice.id" @click="deleteNote($event)"><i class="fa fa-trash"/></button></div>
                </div>
                 
                                    
                
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
        deleteNote(event){
            console.log(event.target.id)
             swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deleteNotice/" + event.target.id).then(
                    function(response) {
                        var position = this.notices.findIndex(function(element){
                            return element.id == event.target.id;

                        })
                        this.notices.splice(position,1)
                        console.log(response);
                    }
                );
                swal(event.target.id + " Notice successfully deleted !", {
                icon: "success",
                });

            }
            });
        }
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
       snippet(value){
            return value.slice(0,100)+'.....';
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