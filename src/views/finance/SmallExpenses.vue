<template>
  <div>
    <h4>Small Expenses</h4>
    <div class="card">
      <div class="card-body">
        <div class="card">
          <div class="card-header">Add a Small Expense</div>

          <form class="card-body" v-on:submit.prevent="submit">
            <div class="row mb-3">
              <div class="col">
                <label for="">Description</label>
                <input
                  type="text"
                  v-model.trim="$v.descript.$model"
                  :class="{ 'is-invalid': validationStatus($v.descript) }"
                  class="form-control"
                  placeholder="Ex: 'Chalk, Water Bill'"
                  aria-label="First name"
                />
                <div v-if="!$v.descript.required" class="invalid-feedback">
                  Description is required.
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="">Amount</label>
                <input
                  type="text"
                  v-model.trim="$v.amount.$model"
                  :class="{ 'is-invalid': validationStatus($v.amount) }"
                  class="form-control"
                  placeholder="Numbers only*"
                  aria-label="Last name"
                />
                <div v-if="!$v.amount.required" class="invalid-feedback">
                  Amount is required.
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-plus mr-3" aria-hidden="true"></i>Add Expense
            </button>
            <input
              v-on:click="clearForm"
              type="button"
              class="btn btn-outline-primary w-auto"
              value="Clear"
            />
          </form>
        </div>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-body">
        <div class="d-flex flex-row justify-content-between mt-3 mb-4">
          <h5>All Expenses</h5>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search expense"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <div class="mt-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">001</th>
                <td>Chalk</td>
                <td>12/02/2021</td>
                <td>500.00</td>
                <td>
                  <button class="btn my-0 py-0">
                    <i class="fas fa-edit" />
                  </button>
                  <button class="btn my-0 py-0">
                    <i class="fa fa-trash" />
                  </button>
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
import { required, numeric } from "vuelidate/lib/validators";
export default {
  name: "Small Expenses",
  data: function () {
    return {
      descript: "",
      amount: "",
      date: "", //Date().getDate()
    };
  },
  validations: {
    descript: { required },
    amount: { required, numeric },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit: function () {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      alert("Data Submited");
    },
    clearForm: function () {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>