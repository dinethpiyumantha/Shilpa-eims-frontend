<template>
    <div>
         
        <router-view/>

        <div class="card">
            <div class="card-body">
                <h4>
                    <span>Time Schedule</span>
                    <button title="Reload Classrooms" class="btn btn-text my-2 my-sm-0" @click="getAll()"><i class="fa fa-sync-alt"/></button>
                </h4>
                
                
                <router-link to="/add-schedule">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Create a Time Schedule</button>
                </router-link>
                
                <div class="d-flex flex-row gap-5 mt-5 mb-4 justify-content-between">
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Day</label>
                        <div class="d-flex flex-row gap-2 w-100">
                            <select v-model="filters.day" class="form-select" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Date</label>
                        <div class="">
                            <input v-model="filters.date" type="date" class="form-control text-uppercase" id="inputPassword">
                        </div>
                    </div>

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>


<!-- Time scheduling view tporpose-->
<!-- New Branch = dineth -->
                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Time</th>
                            <th scope="col">Teacher</th>
                            <th scope="col">Classroom</th>
                            <th scope="col">Type</th>
                            <th scope="col">Day</th>
                            <th scope="col">Date</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(schedule, index) in filterTimeSchedule" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{schedule.from + ' - ' + schedule.to}}</td>
                                <td>{{schedule.nameInitil}}</td>
                                <td>{{schedule.classid}}</td>
                                <td>{{schedule.type}}</td>
                                <td>{{schedule.day}}</td>
                                <td>{{schedule.spdate}}</td>
                            <td>
                                <router-link :to="'/schedule/edit/'+schedule.id">
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                </router-link>
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
    data() {
        return {
            schedules: [],
            filters: {
                day:'',
                date:'',
                search:''
            }
        }
    },
    validations: {

    },
    created() {
        this.$http.get('http://localhost:8000/api/timeschedule/relget')
            .then(function (response) {
                console.log(response);
                this.schedules = response.body.allSchedules;
        });
        // this.$http.get('http://localhost:8000/api/timeschedule/getall')
        //     .then(function (response) {
        //         console.log(response);
        //         this.schedules = response.body.allSchedules;
        // });
    },
    methods: {
        getAll: function() {
            this.$http.get('http://localhost:8000/api/timeschedule/getall')
            .then(function (response) {
                console.log(response);
                this.schedules = response.body.allSchedules;
            });
        },
    },
    computed: {
        filterTimeSchedule: function() {
            if(this.filters.day == 'All') {
                return this.schedules;
            } else {
                return this.schedules.filter((schedule)=> {
                    return schedule.day.match(this.filters.day);
                });
            }
        },
    }
}
</script>

<style scoped>

</style>