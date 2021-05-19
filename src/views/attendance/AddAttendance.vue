<template>
  <div>


    <div class="card" >
            <div class="card-body">
      <h4 style="margin:10px 20px 40px 0px;">Add Attendance</h4>

     <div class="row">
      <div  class="col-4">
        <form  v-on:submit.prevent="submit($Vid)" >
          <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">User ID</label>
                  <input v-model.trim="$v.items.id.$model" :class="{'is-invalid': validationStatus($v.items.id)}"  value="table.Vid" class="form-control form-control-lg" type="text" placeholder="" aria-label=".form-control-lg example">
                  <div v-if="!$v.items.id.required" class="invalid-feedback">ID is required.</div>
          </div>
                 <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
              <input v-model.trim="$v.items.name.$model" :class="{'is-invalid': validationStatus($v.items.name)}" class="form-control form-control-lg" name="Name1" type="text" placeholder="" aria-label=".form-control-lg example">
              <div v-if="!$v.items.name.required" class="invalid-feedback">Name is required.</div>
          </div>
          <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" style="color:blue">Description(not important)</label>
              <input   class="form-control form-control-lg" name="Name3" type="text" placeholder="" aria-label=".form-control-lg example">
              
          </div>
                       
                               <button type="submit" class="btn btn-dark">Submit</button>
        </form>
     </div>

         <div  class="col-4">

           <div style="margin:70px 50px 50px 190px;color:black;font-size:40px;">OR</div>
        
         </div>

      <div  class="col-4">
            <div class="text-center">
              <img src="src\assets\1234.jpg" class="rounded" alt="..." style="width:200px;height:200px; margin:20px;">
            </div>
         </div>

        </div>

        <!-- <h4 style="margin:30px 20px 40px 0px;">User Information</h4>
        
        <p style="font-size:17px;"> Full Name  : Dineth ekanayaka</p>
        <p style="font-size:17px;">User Id        : S0012</p>
        <p style="font-size:17px;">User Type  : Student</p>
        <p style="font-size:17px;">Concact No : 011002378</p>
     
        <button type="button" class="btn btn-dark">Clear </button> -->
        


     </div>

    </div>

    
  </div>
</template>



<script>
import { required, maxLength } from 'vuelidate/lib/validators'

import About from '../About.vue'
export default {
  components: { About },
  data() {
    return {
      items : {
        id: '',
        name: '',
        table:[]
      }
    }
  },
  validations: {
    items: {
      id: { required, maxLength: maxLength(10) },
      name: { required }
    }
  },
   created() {
    this.$http.get('http://localhost:8000/api/attendance/getall')
        .then(function (response) {
            console.log(response);
            this.table = response.body.allData;
        });
         this.$http.get('http://localhost:8000/api/attendance/getall')
        .then(function (response) {
            console.log(response);
            this.table = response.body.allData;
        });
         this.$http.get('http://localhost:8000/api/attendance/getall')
        .then(function (response) {
            console.log(response);
            this.table = response.body.allData;
        });
   },
   
   
  methods: {
    validationStatus: function(validation) {
         return typeof validation != "undefined" ? validation.$error: false;
    },
    submit: function(Vid) {
        this.$v.$touch();
        if(this.$v.$pendding || this.$v.$error) {
          swal("Rejected !", "Fill all required fields !", "error");
        } else {
          swal("Successfull !", "Attendance submitted !", "success");
        }

        {
          this.$http.post("http://localhost:8000/api/attendance/add"+Vid.target.id,this.table,)
          .then(function (response) {
            var position = this.table.findIndex(function (element){
            return element.id==Vid.target.id;
            })
          })
        }
        }

    
    
     
   
    }
  
  
  }
</script>



<style>

</style>