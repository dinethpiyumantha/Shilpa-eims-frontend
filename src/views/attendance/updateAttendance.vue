<template>
  <div>

    <div class="card" >
            <div class="card-body">
      <h4 style="margin:10px 20px 40px 0px;">Update Description</h4>

     <div class="row">
      <div  class="col-4">
        <form   v-on:submit.prevent="updateForm">
      
                 <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">New Description</label> 
              <input v-model="product.Discreption"  :class="{'is-invalid': validationStatus($v.items.name)}"  class="form-control form-control-lg" name="Name1" type="text" placeholder="" aria-label=".form-control-lg example">
              <div v-if="!$v.items.name.required" class="invalid-feedback">Description is required.</div>
          </div>
                       
                               <button type="submit" class="btn btn-dark">Update</button>
        </form>
     </div> 

     
      <div  class="col-4">
            
         </div>

         <div  class="col-4">

            
        <p style="font-size:17px;" > Full Name  : Sadisha wikum</p>
        <p style="font-size:17px;">User Id        : S103</p>
        <p style="font-size:17px;">User Type  : Student</p>
        

        
         </div>


        </div>

        


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

  created(){
   this.getData();

  },
  data(){

    return{

      product:{

      }
    }
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
    
    
    },
    getData(){
         this.$http.get('http://localhost:8000/api/getAttendance/update/'+this.$route.params.id)
         .then(function (response){

           this.product= response.body.updateA;
         })
    },
    
    updateForm(){
      this.$http.put('http://localhost:8000/api/update/attendance/'+this.$route.params.id,this.product)
         .then(function (response){

           this.$router.push('/attendance')
         })


    }
  }

  
}
</script>
