<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>Create a Time Schedule</h4>
                


                <div class="d-flex flex-row gap-5 mt-4">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Normal Schedule
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Special Schedule
                        </label>
                    </div>
                </div>



                <div class="d-flex flex-row justify-content-between my-4">
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Special Date</label>
                        <div class="">
                            <input type="date" class="form-control" id="inputPassword">
                        </div>
                    </div>
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Time Period</label>
                        <div class="d-flex flex-row gap-2">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>From</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>

                            <select class="form-select" aria-label="Default select example">
                            <option selected>To</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Day</label>
                        <div class="d-flex flex-row gap-2">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="d-flex flex-row justify-content-between">
                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Teacher</label>
                        <div class="d-flex flex-row gap-2">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row gap-3">
                        <label for="inputPassword" class="col-form-label">Subject</label>
                        <div class="d-flex flex-row gap-2">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="row w-100 mx-auto">
                    <div class="d-flex flex-column my-4">
                    <label for="inputPassword" class="col-form-label">Subject</label>
                    <div class="w-50">
                        <select class="form-select bg-primary text-white" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                </div>
                

                <div class="row">
                    <input type="submit" class="btn btn-primary w-25" value="Add Time Schedule">
                </div>

            </div>
        </div>
    </div>
</template>