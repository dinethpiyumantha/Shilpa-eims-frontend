<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>All Emloyees</h4>
                
                <router-link to="add-employee">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new employee</button>
                </router-link>
                
               
                    <div class="mt-3">
                    <form class="form-inline my-2 my-lg-0">
                        <input v-model="search" class="form-control w-75 p-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>

                <div class="mt-3">
                    <table class="table table-hover overflow-auto w-100">
                        <thead>
                            <tr>
                            <th scope="col">Emp ID</th>
                            <th scope="col">Name with Initial</th>
                            <!-- <th scope="col">Full Name</th> -->
                            <th scope="col">Address line1</th>
                            <th scope="col">Address line2</th>
                            <th scope="col">city</th>
                            <th scope="col">Join date</th>
                            <th scope="col">Mobile number</th>
                            <!-- <th scope="col">Land number</th> -->
                            <!-- <th scope="col">Email</th> -->
                            <!-- <th scope="col">Gender</th> -->
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
                            <tr v-for="(employees, index) in filterEmployees" :key="index">
                                <th scope="row">{{employees.id}}</th>
                                <td>{{employees.nameInitial}}</td>
                                <!-- <td>{{employees.fullName}}</td> -->
                                <td>{{employees.address1}}</td>
                                <td>{{employees.address2}}</td>
                                <td>{{employees.city}}</td>
                                <td>{{employees.date}}</td>
                                <td>{{employees.Mnumber}}</td>
                                <!-- <td>{{employees.gender}}</td> -->
                                <td>{{employees.dob}}</td>
                                <td>{{employees.nic}}</td>
                                <!-- <td>{{employees.department}}</td>
                                <td>{{employees.special}}</td> -->
                                <td>
                                    <router-link :to="'/Edit-Employee/'+employees.id ">
                                            <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

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

                 allEmployees:[],
                 search: ''
            }
         },


        created(){
              this.$http.get('http://localhost:8000/api/employees/getall').then
              (function(response){
                
                console.log(response);
                this.allEmployees = response.body.employees;

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
            },
        

        //Search
            computed: {
                filterEmployees: function() {
                return this.allEmployees.filter((items)=> {
                    return   items.nameInitial.match(this.search) || 
                             items.address1.match(this.search) || 
                             items.address2.match(this.search) || 
                             items.city.match(this.search) || 
                             items.date.match(this.search) || 
                             items.Mnumber.match(this.search );
                })
            }
        }
    }
      
        

</script>

<style scoped>

</style>