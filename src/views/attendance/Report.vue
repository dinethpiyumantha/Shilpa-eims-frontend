<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Attendance Report</h5>
            <p class="card-text">This report shows the employees monthly attendance record over a period of time. The report represents the attendance data of an employee for each day for a whole month. ... The report also represents whether the employee was on leave for a particular leave along with the leave type.(**copy in google** )</p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
            <button type="button" class="btn btn-primary"><i class="fas fa-print"></i><span class="mx-3">Print Report</span></button>
        </div>
        <div class="card-footer text-muted">
            <test/>
        </div>
    </div>
</template>

<script>
import test from '../attendance/test'
export default {
    methods: {
        getReport: function() {
            this.$http.get('http://localhost:8000/api/attendance/repattendanceReport-pdf')
            .then(function (response) {
                console.log(response);
                // this.allItems = response.body.allClassrooms;
            });
        }
    },
    components:{
        'test' : test

    }
}
</script>


<style scoped>

</style>