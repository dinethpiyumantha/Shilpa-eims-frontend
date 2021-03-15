<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>Time Schedule</h4>
                
                <router-link to="/add-schedule">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Create a Time Schedule</button>
                </router-link>
                
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
                            <tr>
                            <th scope="row">1</th>
                            <td>10:30 - 12-30</td>
                            <td>Sahan Herath</td>
                            <td>A1</td>
                            <td>Normal</td>
                            <td>Sunday</td>
                            <td>12 May 2021</td>
                            <td>
                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
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
</script>

<style scoped>

</style>