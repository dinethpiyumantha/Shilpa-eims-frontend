<template>
  <div class="card text-center">
        <div class="card-header">
            Financial Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Institute Income Report</h5>
            <p class="card-text">The total income for the institute last month</p>
            <button type="button" @click="getFinanceReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
            <button type="button" class="btn btn-primary"><i class="fas fa-print"></i><span class="mx-3">Print Report</span></button>
        </div>
        <div class="card-footer text-muted">
        <br/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getFinanceReport: function() {
            window.open("http://127.0.0.1:8000/financial_report", "_blank");
        }
    }
}
</script>