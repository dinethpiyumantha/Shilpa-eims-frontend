<template>
  <form v-on:submit.prevent="submitForm">
     <div> 
        <div class="card">
            <div class="card-body">

                
                 <router-link to="employees">
                    <button class="btn btn-outline-primary mb-3 mt-3"><i class="fa fa-chevron-left mx-2" aria-hidden="true"></i> Back</button>
                </router-link>


                <h4> Employee information</h4>
                    <div class="row g-3 align-items-center d-flex flex-row-reverse">
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="EMP1021" readonly>
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">EmployeeID</label>
                            </div>   
                    </div>

                    <div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput"  class="form-label">Name with initial</label>
                        <input type="text"  class="form-control"  v-model.trim="$v.items.nameInitial.$model" :class="{'is-invalid': validationStatus($v.items.nameInitial)}"
                         id="formGroupExampleInput" placeholder=" ">
                         <div v-if="!$v.items.nameInitial.required" class="text-danger"><small>  Text is required.</small></div>
                        </div>

                        <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">full Name</label>
                        <input type="text" class="form-control"  v-model.trim="$v.items.fullName.$model" :class="{'is-invalid': validationStatus($v.items.fullName)}" id="formGroupExampleInput2" placeholder=" ">
                        <div v-if="!$v.items.fullName.required" class="text-danger"><small>  Text is required.</small></div>

                        </div>
                        
                    </div>


                     <div>
                        <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" class="form-control"  v-model.trim="$v.items.address1.$model" :class="{'is-invalid': validationStatus($v.items.address1)}" placeholder=" " aria-label="First name">
                                 <div v-if="!$v.items.address1.required" class="text-danger"><small>  Text is required.</small></div>

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" class="form-control" v-model.trim="$v.items.address2.$model" :class="{'is-invalid': validationStatus($v.items.address2)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.address2.required" class="text-danger"><small>  Text is required.</small></div>

                            </div>
                        </div>
                     </div>



                     <div>
                            <div class="row my-3">
                                    <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">City</label>
                                        <input type="text" class="form-control"  v-model.trim="$v.items.city.$model" :class="{'is-invalid': validationStatus($v.items.city)}" placeholder=" " aria-label="First name">
                                        <div v-if="!$v.items.city.required" class="text-danger"><small>  Text is required.</small></div>

                                    </div>

                                    <div class="col ">
                                        <label for="formGroupExampleInput" class="form-label">Join Date </label>
                                        <input type="date" class="form-control" v-model.trim="$v.items.date.$model" :class="{'is-invalid': validationStatus($v.items.date)}"  placeholder=" " aria-label="Last name">
                                         <div v-if="!$v.items.date.required" class="text-danger"><small>  Text is required.</small></div>
                                    </div>
                            </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control"  v-model.trim="$v.items.Mnumber.$model" :class="{'is-invalid': validationStatus($v.items.Mnumber)}"  placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.Mnumber.required" class="text-danger"><small>  Text is required.</small></div> 
                            </div>

                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Land Number</label>
                                <input type="text" class="form-control"   v-model.trim="$v.items.Lnumber.$model" :class="{'is-invalid': validationStatus($v.items.Lnumber)}" placeholder=" " aria-label="Last name">
                                 <div v-if="!$v.items.Lnumber.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">E mail</label>
                                <input type="text" class="form-control"   v-model.trim="$v.items.email.$model" :class="{'is-invalid': validationStatus($v.items.email)}"   placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.email.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>

                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select"    v-model.trim="$v.items.gender.$model" :class="{'is-invalid': validationStatus($v.items.gender)}" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    </select>
                                 <div v-if="!$v.items.gender.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                        </div>
                     </div>



                     
                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">DOB</label>
                                <input type="date" class="form-control"  v-model.trim="$v.items.dob.$model" :class="{'is-invalid': validationStatus($v.items.dob)}"  placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.dob.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">NIC</label>
                                <input type="text" class="form-control"  v-model.trim="$v.items.nic.$model" :class="{'is-invalid': validationStatus($v.items.nic)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.nic.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                        </div>
                     </div>


                      <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Deartment</label>
                                <input type="text" class="form-control" v-model.trim="$v.items.department.$model" :class="{'is-invalid': validationStatus($v.items.department)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.department.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Speciality</label>
                                <input type="text" class="form-control"  v-model.trim="$v.items.special.$model" :class="{'is-invalid': validationStatus($v.items.special)}" placeholder=" " aria-label="Last name">
                                 <div v-if="!$v.items.special.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                        </div>
                     </div>
                    
                    <br>
                    <br>

                    <h4> Emergency Information </h4>

                     <div class="my-3">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Gardian's name</label>
                        <input type="text" class="form-control"  v-model.trim="$v.items.Gname.$model" :class="{'is-invalid': validationStatus($v.items.Gname)}" id="formGroupExampleInput" placeholder=" ">
                         <div v-if="!$v.items.Gname.required" class="text-danger"><small>  Text is required.</small></div> 

                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Gardian's Type</label>
                            <select class="form-select"    v-model.trim="$v.items.GardianType.$model" :class="{'is-invalid': validationStatus($v.items.GardianType)}" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="Parent">Parent</option>
                                        <option value="Brothers">Brothers</option>
                                        <option value="others">others</option>
                                        </select> 
                                         <div v-if="!$v.items.GardianType.required" class="text-danger"><small>  Text is required.</small></div>  
                       
                        </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" class="form-control"   v-model.trim="$v.items.add3.$model" :class="{'is-invalid': validationStatus($v.items.add3)}"  placeholder=" " aria-label="First name">
                                 <div v-if="!$v.items.add3.required" class="text-danger"><small>  Text is required.</small></div>   

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" class="form-control"  v-model.trim="$v.items.add4.$model" :class="{'is-invalid': validationStatus($v.items.add4)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.add4.required" class="text-danger"><small>  Text is required.</small></div>

                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">City</label>
                                <input type="text" class="form-control" v-model.trim="$v.items.city2.$model" :class="{'is-invalid': validationStatus($v.items.city2)}"  placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.city2.required" class="text-danger"><small>  Text is required.</small></div>  

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" v-model.trim="$v.items.Mnumber2.$model" :class="{'is-invalid': validationStatus($v.items.Mnumber2)}"    placeholder=" " aria-label="Last name">
                                 <div v-if="!$v.items.Mnumber2.required" class="text-danger"><small>  Text is required.</small></div> 

                            </div>
                        </div>
                     </div>
                     <div class="d-grid gap-2 d-md-flex justify-content-md-end">



                            <div class="my-5 d-flex flex-row-reverse bd-highlight">
                                <button type="button" @click="clear()"  class="btn btn-primary btn-dark">Clear</button>
                            </div>

                            <div class="my-5 d-flex flex-row-reverse bd-highlight">
                                <button type="submit" class="btn btn-secondary btn-dark">SUBMIT</button>
                              
                            </div>
                     </div>

         
         
             </div>
        </div>
     </div>
    </form>
</template>




 <script>
  import { required,minLength, maxLength, sameAs,alpha,alphaNum,numeric,email} from 'vuelidate/lib/validators' //Import Validator 

export default {
    name: 'addEmp',
    data: function() { //data()
        return ({
            items: { 
                nameInitial: '',
                fullName:'' ,
                address1 :'' ,
                address2 :'',
                city :'',
                date :'',
                Mnumber :'',
                Lnumber :'',
                email :'',
                gender :'',
                dob :'',
                nic:'',
                department:'',
                special:'',
                Gname:'',
                GardianType:'',
                add3:'',
                add4:'',
                city2:'',
                Mnumber2:'',

            }
        });
    },
     methods: {
        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },

        submitForm() {
            this.$v.$touch();
            if(this.$v.items.$pendding || this.$v.items.$error) {
                swal("Rejected","Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                });
                // ssreturn;
            }
            else {

                const employees ={

                'nameInitial':this.items.nameInitial,
                'fullName':this.items.fullName ,
                'address1' :this.items.address1 ,
                'address2' :this.items.address2,
                'city' :this.items.city,
                'date' :this.items.date,
                'Mnumber' :this.items.Mnumber,
                'Lnumber' :this.items.Lnumber,
                'email' :this.items.email,
                'gender' :this.items.gender,
                'dob' :this.items.dob,
                'nic':this.items.nic,
                'department':this.items.department,
                'special':this.items.special,
                'Gname':this.items.Gname,
                'GardianType':this.items.GardianType,
                'add3':this.items.add3,
                'add4':this.items.add4,
                'city2':this.items.city2,
                'Mnumber2':this.items.Mnumber2,


                }
                
                this.$http.post('http://localhost:8000/api/employees/add', employees).then(function (response) { 
                    console.log(response);
                    });
                swal("Success", "Completed !", "success"); 
            }
        }
        
        
     },
       validations: {
        items: {
            nameInitial : {
                required,
                         maxLength: maxLength(50),
                          
            },
            fullName : {
                required,
                        maxLength: maxLength(50),
                        
                         

            },
            address1 : {
                 required,
                        maxLength: maxLength(30),
                         

            },
             address2 : {
                 required,
                        maxLength: maxLength(30),
                          

            },
            city :  {
                   required,
                        maxLength: maxLength(15),
                         alpha
     
            },
            date :{
                required,
            },
            Mnumber :{
                 required,  
                    numeric,  
                    maxLength: maxLength(10),

            },
             Lnumber :{
                 required,  
                    numeric ,
                    maxLength: maxLength(10),

            },

            email :{
                 required, 
                    email
            },
            gender :{
                 required, 
            },

             dob :{
                 required, 
            },
             nic :{
                 required, 
                    alphaNum	
            },
             department :{
                 required, 
                    maxLength: maxLength(20),
                    
            },
             special :{
                 required, 
                    maxLength: maxLength(20),
                     
            },
             Gname :{
                 required,
                     maxLength: maxLength(50),
                      
            },
             GardianType :{
                 required, 
            },
             add3 :{
                 required, 
                    maxLength: maxLength(30),
                    
            },
             add4 :{
                 required, 
                    maxLength: maxLength(30),
                     
            },
             city2 :{
                 required, 
                    maxLength: maxLength(15),
                    alpha
            },
              Mnumber2 :{
                 required, 
                    numeric,
                    maxLength: maxLength(10),

            }

        }
     }
}
 </script>