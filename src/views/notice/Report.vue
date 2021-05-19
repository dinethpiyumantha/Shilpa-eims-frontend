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
        <div>
              <section>
                        <div class="container">
                            <form action="https://formspree.io/f/xzbyeylr" method="POST" id="my-form">

                            <div class="form-group">
                                <label for="firstName"> First Name</label>
                                <input type="text" id="firstName" name="firstName">
                            </div>

                            <div class="form-group">
                                <label for="latsName">Last Name</label>
                                <input type="text" id="lastName" name="lastName">
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email">
                            </div>

                            <div class="form-group">
                                <label for="massage">Massage</label>
                                <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                            </div>

                            <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div id="status"></div>
                        </section>  
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


<style>
section {
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000010;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
}
.form-group {
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}

textarea {
  resize: vertical;
}
button[type="submit"] {
  width: 100%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  font-family: "Montserrat";
  color: rgb(27, 166, 247);
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s ease background-color;
}
button[type="submit"]:hover {
  background-color: rgb(214, 226, 236);
}
#status {
  width: 90%;
  max-width: 500px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  border-radius: 8px;
}
#status.success {
  background-color: rgb(211, 250, 153);
  animation: status 4s ease forwards;
}
#status.error {
  background-color: rgb(250, 129, 92);
  color: white;
  animation: status 4s ease forwards;
}
@keyframes status {
  0% {
    opacity: 1;
    pointer-events: all;
  }
  90% {
    opacity: 1;
    pointer-events: all;
  }
  100% {
    opacity: 0;
    pointer-events: none;
  }
}
</style>