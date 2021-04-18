<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>All Emloyees</h4>
                
                <router-link to="add-employee">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new employee</button>
                </router-link>
                
                <div class="d-flex flex-row gap-5 mt-5 mb-4 justify-content-between">
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Day</label>
                        <div class="d-flex flex-row gap-2 w-100">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Date</label>
                        <div class="">
                            <input type="date" class="form-control" id="inputPassword">
                        </div>
                    </div>

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

                <div class="mt-3">
                    <table class="table table-hover overflow-auto w-100">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name with Initial</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Address line1</th>
                            <th scope="col">Address line2</th>
                            <th scope="col">city of emlpoyee</th>
                            <th scope="col">Join date</th>
                            <th scope="col">Mobile number</th>
                            <!-- <th scope="col">Land number</th> -->
                            <!-- <th scope="col">Email</th> -->
                            <th scope="col">Gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">NIC</th>
                            <!-- <th scope="col">Department</th>
                            <th scope="col">Special</th> -->
                            <!-- <th scope="col">Gardian name</th>
                            <th scope="col">Gardian type</th>
                            <th scope="col">address3</th>
                             <th scope="col">address4</th>
                            <th scope="col">city of gardian</th>
                            <th scope="col">Gardian number</th> -->
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(employees, index) in allEmloyees" :key="index">
                                <th scope="row">{{employees.id}}</th>
                                <td>{{employees.nameInitial}}</td>
                                <td>{{employees.fullName}}</td>
                                <td>{{employees.address1}}</td>
                                <td>{{employees.address2}}</td>
                                <td>{{employees.city}}</td>
                                <td>{{employees.date}}</td>
                                <td>{{employees.Mnumber}}</td>
                                <td>{{employees.gender}}</td>
                                <td>{{employees.dob}}</td>
                                <td>{{employees.nic}}</td>
                                <!-- <td>{{employees.department}}</td>
                                <td>{{employees.special}}</td> -->
                                <td>
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    <button class="btn my-0 py-0" @click="deleteItem(employees)"><i class="fa fa-trash"/></button>
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
    export default{
        data(){
            return {

                allEmloyees:[]
            }
    },
        created(){
              this.$http.get('http://localhost:8000/api/employees/getall').then
              (function(response){
                
                console.log(response);
                this.allEmloyees = response.body.employees;

                });
        },

        methods:{
        deleteItem(employees) {
            console.log(employees);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/employees/delete/" + employees.id).then(
                    function(response) {
                        
                        console.log(response);
                    }
                );
                swal(employees.id + " Employee successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    }
    }       
        

</script>

<style scoped>

</style>