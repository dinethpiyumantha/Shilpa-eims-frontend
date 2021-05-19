<template>
<div>
         
   
        <div class="card">
            <div class="card-body">

                <h4>Student Information Edit</h4>

                <router-link to="/student">
                    <button class="btn btn-outline-primary mb-3 mt-3"><i class="fa fa-chevron-left mx-2" aria-hidden="true"></i> Back to Student List</button>
                </router-link>

                <form action="" v-on:submit.prevent="submitForm">
                    <div class="row g-3 align-items-center d-flex flex-row-reverse">
                            <div class="col-auto">
                                <input type="text"  id="stuID" class="form-control" aria-describedby="passwordHelpInline" placeholder="STU0001" readonly>
                            </div>
                            <div class="col-auto">
                                <label for="stuID" class="col-form-label">Student ID</label>
                            </div>   
                    </div>

                    <div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name with initial</label>
                        <input type="text" v-model.trim="$v.items.nameInitil.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.nameInitil)}" id="formGroupExampleInput" placeholder=" ">
                        <div v-if="!$v.items.nameInitil.required" class="text-danger"><small>Name with initial is required*</small></div>
               
                        </div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Full Name</label>
                        <input type="text" v-model.trim="$v.items.nameFull.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.nameFull)}" id="formGroupExampleInput2" placeholder=" ">
                        <div v-if="!$v.items.nameFull.required" class="text-danger"><small>Full Name is required*</small></div>
                        </div>
                    </div>


                     <div>
                        <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" v-model.trim="$v.items.addressL1.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressL1)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.addressL1.required" class="text-danger"><small>Address Line1 is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" v-model.trim="$v.items.addressL2.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressL2)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.addressL2.required" class="text-danger"><small>Address Line2 is required*</small></div>
                            </div>
                        </div>
                     </div>



                     <div>
                            <div class="row my-3">
                                    <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">City</label>
                                        <input type="text" v-model.trim="$v.items.city.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.city)}" placeholder=" " aria-label="First name">
                                        <div v-if="!$v.items.city.required" class="text-danger"><small>City is required*</small></div>
                                    </div>

                                    <div class="col ">
                                        <label for="formGroupExampleInput" class="form-label">Join Date </label>
                                        <input type="date" v-model.trim="$v.items.joinDate.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.joinDate)}" placeholder=" " aria-label="Last name">
                                        <div v-if="!$v.items.joinDate.required" class="text-danger"><small>Join Date is required*</small></div>
                                    </div>
                            </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text"  v-model.trim="$v.items.mNumber.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.mNumber)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.mNumber.required" class="text-danger"><small>Mobile is required*</small></div>
                                
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Land Number</label>
                                <input type="text" v-model.trim="$v.items.lNumber.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.lNumber)}" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">E-mail</label>
                                <input type="text" v-model.trim="$v.items.email.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.email)}" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select" v-model.trim="$v.items.gender.$model"  aria-label="Default select example">
                                    
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="xxxx">XXXX</option>                           
                                    </select>
                                    <div v-if="!$v.items.gender.required" class="text-danger"><small>Gender is required*</small></div>
                                    
                            </div>
                        </div>
                     </div>



                     
                     <div>
                        <div class="row my-3">
                            <div class="col-auto w-50 ">
                                <label for="formGroupExampleInput" class="form-label">DOB</label>
                                <input type="date" v-model.trim="$v.items.dob.$model" class="form-control" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.dob.required" class="text-danger"><small>DOB is required*</small></div>
                            </div>
                           
                     </div>


                    


                    <h4> Emergency Information </h4>

                     <div class="my-3">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Gardian's name</label>
                        <input type="text" v-model.trim="$v.items.gName.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.gName)}" id="formGroupExampleInput" placeholder=" ">
                        <div v-if="!$v.items.gName.required" class="text-danger"><small>Gardian's name is required*</small></div>
                        
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Gardian's Type</label>
                            <select class="form-select" v-model.trim="$v.items.gType.$model" aria-label="Default select example">
                                        <option value="1">Parent</option>
                                        <option value="2">Brothers</option>
                                        <option value="3">others</option>
                                        </select>  
                        <div v-if="!$v.items.gType.required" class="text-danger"><small>Gardian's Type is required*</small></div>                          
                        </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" v-model.trim="$v.items.gAddressL1.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.gAddressL1)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.gAddressL1.required" class="text-danger"><small>Address Line1 is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" v-model.trim="$v.items.gAddressL2.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.gAddressL2)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.gAddressL2.required" class="text-danger"><small>Address Line2 is required*</small></div>
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">City</label>
                                <input type="text" v-model.trim="$v.items.gCity.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.gCity)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.gCity.required" class="text-danger"><small>City is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" v-model.trim="$v.items.gMnumber.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.gMnumber)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.gMnumber.required" class="text-danger"><small>Mobile Number is required*</small></div>
                            </div>
                        </div>
                     </div>

                     

                     <div class="my-5 d-flex flex-row-reverse bd-highlight">
                         <button  type="button" @click="clear()" class="btn btn-outline-secondary">Clear</button>
                         <button  type="submit" class="btn btn-primary btn-dark">Update</button>
                     </div>   
                         
                         

         
             </div>

             </form>
              
        </div>



    </div>


       
</div>
</template>


<script>

import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators' //Import Validator 

export default {
// retrive part
 created(){

        this.getData();
    },

//
    name: 'addstu',
    data: function() { //data()
        return({
            items: { 
                id: '',
                nameInitil: '',
                nameFull: '',
                addressL1: '',
                addressL2: '',
                city: '',
                joinDate: '',
                mNumber: '',
                lNumber: '',
                email: '',
                gender: '',
                dob: '',
                gName: '',
                gType: '',
                gAddressL1: '',
                gAddressL2: '',
                gCity: '',
                gMnumber: ''
                
            },
        });

        },

methods: {

        //retrieve
        getData(){

             this.$http.get('http://localhost:8000/api/students/edit/'+this.$route.params.id)

             .then(function (Response){

               this.items =Response.body.students;

             })
        },
//

        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        
        submitForm: function() {
            this.$v.$touch();
            if(this.$v.items.$pendding || this.$v.items.$error) {
                swal("Rejected", "Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                });
                return;
            } else {

                const student = {
                    'nameInitil':this.items.nameInitil,
                    'nameFull':this.items.nameFull,
                    'addressL1':this.items.addressL1,
                    'addressL2':this.items.addressL2,
                    'city':this.items.city,
                    'joinDate':this.items.joinDate,
                    'mNumber':this.items.mNumber,
                    'lNumber':this.items.lNumber,
                    'email':this.items.email,
                    'gender':this.items.gender,
                    'dob':this.items.dob,
                    'gName':this.items.gName,
                    'gType':this.items.gType,
                    'gAddressL1':this.items.gAddressL1,
                    'gAddressL2':this.items.gAddressL2,
                    'gCity':this.items.gCity,
                    'gMnumber':this.items.gMnumber
                }



                //  this.$http.put('http://localhost:8000/api/student/update/'+this.$route.params.id, student).then(function (response) { 
                //     console.log(response);


                this.$http.put('http://localhost:8000/api/student/update/'+this.$route.params.id, student) .then(function (Response){

                  console.log(this.$route.params.id + "Tst param");


                });
                swal("Update Success", "Completed !", "success"); 
            }

        }

    },

    

    validations: {
        items: {
            nameInitil: {
                required,
                // minLength: minLength(5),
                // maxLength: maxLength(30)
                },
            nameFull: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(100)            
            },
            addressL1: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            addressL2: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            city: {
                required,
                    // minLength: minLength(5),
                    // maxLength: maxLength(20)
            },
            joinDate: {required,
                    // minLength: minLength(5),
                    // maxLength: maxLength(11)
            },
            mNumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

             lNumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

            email: {
                email
            },
            gender: {
                required,
                // minLength: minLength(4),
                // maxLength: maxLength(10)
            },
            dob: {
                required
            },
            gName: {
                required,
                // minLength: minLength(5),
                // maxLength: maxLength(50)
            },
            gType: {
                required
            },
            gAddressL1: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            gAddressL2: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            gCity: {
                required
            },
            gMnumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)            
            }
        }
    }
}
</script>



