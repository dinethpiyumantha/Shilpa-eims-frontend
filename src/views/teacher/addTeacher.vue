<template>
<div>
         
   
        <div class="card">
            <div class="card-body">

                <h4>Teacher Information</h4>
                <form action="" v-on:submit.prevent="submitForm">
                    <div class="row g-3 align-items-center d-flex flex-row-reverse">
                            <div class="col-auto">
                                <input type="text"  id="teacherID" class="form-control" aria-describedby="passwordHelpInline" placeholder="TE0001">
                            </div>
                            <div class="col-auto">
                                <label for="teacherID" class="col-form-label">TEACHER ID</label>
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
                                <input type="text" v-model.trim="items.lNumber" class="form-control"  placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">E-mail</label>
                                <input type="text" v-model.trim="items.email" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select" v-model.trim="$v.items.gender.$model"  aria-label="Default select example">
                                    
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">XXXX</option>                           
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
                         <button  type="submit" class="btn btn-primary btn-dark">Submit</button>
                        
                         
                     </div>


        
         
             </div>

             </form>
              
        </div>



    </div>


       
</div>
</template>


<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators' //Import Validator 
export default {
    name: 'addstu',
    data: function() { //data()
        return({
            items: { 
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
        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        //submitForm() {
            // if(this.items.nameInitil == '' || this.items.nameFull == '' || this.items.addressL1 == '' || this.items.addressL2 == '' || this.items.city == '' || this.items.joinDate == '' || this.items.mNumber == '' || this.items.gender == '' || this.items.dob == '' || this.items.gName == '' || this.items.gType == '' || this.items.gAddressL1 == '' || this.items.gAddressL2 == '' || this.items.gCity == '' || this.items.gMnumber == '' ) {
            //     swal("Error", "Fill required fields !", "error");
            // } else {
            //     swal("Success", "Completed !", "success");
            // }
        //     this.$v.$touch();
        //     if(this.$v.items.$pendding || this.$v.items.$error) {
        //         swal("Error", "Fill required fields !", "error");
        //         return;
        //     } else {
        //         swal("Success", "Completed !", "success");
        //          return;
        //     }
        // }
        submitForm: function() {
            this.$v.$touch();
            if(this.$v.items.$pendding || this.$v.items.$error) {
                swal("Rejected", "Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                });
                return;
            } else {
                swal("Success", "Completed !", "success"); 
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
                minLength: minLength(10),
                maxLength: maxLength(10)
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
                minLength: minLength(10),
                maxLength: maxLength(10)            
            }
        }
    }
}
</script>

