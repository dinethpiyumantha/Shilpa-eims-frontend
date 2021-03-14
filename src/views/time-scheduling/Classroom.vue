<template>
    <div>
        <h4>Classroom Management</h4>
        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-header">
                        Add a Classroom
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col">
                                <label for="">Classroom ID</label>
                                <input type="text" class="form-control" placeholder="Ex: 'A001'" aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="">Capacity</label>
                                <input type="text" class="form-control" placeholder="Numbers only*" aria-label="Last name">
                            </div>
                            <div class="col">
                                <label for="">Capacity</label>
                                <div class="d-flex">
                                    <input type="text" class="form-control mr-3" placeholder="Width" aria-label="Last name">
                                    <input type="text" class="form-control" placeholder="Length" aria-label="Last name">
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-3" aria-hidden="true"></i>Add Classroom</button>                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>