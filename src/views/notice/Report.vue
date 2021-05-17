<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Notifications Report</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit aut sequi libero ipsum sunt, voluptatum dignissimos harum ratione voluptatem maiores. Ad quam optio accusantium officia fuga quis pariatur minima totam temporibus nihil iure mollitia debitis quidem itaque facilis nam at rem ipsa quaerat eaque fugiat perferendis, magni cum? Culpa?</p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
            
        </div>
        <div class="card-footer text-muted">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getReport: function() {
          
                window.open("http://localhost:8000/api/notification/show-report", "_blank");
                //console.log(response);
        }
    }
}
</script>


<style scoped>
</style>