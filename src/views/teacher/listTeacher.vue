<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4> Teacher List </h4>

                <div>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control w-75 p-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                
                
                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Teacher ID</th>
                            <th scope="col">Name with initial</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Address Line1</th>
                            <th scope="col">Address Line2</th>
                            <th scope="col">City</th>
                            <th scope="col">Join Date</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">TE0001</th>
                            <td>Perera N.C</td>
                            <td>Nimesh Chamil Perera</td>
                            <td>No 621</td>
                            <td>2nd Lane</td>
                            <td>Hasalaka</td>
                            <td>12 May 2021</td>
                            <td>
                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <th scope="row">TE0002</th>
                            <td>Disanayaka A.C</td>
                            <td>Anushka Chandima Dissanayaka</td>
                            <td>No 91</td>
                            <td>Kurugala</td>
                            <td>Padukka</td>
                            <td>10 March 2019</td>
                            <td>
                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <th scope="row">TE0003</th>
                            <td>Gamage T.M</td>
                            <td>Thisaru Madushan Gamage</td>
                            <td>No 02</td>
                            <td>Gammana Road</td>
                            <td>Meepe</td>
                            <td>20 April 2021</td>
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