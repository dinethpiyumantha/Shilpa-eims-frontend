<template>
    <div>
        <h4>Classroom Management</h4>
        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        Add a Classroom
                    </div>

                    <form class="card-body" v-on:submit.prevent="submit">
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Classroom ID</label>
                                    <input type="text" v-model.trim="$v.classId.$model" :class="{'is-invalid': validationStatus($v.classId)}" class="form-control text-uppercase" placeholder="Ex: 'A001'" aria-label="First name">
                                    <div v-if="!$v.classId.required" class="invalid-feedback">Classroom ID is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Capacity</label>
                                    <input type="text" v-model.trim="$v.capacity.$model" :class="{'is-invalid': validationStatus($v.capacity)}" class="form-control" placeholder="Numbers only*" aria-label="Last name">
                                    <div v-if="!$v.capacity.required" class="invalid-feedback">Student Capacity is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Area (Ft & in)</label>
                                    <div class="d-flex">
                                        <input type="text" v-model.trim="width" class="form-control mr-3" placeholder="Width" aria-label="Last name">
                                        <input type="text" v-model.trim="length" class="form-control" placeholder="Length" aria-label="Last name">
                                       
                                    </div>
                                </div>
                            </div>


<!-- TAGS -->
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Resources</label>
                                    <div>
                                        <input type="text" class="form-control key-press-input" v-model="tagValue" @keyup.space="addTag" placeholder="Ex: 'Projector', 'AC' ...">
                                        <div @click="addTag" class="key-press alert alert-secondary border rounded"><i class="fas fa-keyboard"></i> <span>SPACEBAR</span></div>
                                    </div>

                                    <div class="d-flex flex-wrap flex-row gap-2 mt-2 mb-2">
                                        <div class="tag bg-secondary text-white" v-for="(tag, index) in resources" :key="'tag'+index">
                                            <small>{{ tag }}</small>
                                            <span @click="removeTag(index)" ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-3" aria-hidden="true"></i>Add Classroom</button>                  
                            <input v-on:click="clearForm" type="button" class="btn btn-outline-primary w-auto" value="Clear">
                    </form>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                
                
                <div class="d-flex flex-row justify-content-between mt-3 mb-4">
                    <h5>
                        <span>All Classrooms</span>
                        <button title="Reload Classrooms" class="btn btn-text my-2 my-sm-0" @click="getAll()"><i class="fa fa-sync-alt"/></button>
                    </h5>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search classroom" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    
                </div>

                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Capacity</th>
                                <th scope="col">Width</th>
                                <th scope="col">Length</th>
                                <th scope="col">Area</th>
                                <th scope="col">Resources</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filterClassrooms" :key="index">
                                <th scope="row">{{ item.cid }}</th>
                                <td>{{ item.capacity }}</td>
                                <td>{{ item.width }}</td>
                                <td>{{ item.length }}</td>
                                <td>{{ item.length * item.width }} Feet <sup>2</sup></td>
                                <td class="res-row">{{ item.resources }}</td>
                                <td>
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    <button class="btn my-0 py-0" v-bind:id="index" @click="deleteItem(item)"><i class="fa fa-trash"/></button>
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
import ClassroomUpdate from './ClassroomUpdate'

export default {
    name: 'Classroom',
    data: function() {
        return {
            classId: '',
            capacity: '',
            width: '',
            length: '',
            tagValue: '',
            resources: [],
            allItems: [],
            deleteBtn: false,
            search:'',
            isResEmpty: false
        }
    },
    components: {
        'classroom-upadate':ClassroomUpdate
    },
    created() {
        this.$http.get('http://localhost:8000/api/classrooms/getall')
        .then(function (response) {
            // console.log(response);
            this.allItems = response.body.allClassrooms;
        });
    },
    validations: {
        classId: {required},
        capacity: {required}
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        getAll: function() {
            this.$http.get('http://localhost:8000/api/classrooms/getall')
            .then(function (response) {
                console.log(response);
                this.allItems = response.body.allClassrooms;
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
                const classroom = {
                    'classId': this.classId,
                    'capacity': this.capacity,
                    'width': (this.width=="") ? 0 : this.width,
                    'length': (this.length=="") ? 0 : this.length,
                    'resources': this.arrayToString(this.resources)
                }
                
                if(!this.isResourcesFull) {
                    classroom['resources'] = 'null';
                }

                this.$http.post('http://localhost:8000/api/addclassroom', classroom).then(function (response) { 
                    console.log(response);
                });

                swal("Sussessfull", this.classId+" classroom successfully added !", "success");
                this.clearForm();
                this.getAll();
            }
        },
        clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        addTag: function() {
            if(!this.tagValue == ''){
                this.resources.push(this.tagValue);
            }
            this.tagValue = '';
            isResourcesFull();
        },
        removeTag: function(index) {
            this.resources.splice(index, 1);
            isResourcesFull();
        },
        arrayToString: function(array) {
            var str=''
            array.forEach(element => {
                str+=element+', '
            });
            return str;
        },
        deleteItem(item) {
            console.log(item);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deleteclassroom/" + item.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(item.cid + " classroom successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },
    computed: {
        filterClassrooms: function() {
            return this.allItems.filter((item)=> {
                return item.resources.match(this.search)||item.cid.match(this.search);
            })
        },
        isResourcesFull: function() {
            this.isResEmpty = this.resources.length>0;
            return this.isResEmpty;
        }
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