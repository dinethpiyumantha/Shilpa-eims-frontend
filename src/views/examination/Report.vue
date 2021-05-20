<template>
  <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h3 class="card-title">Generate Report about Examination</h3>
            <p class="card-text">Exams test your memory, life tests your learning; others will test your patience. <center>-Fennel Hudson-</center></p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
            <button type="button" class="btn btn-primary"><i class="fas fa-print"></i><span class="mx-3">Print Report</span></button>
        </div>
        <div class="card-footer text-muted">
            Last report generated 01 days ago.
        </div>
    </div>
</template>

<script>


export default {

    methods: {

        getReport: function() {

           window.open("http://127.0.0.1:8000/api/examReport/report-pdf", "_blank");

        }

    }

}
//

</script>



<style>

</style>

