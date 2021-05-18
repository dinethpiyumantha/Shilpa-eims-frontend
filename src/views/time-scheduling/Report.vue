<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Time Schedule and Classroom Report</h5>
            <p class="card-text">This report genarate about classrouum and timescheduling details</p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
            <button type="button" class="btn btn-primary"><i class="fas fa-print"></i><span class="mx-3">Print Report</span></button>
        </div>
        <div class="card-footer text-muted">
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        getReport: function() {
            this.$http.get('http://localhost:8000/api/timeandclass/report-pdf')
            .then(function (response) {
                console.log(response);
            });
        }
    }
}
</script>


<style scoped>
</style>