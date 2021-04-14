<template>
  <div class="toast">
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
        <div id="liveToast" class="toast " :class="{'hide': this.dialog}" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <!-- <img src="..." class="rounded me-2" alt="..."> -->
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body"> {{msg}} </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data: function() {
        return {
            msg:'',
            dialog: true
        }
    },
    methods: {
        showToast: function(message) {
            this.msg=message;
            dialog=false;
            setTimeout(this.hideToast, 3000);
        },
        hideToast: function() {
            dialog=true;
        }
    }
}
</script>

<style>

</style>