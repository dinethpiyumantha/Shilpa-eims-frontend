<template>
    <div> 
        <div class="card">
            <div class="card-body">

                <h4>Edit Employee</h4>
                    <div class="row g-3 align-items-center d-flex flex-row-reverse">
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="EMP1021">
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">EmployeeID</label>
                            </div>   
                    </div>

                    <div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name with initial</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" ">
                        </div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">full Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=" ">
                        </div>
                    </div>


                     <div>
                        <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>



                     <div>
                            <div class="row my-3">
                                    <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">City</label>
                                        <input type="text" class="form-control" placeholder=" " aria-label="First name">
                                    </div>

                                    <div class="col ">
                                        <label for="formGroupExampleInput" class="form-label">Join Date </label>
                                        <input type="date" class="form-control" placeholder=" " aria-label="Last name">
                                    </div>
                            </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Land Number</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">E mail</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">XXXX</option>
                                    </select>
                            </div>
                        </div>
                     </div>



                     
                     <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">DOB</label>
                                <input type="date" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">NIC</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>


                      <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Deartment</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Speciality</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>
                    
                    <br>
                    <br>

                    <h4> Emergency Information </h4>

                     <div class="my-3">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Gardian's name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" ">
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Gardian's Type</label>
                            <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">Parent</option>
                                        <option value="2">Brothers</option>
                                        <option value="3">others</option>
                                        </select>                        
                        </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">City</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>

                     <div class="my-5 d-flex flex-row-reverse bd-highlight">
                         <button type="submit" class="btn btn-primary btn-dark">SUBMIT</button>
                     </div>


         
         
             </div>
        </div>
    </div>
</template>