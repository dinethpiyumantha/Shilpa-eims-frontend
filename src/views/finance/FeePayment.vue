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
                                        <select class="form-select" v-model.trim="$v.grade.$model" :class="{'is-invalid': validationStatus($v.grade)}" aria-label="Default select example">
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
                                            <option value="course">Courses</option>
                                            <option value="other">Others</option>
                                        </select>
                                        <div v-if="!$v.grade.required" class="invalid-feedback">Grade is required.</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="">Subject</label>
                                    <input type="text" v-model.trim="$v.subject.$model" :class="{'is-invalid': validationStatus($v.subject)}" class="form-control" aria-label="Last name">
                                    <div v-if="!$v.subject.required" class="invalid-feedback">Subject is required.</div>
                                </div>
                                <div class="col">
                                </div>
                                <div class="col">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Student ID</label>
                                    <input type="text" v-model.trim="$v.stdid.$model" :class="{'is-invalid': validationStatus($v.stdid)}" class="form-control" placeholder="Ex: S00001" aria-label="Last name">
                                    <div v-if="!$v.stdid.required" class="invalid-feedback">Student ID is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Fees</label>
                                    <input type="text" v-model.trim="$v.amount.$model" :class="{'is-invalid': validationStatus($v.amount)}" class="form-control" placeholder="Numbers only" aria-label="Last name">
                                    <div v-if="!$v.amount.required" class="invalid-feedback">Fee is required.</div>
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
                    <h5>All Fee Payments
                        <button title="Reload Fees" class="btn btn-text my-2 my-sm-0" @click="getAllFees()"><i class="fa fa-sync-alt"/></button>
                    </h5>
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
                            <tr v-for="(fee, index) in filterFee" :key="index">
                                <td>{{ fee.stdid }}</td>
                                <td>{{ "Grade " + fee.grade + " - " + fee.subject }}</td>
                                <td>{{ fee.amount + ".00" }}</td>
                                <td>{{ fee.created_at|formatMonth}}</td>
                                <td>
                                <button class="btn my-0 py-0" @click="deleteFee(fee)"><i class="fa fa-trash"/></button>
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
import { required, numeric } from 'vuelidate/lib/validators'
export default {
    name: 'FeePayment',
    data: function() {
        return {
            stdid: "",
            amount: "",
            grade: "",
            subject: "",
            allFees: [],
            search: ""
        };
    },

    created() {
    this.$http
      .get("http://localhost:8000/api/getallfees")
      .then(function (response) {
        this.allFees = response.body.Fees;
      });
    },

    validations: {
        stdid: {required},
        amount: {required, numeric},
        grade: {required},
        subject: {required}

    },

    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },

        getAllFees: function() {
            this.$http.get('http://localhost:8000/api/getallfees')
            .then(function (response) {
                this.allFees = response.body.Fees;
            });
        },

        submit: function () {
        this.$v.$touch();
        if (this.$v.$pendding || this.$v.$error) {
            swal("Rejected", "Fill all the required fields correctly !", "error", {
            button: "Got It!",
            });
            return;
        } else {
            const fee = {
            'stdid': this.stdid,
            'grade': this.grade,
            'subject': this.subject,
            'amount': this.amount
            };

            this.$http
            .post("http://localhost:8000/api/addfee", fee)
            .then(function (response) {
                console.log(response);
            });

            swal("Successful", " fee successfully added !", "success", {
            button: "Got It!",
            });
            return;
        }
        },

        clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        },

        deleteFee(fee) {
            console.log(fee);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deletefee/" + fee.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(fee.id + " Small expense successfully deleted !", {
                icon: "success",
                });
            }
            });
            }
        },

        computed: {
        filterFee: function() {
            return this.allFees.filter((fee)=> {
                return fee.subject.match(this.search);
            })
        }
    }

}
</script>