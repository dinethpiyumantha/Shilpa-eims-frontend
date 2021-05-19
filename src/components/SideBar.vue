<template>
    
<div class="accordion col-2 m-0 p-0 bg-white" data-bs-spy="scroll" id="accordionExample">
  <nav class="navbar navbar-light m-0 p-0 w-100">
    <a class="navbar-brand text-centre  m-0 p-3 w-100" href="#">
      <img :src="require('../assets/logo.png')" height="40" alt="vgjvjhvj"/>
    </a>
  </nav>

  <div class="accordion-item">
    
    <router-link to="/home">
    <button class="btn btn-white w-100 rounded-0 text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </button>
    </router-link>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i class="fas fa-user-graduate"></i>
        <span>Students</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/student"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student</button></router-link>
          <router-link to="/add-student"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Student</button></router-link>
          <router-link to="/studentsubject"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student Subject</button></router-link>
          <router-link to="/subject"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Subject</button></router-link>
          <router-link to="/student-report"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        
        </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i class="fas fa-chalkboard-teacher"></i>
        <span>Teachers</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">All Students</button>
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Students</button>
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student Report</button>
      </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          <i class="fas fa-user-tie"></i>
          <span>Employees</span>
        </button>
      </h2>

      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/employees"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Employees</button></router-link>
          <router-link to="/add-employee"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Employees</button></router-link>
          <router-link to="/report-employee"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          <i class="fas fa-clock"></i>
          <span>Time Schedule</span>
        </button>
      </h2>

      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/schedule"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Time Scheduling</button></router-link>
          <router-link to="/classroom"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Classroom</button></router-link>
          <router-link to="/time-class-report"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          <i class="fas fa-pen-nib"></i>
          <span>Examinations</span>
        </button>
      </h2>

      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/examination"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Examination</button></router-link>
          <router-link to="/add-examination"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Examination</button></router-link>
          <router-link to="/examination-report"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          <i class="fas fa-user-check"></i>
          <span>Attendance</span>
        </button>
      </h2>

      <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">All Students</button>
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Students</button>
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student Report</button>
        </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingEight">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          <i class="fas fa-bell"></i>
          <span>Notifications</span>
        </button>
      </h2>

      <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">All Students</button>
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Students</button>
          <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student Report</button>
        </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseEight">
        <i class="fas fa-coins"></i>
        <span>Finance</span>
      </button>
    </h2>

    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">All Students</button>
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Students</button>
        <button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student Report</button>
      </div>
    </div>
  </div>

</div>
  

</template>

<script>

</script>


<style scoped>
.navbar-brand{
  text-align: center;
}
.accordion-button{
    padding: 15px 10px;
    border: 0;
    outline: none;
}
.accordion-body,.accordion-collapse{
    padding: 0;
    border: 0;
}
i{
  width: 25px;
  margin: 0px 10px 0px 5px;
}
.btn i{
  width: 25px;
  margin: 0px 5px 0px 5 px;
}
.wid{
  height: 500px;
}
</style>