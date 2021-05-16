<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4> Student List </h4>

                <router-link to="add-student">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new Student</button>
                </router-link>

                <div class="mt-3">
                    <form class="form-inline my-2 my-lg-0">
                        <input v-model="search" class="form-control w-75 p-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                
                
                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address Line1</th>
                            <th scope="col">Address Line2</th>
                            <th scope="col">City</th>
                            <th scope="col">Join Date</th>
                            <th scope="col">Mobile Number</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(student, index) in filterStudents" :key="index">
                                <th scope="row">{{student.id}}</th>
                                <td>{{student.nameFull}}</td>
                                <td>{{student.addressL1}}</td>
                                <td>{{student.addressL2}}</td>
                                <td>{{student.city}}</td>
                                <td>{{student.joinDate}}</td>
                                <td>{{student.mNumber}}</td>
                                <td>

                                    <router-link :to="'/Edit-Student/'+student.id">
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

                                    <button class="btn my-0 py-0" @click="deleteItem(student)"><i class="fa fa-trash"/></button>
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
export default {
    data() {
        return {
            allStudents: [],
            search: ''
        }
    },
    created() {
        this.$http.get('http://localhost:8000/api/getallstudents')
        .then(function (response) {
            console.log(response);
            this.allStudents = response.body.Students;
        });
    },

    //Delete
    methods: {
        deleteItem(student) {
            console.log(student);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/student/delete/" + student.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(student.id + " Data successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },

//Search
    computed: {
        filterStudents: function() {
            return this.allStudents.filter((item)=> {
                return item.nameFull.match(this.search) || item.addressL1.match(this.search) || item.addressL2.match(this.search) || item.city.match(this.search) || item.joinDate.match(this.search) || item.joinDate.match(this.search) || item.mNumber.match(this.search) ;
            })
        },
    }
}
</script>

<style scoped>
</style>