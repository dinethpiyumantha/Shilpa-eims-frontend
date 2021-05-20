<template>
    <div>
        <h3>Home</h3>
    </div>
</template>

<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators' //Import Validator 

export default {
    name: 'home',
    data: function() { //data()
        return({
            items: { 
                asankaText: '',
                lakshanText: '', 
                sandaniText: '' 
            },
        });
    },
    methods: {
        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        // if(validation != "undefined") {
        //     return validation.$error;
        // } else {
        //     return false;
        // }
        submitForm() {
            if(this.items.asankaText == '' || this.items.sandaniText == '') {
                swal("Error", "Fill required fields !", "error");
            } else {
                swal("Success", "Completed !", "success");
            }
        }
    },
    validations: {
        items: {
            asankaText: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(10)
            },
            sandaniText: {
                required,
                sameAsPassword: sameAs('asankaText')
            }
        }
    }
}
</script>

<style>

</style>