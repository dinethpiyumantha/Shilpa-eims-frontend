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
              <div class="d-flex">
                <input v-model.trim="$v.items.id.$model" :class="{'is-invalid': validationStatus($v.items.id)}"  value="table.Vid" class="form-control" type="text" placeholder="" aria-label=".form-control-lg example">
                <button type="button" @click="getUser()" class="btn btn-success">Find</button>
              </div>
              <div v-if="!$v.items.id.required" class="invalid-feedback">ID is required.</div>
            </div>
            
          

          <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name</label>
                  <input v-model="items.name" value="table.Vid" class="form-control" type="text" placeholder="" aria-label=".form-control-lg example" disabled>
          </div>

          <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Time</label>
                  <input v-model="items.time" value="table.Vid" class="form-control" type="text" placeholder="" aria-label=".form-control-lg example" disabled>
          </div>
                 
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Description (Optional)</label>
              <input v-model="items.description"  class="form-control" name="Name3" type="text" placeholder="" aria-label=".form-control-lg example">
              
          </div>
                       
          <button type="submit" class="btn btn-primary">Submit</button>
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
        time: '',
        table:[],
        student: [],
        description: ''
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
                swal("Rejected","Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                }); 
                return;
            }
            else {
                const attendance = {
                    "id" : "0",
                    "Userid" : this.items.student.id,
                    "name": this.items.student.nameInitil,
                    "subject": "No Specify",
                    "Discription": this.items.description
                }

                console.log(attendance);

                this.$http.post('http://localhost:8000/api/attendance/add', attendance).then(function (response) { 
                    console.log(response);
                });

                swal("Sussessfull", "Attendance successfully added !", "success");
            }
     }
  },
  computed: {
    getUser() {
      this.$http.get("http://localhost:8000/api/students/edit/"+this.items.id)
          .then(function (response) {
            this.items.name = response.body.students.nameInitil;
            this.items.student = response.body.students;
          });
      const currentdate = new Date(); 
      this.items.time = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    }
  }
}
</script>



<style>

</style>