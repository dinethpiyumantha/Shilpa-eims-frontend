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
        <div v-for="(notice,index) in filteredheder" :key="notice.index" class="single-notice">
            <h4 v-rainbow class="align-center" >{{ notice.heder}}</h4>
            <div class="d-flex justify-content-between">
                
                 <article>{{ notice.body | snippet }}</article><br>
                            <div class="d-flex flex-column bd-highlight mb-3">
                            <div class="p-2 bd-highlight"><button type="button" class="btn my-0 py-0" data-bs-toggle="modal" v-on:click="updateIndex(index)" data-bs-target="#staticBackdrop"><i class="fas fa-edit"/></button></div>
                            <div class="p-2 bd-highlight"><button class="btn my-0 py-0" v-bind:id="notice.index" @click="deleteNote(notice)"><i class="fa fa-trash"/></button></div>
                </div>
                 <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                             <div class="modal-content">
                                <div class="modal-header">
                                 <h5 class="modal-title" id="staticBackdropLabel"><h2>{{notices[noticesUpdate].heder}}</h2></h5>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                            <form class="card-body" v-on:submit.prevent="submit">
                        <blockquote class="blockquote mb-0">
                        <div class="mb-3">
                            <input type="text" v-model.trim="$v.noticeHader.$model" :class="{'is-invalid': validationStatus($v.noticeHader)}" 
                            class="form-control" id="exampleFormControlInput1" placeholder="Notification Header" value="dsl">
                            <div v-if="!$v.noticeHader.required" class="invalid-feedback">Header is required.</div>
                        </div>
                        <div class="mb-3">
                        
                        <textarea  v-model.trim="$v.noticeBody.$model" :class="{'is-invalid': validationStatus($v.noticeBody)}"
                        class="form-control" id="exampleFormControlTextarea1" placeholder="Notice body" rows="8"></textarea>
                        <div v-if="!$v.noticeBody.required" class="invalid-feedback">Body is required.</div>
                        <div class="d-flex justify-content-between gap-5">
                            <input type="Date" v-model.trim="$v.date.$model" class="form-control" placeholder="Date ">
                            
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" @change="getImage($event)">
                                
                            </div>
             
         </div>
         <input type="text" class="form-control" v-model.trim="$v.post.$model" placeholder="Post by"><br>
                            <button type="submit" class="btn btn-lg btn-primary">Send Notice <i class="far fa-sticky-note"></i></button>
                            </div>
                        </blockquote>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                                    
                
            </div>
            <br>
            <div class="d-flex justify-content-between">
                <h6 class="right">{{notice.date}}</h6>
                <h6 class="right">{{notice.postBy}}</h6>
            </div>
            <!-- Modal -->

        </div>
    </div>


</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
    props:{
        isActive: Boolean
    },
    data () {
        return {
            notices: [],
            noticeCount:'',
            search: '',
            isActive: false,
            noticeHader: '',
            noticeBody:'',
            date:'',
            Image: '',
            post: '',
            noticesUpdate: 0
            
        }
    },

computed: {
            filteredheder(){
                console.log(props);
                return this.notices.slice(0).reverse();
            }
},
validations: {
        noticeHader: {
            required,
            maxLength: maxLength(80)
            },
        noticeBody: {
            required
            },
            date: {

            },
            post:{

            },
    },
    methods: {
        updateIndex:function(index){
        this.noticesUpdate =index;
      },
        submit: function() {
                this.$v.$touch();
                if(this.$v.$pendding || this.$v.$error) {
                    swal("Rejected","Fill all the required fields correctly !", "error", {
                        button: "Got It!"
                    }); 
                    return;
                }
                else {
                     const notifications = {
                         'heder': this.noticeHader,
                         'body': this.noticeBody,
                         'date': this.date,
                         'image': this.Image,
                         'postBy': this.post
                    //     'resources': this.arrayToString(this.resources)
                     }
                    
                    this.$http.post('http://localhost:8000/api/addNotice', notifications).then(function (response) { 
                        //console.log(response);
                        this.isActive= response.isActive;
                     });

                    swal("Sussessfull", "Notice successfully added !", "success");
                    this.clearForm();
                }
        }
        ,clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
         getImage(e){
             var filereader = new FileReader();
            
            filereader.readAsDataURL(e.target.files[0]);

             filereader.onload = (e) =>
            {
                this.Image = e.target.result;
            }
             console.log(this.Image)
         },
        
        deleteNote(notice){
            //console.log(notice)
             swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deleteNotice/" + notice.id).then(
                    function(response) {
                        var position = this.notices.findIndex(function(element){
                            return element.id == notice.id;

                        });
                        this.notices.splice(position,1)
                        //console.log(response);
                    });

                    
                swal("Notice ID"+notice.id + " Notice successfully deleted !", {
                icon: "success",
                });
            }
            });
        },
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