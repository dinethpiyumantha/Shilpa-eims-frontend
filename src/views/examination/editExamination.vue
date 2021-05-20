<template>
    <div>
        <form action="" v-on:submit.prevent="submitForm">
            <div class="mb-3">
           
                <label for="exampleFormControlInput1" class="form-label">Examination Name</label>
                <!--input type="text" class="form-control" id="exampleFormControlInput1" placeholder="English grade 6 first term test">-->
                <input type="text" 
                       placeholder="English Grade 6 Second term test" 
                       v-model.trim="$v.items.examName.$model" :class="{'is-invalid': validationStatus($v.items.examName)}"  name="" id="" class="form-control" autofocus>
                
                <br>
                
                <label for="exampleFormControlInput1" class="form-label">Examination ID</label>
                <input type="text" 
                       placeholder="EX0001" 
                       v-model.trim="$v.items.examId.$model" :class="{'is-invalid': validationStatus($v.items.examId)}"  name="" id="" class="form-control">

                <br>

                <label for="exampleFormControlInput1" class="form-label">Subject</label>
                <input type="text" 
                       placeholder="English/Sinhala/History..." 
                       v-model.trim="$v.items.subject.$model" :class="{'is-invalid': validationStatus($v.items.subject)}"  name="" id="" class="form-control">
            
            </div>
            
            <br>

            <lable>Type of the Examination</lable>
           <div class="form-check" >
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
                <label class="form-check-label" for="flexCheckDefault">
                    Online Examination
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    Offline Examination (Inclass)
                </label>
            </div>
            <br> 
            
                <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example" v-model="items.grade">
                    <option selected>Grade</option>
                    <option value="1">06</option>
                    <option value="2">07</option>
                    <option value="3">08</option>
                    <option value="3">09</option>
                    <option value="3">10</option>
                    <option value="3">11(O/L)</option>
                    <option value="3">12</option>
                    <option value="3">13(A/L)</option>
                    <option value="3">Other</option>
                </select>

                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="items.term">
                <option selected>Term</option>
                <option value="1">First Term Test</option>
                <option value="2">Second Term Test</option>
                <option value="3">Third Trem Test</option>
                <option value="4">Other</option>
                </select>
                <br>

            
                
        <lable>Type of the Questions</lable>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                MCQ Only
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                MCQ + Essay Questions 
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                MCQ + Essay Questions + Structured Questions
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                Other 
            </label>
        </div>
        
        <br>
        <lable>Examination Date (Month-Day-Year) & Time</lable>
        <div class="">
        <input type="date" class="form-control text-uppercase" id="inputPassword" v-model='items.date'>
        </div>
        <br>
        <div class="row">
        <div class="col">
            <input type="time" 
            class="form-control"  
            v-model.trim="$v.items.start.$model" placeholder="Starting Time" aria-label="Starting Time">
        </div>
        
        <div class="col">
            <input type="time" class="form-control" v-model.trim="$v.items.end.$model" placeholder="Ending Time" aria-label="Ending Time">
        </div>
        </div>                
                        
        
        <br>
        <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Special Note</label>
                    <textarea class="form-control" v-model.trim="$v.items.special.$model" placeholder="This exam is ....." id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        
                <!-- <router-link to="/view-examination"> -->
                <button type="submit" class="btn btn-primary">Update</button><br/>
                <!-- </router-link> -->
                <input type="button" @click="clear()" value="Clear" class="btn btn-outline-primary mt-2">
               
        
      </form> 
                  
    
    </div>
</template>


<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators' //Import Validator
export default {

created(){

        this.getExamData();
    },


name: 'home',
    data: function() { //data()
        return({
            items: { 
                examName: '',
                examId: '', 
                subject: '',
                type:'',
                grade:'',
                term:'',
                date:'',
                start:'00:00',
                end:'00:00',
                special:'This exam is'

            }, 
        });
    },
    methods: {
        //Edit function implemantation
        getExamData(){

             this.$http.get('http://localhost:8000/api/examgetallEdit/getallEdit/'+this.$route.params.id)

             .then(function (Response){

               this.items =Response.body.exams;
             }) 

        },

        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        // if(validation != "undefined") {
        //     return validation.$error;
        // } else {
        //     return false;
        // }
    //     submitForm() {
    //         if(this.items.examName == '' || this.items.examId == '') {
    //             swal("Error", "Fill required fields !", "error");
    //         } else {
    //             swal("Success", "Completed !", "success");
    //         }
    //     }
     //},
//submit form

 submitForm() {

            this.$v.$touch();

              

            if(this.$v.items.$pendding || this.$v.items.$error) {

                swal("Rejected","Fill all the required fields correctly !", "error", {

                    button: "Got It!"
                 

                });

            }

            else {
                swal("Success", "Completed !", "success");

                this.$http.put('http://localhost:8000/api/examUpdate/updateExam/'+this.$route.params.id,this.items)

             .then(function (Response){

                  console.log(this.$route.params.id + "Tst param");

            this.$router.push('/view-examination')
                    });

                }

                //this.$http.post("http://localhost:8000/api/addexam/getexamdata",this.items) //
                
                
     }
    },

    validations: {
        items: {
            examName: {
                required,
                // minLength: minLength(2),
                // maxLength: maxLength(50)
            },
            examId: {
                required,
                //sameAsPassword: sameAs('examName')
            },
            subject: {
                required,
                //sameAsPassword: sameAs('examName')
            },
            special: {
                
                //sameAsPassword: sameAs('examName')
            },
            start: {
                required,
                //sameAsPassword: sameAs('examName')
            },
            end: {
                required,
                //sameAsPassword: sameAs('examName')
            }
            
        }
    }
}



</script>

<style>

</style>

