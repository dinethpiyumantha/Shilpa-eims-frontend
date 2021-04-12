<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Time Schedule and Classroom Report</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit aut sequi libero ipsum sunt, voluptatum dignissimos harum ratione voluptatem maiores. Ad quam optio accusantium officia fuga quis pariatur minima totam temporibus nihil iure mollitia debitis quidem itaque facilis nam at rem ipsa quaerat eaque fugiat perferendis, magni cum? Culpa?</p>
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
                // this.allItems = response.body.allClassrooms;
            });
        }
    }
}
</script>


<style scoped>
</style>