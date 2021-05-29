<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>View Examination Details </h4>

                <router-link to="/add-examination">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new exams</button>
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
                            <th scope="col">Exam Name</th>
                            <th scope="col">Exam ID </th>
                            <th scope="col"> SUB</th>
                            <th scope="col">Grade</th>
                            <th scope="col"> Term</th>
                            <th scope="col">Date</th>
                            <th scope="col">Start</th>
                            <!-- <th scope="col">End</th>
                            <th scope="col">Note</th> -->

                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(exams, index) in filterexams" :key="index">
                                <th scope="row">{{exams.id}}</th>
                                <td>{{exams.examName}}</td>
                                <td>{{exams.examId}}</td>
                                <td>{{exams.subject}}</td>
                                <td>{{exams.grade}}</td>
                                <td>{{exams.term}}</td>
                                <td>{{exams.date}}</td>
                                <td>{{exams.start}}</td>
                                
                                <td>

                                    <router-link :to="'/editexamination/'+exams.id">
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

                                    <button class="btn my-0 py-0" @click="deleteItem(exams)"><i class="fa fa-trash"/></button>
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
//
export default {
    data() {
        return {
            allexams: [],
            search: ''
        }
    },
    created() {
        this.$http.get('http://localhost:8000/api/examgetall/getall')
        .then(function (response) {
            console.log(response);
            this.allexams = response.body.exams;
        });
    },
    //Delete
    methods: {
        deleteItem(exams) {
            console.log(exams);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deleteexams/" + exams.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(exams.id + " Data successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },
//Search
    computed: {
        filterexams: function() {
            return this.allexams.filter((item)=> {
                return item.examName.match(this.search)  ;
            })
        },
    }
}
</script>

<style scoped>
</style>