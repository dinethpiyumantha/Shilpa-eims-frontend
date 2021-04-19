<template>
  <div class="row">
   
    <EditNotice class="col-6"/>
    <AddNotice class="col-6"/>
  </div>
</template>

<script>
import AddNotice from '../notice/AddNotice'
import EditNotice from '../notice/EditNotice'
export default {
    components : {
    'AddNotice' : AddNotice,
    'EditNotice' : EditNotice
  }
    
}
</script>

<style>

</style>