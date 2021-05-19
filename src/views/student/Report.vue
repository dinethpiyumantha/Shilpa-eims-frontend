<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Student Report</h5>
            <p class="card-text"> Generate student report to get an idea about institute </p>
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
           
            window.open("http://localhost:8000/api/student/report-pdf", "_blank");
        }
    }
}
</script>


<style scoped>
</style>