<template>
  <div>
      <div class="row">
           <div  class="col-4">
                <button type="button" class="btn btn-secondary">Student</button>
                 <button type="button" class="btn btn-secondary">Teacher</button>
                <button type="button" class="btn btn-secondary">Employee</button>
           </div>

           <div  class="col-8">
                     <!-- <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search classroom" aria-label="Search">
                        <button  type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form> -->
           </div>        
    </div>
    <table class="table table-hover" style="margin:20px 10px 15px 0px">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Id</th>
      <th scope="col">Name</th>
      <!-- <th scope="col">Subject</th> -->
      
      <th scope="col">In-Time</th>
      <!-- <th scope="col">Out-Time</th> -->
      <th scope="col">Description</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
      
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in items" :key="item.id">
        <td> {{item.id}} </td>
        <td> {{item.Userid}} </td>
        <td>{{item.name}}</td>
        <!-- <td>{{item.subject}}</td> -->
        
        <td>{{item.In}}</td>
        <!-- <td>{{item.Out}}</td> -->
        <td>{{item.Discreption}}</td>
        <td scope="col">

            <router-link :to="'/attendance-update/'+item.id">
              <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
            </router-link>

        </td>
        <td scope="col">
          <button class="btn my-0 py-0"><i class="fa fa-trash" @click="Delete($event)" v-bind:id="item.id"/></button>
        </td>
      </tr>
    </tbody>
  </table>
      
  </div>
</template>



<script>
export default{

  data() {
    return {
      search:'',
      items:[],
      resources: [],
      search:''
    }
  },

  created() {
    this.$http.get('http://localhost:8000/api/attendance/getall')
        .then(function (response) {
            console.log(response);
            this.items = response.body.allData;
        });
  },
    
  methods: {
      Delete(event) {
         this.$http.delete('http://localhost:8000/api/delete/attendance/'+event.target.id)
         .then(function (response){
          var position = this.items.findIndex(function (element){
            return element.id==event.target.id;
        });
        this.items.splice(position,1)
      });
      
    
      },
      // filterAttendance() {
      //   return this.items.filter((item)=> {
      //     return item.name.match(this.search);
      //   })
      // }


  }
}
</script>

<style>

</style>