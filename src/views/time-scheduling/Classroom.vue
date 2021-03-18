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
                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-3" aria-hidden="true"></i>Add Classroom</button>                  
                    </form>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                
                
                <div class="d-flex flex-row justify-content-between mt-3 mb-4">
                    <h5>All Classrooms</h5>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search classroom" aria-label="Search">
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
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">A1</th>
                            <td>250</td>
                            <td>5'</td>
                            <td>12'</td>
                            <td>16 Feet <sup>2</sup></td>
                            <td>
                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>
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
    name: 'Classroom',
    data: function() {
        return {
            classId: '',
            capacity: '',
            width: '',
            length: ''
        }
    },
    validations: {
        classId: {required},
        capacity: {required}
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        submit: function() {
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return;
            alert('Data Submited')
        }
    }
}
</script>


