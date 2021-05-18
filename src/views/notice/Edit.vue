<template>
  <div class="row">
   
    <dev class="col-6">
        <form class="card-body">
    <blockquote class="blockquote mb-0">
      <div class="mb-3">
         <input type="text" v-model.trim="$v.noticeHader.$model" :class="{'is-invalid': validationStatus($v.noticeHader)}" class="form-control" id="exampleFormControlInput1" placeholder="Notification Header">
         <div v-if="!$v.noticeHader.required" class="invalid-feedback">Header is required.</div>
         </div>
         <div class="mb-3">
         
         <textarea  v-model.trim="$v.noticeBody.$model" :class="{'is-invalid': validationStatus($v.noticeBody)}" class="form-control" id="exampleFormControlTextarea1" placeholder="Notice body" rows="8"></textarea>
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
    </dev>
    <dev class="col-6">
    </dev>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
    name:'notice',
    data() {
        
        return {
            noticeHader: '',
            noticeBody:'',
            date:'',
            Image: '',
            post: ''
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
                    

                    swal("Sussessfull", "Notice successfully added !", "success");
                    this.clearForm();
                }
        },
        clearForm: function() {
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
             //console.log(this.Image)
         }
    }
}
</script>  

<style>

</style>