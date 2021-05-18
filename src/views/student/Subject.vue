<template>
<!-- TEST INT -->
    <div>
        <h4>Subject</h4>
        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        Add a Subject
                    </div>

                    <form class="card-body" v-on:submit.prevent="submit">
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Subject ID</label>
                                    <input type="text" v-model.trim="$v.subjectID.$model" :class="{'is-invalid': validationStatus($v.subjectID)}" class="form-control text-uppercase" placeholder="Ex: 'A001'" aria-label="First name">
                                    <div v-if="!$v.subjectID.required" class="invalid-feedback">Subject ID is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Subject </label>
                                    <input type="text" v-model.trim="$v.subject.$model" :class="{'is-invalid': validationStatus($v.subject)}" class="form-control" placeholder="Numbers only*" aria-label="Last name">
                                    <div v-if="!$v.subject.required" class="invalid-feedback">Subject is required.</div>
                                </div>

                                <div class="col">
                                    <label for="">Grade</label>
                                    <div>
                                        <select class="form-select" v-model.trim="$v.grade.$model" :class="{'is-invalid': validationStatus($v.grade)}" aria-label="Default select example">
                                            <option value="0" selected>Select Grade</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="Courses">Courses</option>
                                        </select>
                                        <div v-if="!$v.grade.required" class="invalid-feedback">Grade is required.</div>
                                    </div>
                                    
                                </div>
                            </div>




                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-3" aria-hidden="true"></i>Add Subject</button>                  
                            <input v-on:click="clearForm" type="button" class="btn btn-outline-primary w-auto" value="Clear">
                    </form>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                
                
                <div class="d-flex flex-row justify-content-between mt-3 mb-4">
                    <h5>
                        <span>All Subjects</span>
                        <button title="Reload Subject" class="btn btn-text my-2 my-sm-0" @click="getAll()"><i class="fa fa-sync-alt"/></button>
                    </h5>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search Subject" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    
                </div>

                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Subject ID</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Grade</th>
                        
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i, index) in allSubjectMains" :key="index">
                                <th scope="row">{{ i.id }}</th>
                                <td>{{ i.subjectID }}</td>
                                <td>{{ i.subject }}</td>
                                <td>{{ i.grade }}</td>
                                
                                <td>
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    <button class="btn my-0 py-0" v-bind:id="index" @click="deleteSubjectMain(i)"><i class="fa fa-trash"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Subject',
    data: function() {
        return {
            subjectID: '',
            subject: '',
            grade: '',

            allSubjectMains: [],
           // deleteBtn: false,
            search:''
        }
    },

    components: {
        
    },
    


     created() {
        this.$http.get('http://localhost:8000/api/subjetmainget')
        .then(function (response) {
            console.log(response);
            this.allSubjectMains = response.body.SubjectMain;
        });
    },

    validations: {
        subjectID: {required},
        subject: {required},
        grade: {required}
    },

    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        getAll: function() {
            this.$http.get('http://localhost:8000/api/subjetma')
            .then(function (response) {
                // console.log(response);
                this.allSubjectMains = response.body.allSubjects;
            });
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
                const Subject = {
                    'subjectID': this.subjectID,
                    'subject': this.subject,
                    'grade': this.grade,
                    
                    
                    
                }
                
                
                this.$http.post('http://localhost:8000/api/subject/add', Subject).then(function (response) { 
                    console.log(response);
                });
                swal("Sussessfull", this.subjectID+" Subject successfully added !", "success");
                this.clearForm();
                this.getAll();
            }
        },
        clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
    
        deleteSubjectMain(SubjectMain) {
            console.log(SubjectMain);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/subject/delete/" + SubjectMain.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(SubjectMain.cid + " Subject successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },
    computed: {
        filterSubjects: function() {
            return this.allSubjectMains.filter((SubjectMain)=> {
                return SubjectMain.cid.match(this.search);
            })
        },
        
    }
}
</script>


<style scoped>
.tag{
    width: fit-content;
    padding: 0px 5px 1px 10px;
    border-radius: 20px;
    text-align: center;
}
.key-press{
    padding: 2px 5px;
    position: absolute;
    top: 36px;
    right: 21px;
    width: 110px;
    cursor: pointer;
}
.key-press-input{
    padding: 5px 120px 5px 10px;
}
.res-row{
    max-width: 100px;
    overflow: hidden;
}
</style>