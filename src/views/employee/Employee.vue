Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@rlvidanapathirana 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


asankagamage98
/
Shilpa-eims-frontend
Private
forked from dinethpiyumantha/Shilpa-eims-frontend
0
04
Code
Pull requests
Actions
Projects
Security
Insights
Shilpa-eims-frontend/src/views/employee/Employee.vue
@asankagamage98
asankagamage98 employee vue page udate
Latest commit bb29a6a 21 hours ago
 History
 2 contributors
@asankagamage98@dinethpiyumantha
78 lines (70 sloc)  3.2 KB
  
<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>All Emloyees</h4>
                
                <router-link to="/add-schedule">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new employee</button>
                </router-link>
                
                <div class="d-flex flex-row gap-5 mt-5 mb-4 justify-content-between">
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Day</label>
                        <div class="d-flex flex-row gap-2 w-100">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Date</label>
                        <div class="">
                            <input type="date" class="form-control" id="inputPassword">
                        </div>
                    </div>

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

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
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
