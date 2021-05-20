<template>
<table>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td> {{item.Userid}} </td>
        <td>{{item.name}}</td>
        <td>{{item.Phone}}</td>
        <td>{{item.In}}</td>
        <td>{{item.Out}}</td>
        <td>{{item.Discreption}}</td>
        <td scope="col">
          <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
        </td>
        <td scope="col">
          <button class="btn my-0 py-0"><i class="fa fa-trash" @click="Delete($event)" v-bind:id="item.id"/></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    data() {
       return  {
           item: [],

       } 
    },
    created(){
        this.$http.get('http://localhost:8000/api/get/data').then(function(data){
            console.log(data)
        })
    }
}
</script>