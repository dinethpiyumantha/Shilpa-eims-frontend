<template>
  <div>
        <div class="card">
            <div class="card-body">
                <h4>View Examination</h4>

                <div class="d-flex flex-row-reverse gap-5 mt-5 mb-4 justify-content-between">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>


<!-- Time scheduling view tporpose-->
                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ExamID</th>
                            <th scope="col">ExamName</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Type</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Term</th>
                            <th scope="col">Date</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            
                            <td>EX001</td>
                            <td>Sinhala Grade 6 Second Term</td>
                            <td>Sinhala </td>
                            <td>Online</td>
                            <td>6</td>
                            <td>Second Term</td>
                            <td>24-04-2021</td>
                            <td>08.30</td>
                            <td>10.30</td>
                            </tr>

                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>
                            
                            <tr>
                            
                            <td>EX002</td>
                            <td>English Grade 10 Second Term</td>
                            <td>English</td>
                            <td>Offline</td>
                            <td>8</td>
                            <td>Second Term</td>
                            <td>04-04-2021</td>
                            <td>11.30</td>
                            <td>12.30</td>
                            </tr>

                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>
                            <tr>
                            <td>EX003</td>
                            <td>History Grade 9 Third Term</td>
                            <td>History</td>
                            <td>Offline</td>
                            <td>9</td>
                            <td>Third Term</td>
                            <td>02-04-2021</td>
                            <td>02.30</td>
                            <td>05.30</td>
                            </tr>

                                <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                <button class="btn my-0 py-0"><i class="fa fa-trash"/></button>    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>