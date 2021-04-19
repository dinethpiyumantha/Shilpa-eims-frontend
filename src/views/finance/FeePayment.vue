<template>
    <div>
        <h4>Fee Payments</h4>
        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        Add a Fee Payment
                    </div>

                    <form class="card-body" v-on:submit.prevent="submit">
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Grade</label>
                                    <div class="d-flex flex-row gap-2 w-100">
                                        <select class="form-select" aria-label="Default select example">
                                        <option value="g6" selected>Grade 6</option>
                                        <option value="g7">Grade 7</option>
                                        <option value="g8">Grade 8</option>
                                        <option value="g9">Grade 9</option>
                                        <option value="g10">Grade 10</option>
                                        <option value="g11">Grade 11</option>
                                        <option value="g12">Grade 12</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="">Subject</label>
                                    <div class="d-flex flex-row gap-2 w-100">
                                        <select class="form-select" aria-label="Default select example">
                                        <option value="g6s1" selected>Sinhala</option>
                                        <option value="g6s2">English</option>
                                        <option value="g6s3">Maths</option>
                                        <option value="g6s4">Science</option>
                                        <option value="g6s5">History</option>
                                        <option value="g6s6">Tamil</option>
                                        <option value="g6s7">French</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                </div>
                                <div class="col">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Student ID</label>
                                    <input type="text" v-model.trim="$v.stdId.$model" :class="{'is-invalid': validationStatus($v.stdId)}" class="form-control" placeholder="Ex: S00001" aria-label="Last name">
                                    <div v-if="!$v.stdId.required" class="invalid-feedback">Student ID is required.</div>
                                </div>
                                <div class="col">
                                </div>
                                <div class="col">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary"><i class="fa" aria-hidden="true"></i>Add</button>                  
                            <input v-on:click="clearForm" type="button" class="btn btn-outline-primary w-auto" value="Clear">
                    </form>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                
                
                <div class="d-flex flex-row justify-content-between mt-3 mb-4">
                    <h5>All Fee Payments</h5>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Student ID" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Student ID</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Fee</th>
                            <th scope="col">Month</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">S00001</th>
                            <td>Grade 6 Science</td>
                            <td>400.00</td>
                            <td>April</td>
                            <td>
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
    name: 'FeePayment',
    data: function() {
        return {
            stdId: ''
        }
    },
    validations: {
        stdId: {required}
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        submit: function() {
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return;
            alert('Data Submited')
        },
        clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        }
    }
}
</script>