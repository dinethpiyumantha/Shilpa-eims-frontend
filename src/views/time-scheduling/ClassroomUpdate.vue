<template>
  <div>
    <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
            </div>
            <div class="row">
            <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
            <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
            </div>
            <div class="row">
            <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
            </div>
            <div class="row">
            <div class="col-sm-9">
                Level 1: .col-sm-9
                <div class="row">
                <div class="col-8 col-sm-6">
                    Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                    Level 2: .col-4 .col-sm-6
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['classroom']
}
</script>

<style>

</style>