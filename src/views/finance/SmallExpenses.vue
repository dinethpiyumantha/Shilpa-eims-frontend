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
                  v-model.trim="$v.description.$model"
                  :class="{ 'is-invalid': validationStatus($v.description) }"
                  class="form-control"
                  placeholder="Ex: 'Chalk, Water Bill'"
                  aria-label="First name"
                />
                <div v-if="!$v.description.required" class="invalid-feedback">
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
          <h5>
          All Expenses
          <button title="Reload Expenses" class="btn btn-text my-2 my-sm-0" @click="getAllExpenses()"><i class="fa fa-sync-alt"/></button>
          </h5>
          <form class="form-inline my-2 my-lg-0">
            <input
              v-model="search"
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
              <tr v-for="(expense, index) in filterExpense" :key="index">
                <th scope="row">{{ expense.id }}</th>
                <td>{{ expense.description }}</td>
                <td>{{ expense.created_at|formatDate}}</td>
                <td>{{ expense.amount }}</td>
                <td>
                  <button class="btn my-0 py-0" @click="deleteExpense(expense)"><i class="fa fa-trash"/></button>
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

  name: "SmallExpenses",
  data: function () {
    return {
      description: "",
      amount: "",
      allExpenses: [],
      search: ""
    };
  },

  created() {
    this.$http
      .get("http://localhost:8000/api/getallexpenses")
      .then(function (response) {
        this.allExpenses = response.body.Expenses;
      });
  },

  validations: {
    description: { required },
    amount: { required, numeric },
  },

  methods: {

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    getAllExpenses: function() {
            this.$http.get('http://localhost:8000/api/getallexpenses')
            .then(function (response) {
                this.allExpenses = response.body.Expenses;
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
        const expense = {
          'description': this.description,
          'amount': this.amount
        };

        this.$http
          .post("http://localhost:8000/api/addexpense", expense)
          .then(function (response) {
            console.log(response);
          });

        swal("Sussessfull", " expense successfully added !", "success", {
          button: "Got It!",
        });
        return;
      }
    },

    clearForm: function () {
      Object.assign(this.$data, this.$options.data.call(this));
    },

    deleteExpense(expense) {
      console.log(expense);
      swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      })
      .then((willDelete) => {
      if (willDelete) {
          this.$http.delete("http://localhost:8000/api/deleteexpense/" + expense.id).then(
              function(response) {
                  console.log(response);
              }
          );
          swal(expense.id + " Small expense successfully deleted !", {
          icon: "success",
          });
      }
      });
    }
  },

  computed: {
    filterExpense: function() {
        return this.allExpenses.filter((expense)=> {
            return expense.description.match(this.search);
        })
    }
  }
};
</script>