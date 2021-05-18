
<template>
<!-- TEST INT -->
    <div class="model-popup">
        <div class="card">
            <router-link to="/classroom">
                <button class="btn btn-outline-primary mt-3 ml-3"><i class="fas fa-chevron-left mx-2"></i> Back</button>
            </router-link>

            <h4 class="mt-4 ml-4">Update Classroom</h4>
            <div class="card-body">
                <div>
                    <form class="card-body" v-on:submit.prevent="submit">
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Classroom ID</label>
                                    <input type="text" v-model.trim="$v.classId.$model" :class="{'is-invalid': validationStatus($v.classId)}" class="form-control text-uppercase" placeholder="Ex: 'A001'" aria-label="First name">
                                    <div v-if="!$v.classId.required" class="invalid-feedback">Classroom ID is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Capacity</label>
                                    <input type="text" v-model.trim="$v.capacity.$model" :class="{'is-invalid': validationStatus($v.capacity)}" class="form-control" placeholder="Numbers only*" aria-label="Last name">
                                    <div v-if="!$v.capacity.required" class="invalid-feedback">Student Capacity is required.</div>
                                </div>
                                <div class="col">
                                    <label for="">Area (Ft & in)</label>
                                    <div class="d-flex">
                                        <input type="text" v-model.trim="$v.width.$model" :class="{'is-invalid': validationStatus($v.width)}" class="form-control mr-3" placeholder="Width" aria-label="Last name">
                                        <input type="text" v-model.trim="$v.length.$model" :class="{'is-invalid': validationStatus($v.length)}" class="form-control" placeholder="Length" aria-label="Last name">
                                       
                                    </div>
                                </div>
                            </div>


<!-- TAGS -->
                            <div class="row mb-3">
                                <div class="col">
                                    <label for="">Resources</label>
                                    <div>
                                        <input type="text" class="form-control key-press-input" v-model="tagValue" @keyup.space="addTag" placeholder="Ex: 'Projector', 'AC' ...">
                                        <div @click="addTag" class="key-press alert alert-secondary border rounded"><i class="fas fa-keyboard"></i> <span>SPACEBAR</span></div>
                                    </div>

                                    <div class="d-flex flex-wrap flex-row gap-2 mt-2 mb-2">
                                        <div class="tag bg-secondary text-white" v-for="(tag, index) in resources" :key="'tag'+index">
                                            <small>{{ tag }}</small>
                                            <span @click="removeTag(index)" ><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary"><i class="fa fa-save mr-3" aria-hidden="true"></i>Update</button>                  
                            <input v-on:click="clearForm" type="button" class="btn btn-outline-primary w-auto" value="Clear">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { required, numeric, decimal } from 'vuelidate/lib/validators'
import ClassroomUpdate from './ClassroomUpdate'

export default {
    name: 'Classroom',
    data: function() {
        return {
          id:'',
          classId: '',
          capacity: '',
          width: '',
          length: '',
          tagValue: '',
          resources: [],
          item: [],
          allItems: [],
          deleteBtn: false,
          search:'',
          isResEmpty: false,
          showPopup: false,
          updatableItem: {
              classId: '',
              capacity: '',
              width: '',
              length: '',
              resources: []
          },
        }
    },
    components: {
        'classroom-upadate':ClassroomUpdate
    },
    created() {
        this.$http.get('http://localhost:8000/api/classrooms/get/'+this.$route.params.id)
        .then(function (response) {
            console.log(response);
            this.item = response.body.classroom;
            this.classId = response.body.classroom.cid;
            this.capacity = response.body.classroom.capacity;
            this.width = response.body.classroom.width;
            this.length = response.body.classroom.length;
            this.resources = response.body.classroom.resources.slice(0, -1).split(" , ");
            this.id = response.body.classroom.id;
        });
    },
    validations: {
        classId: {required},
        capacity: {required, numeric},
        width: {decimal},
        length: {decimal}
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },
        getAll: function() {
            this.$http.get('http://localhost:8000/api/classrooms/getall')
            .then(function (response) {
                // console.log(response);
                this.allItems = response.body.allClassrooms;
            });
        },
        submit: function() {
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) {
                swal("Rejected","Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                }); 
                return;
            }
            else {
                const classroom = {
                    'id':this.id,
                    'classId': this.classId,
                    'capacity': this.capacity,
                    'width': (this.width=="") ? 0 : this.width,
                    'length': (this.length=="") ? 0 : this.length,
                    'resources': this.arrayToString(this.resources)
                }
                
                if(!this.isResourcesFull) {
                    classroom['resources'] = 'null';
                }

                this.$http.put('http://localhost:8000/api/classroom/edit/'+this.id, classroom).then(function (response) { 
                    console.log(response);
                });

                swal("Sussessfull", this.classId+" classroom successfully updated !", "success");
                this.$router.push({ path: '/classroom' })
                this.getAll();
            }
        },
        clearForm: function() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        addTag: function() {
            if(!this.tagValue == ''){
                this.resources.push(this.tagValue);
            }
            this.tagValue = '';
            isResourcesFull();
        },
        removeTag: function(index) {
            this.resources.splice(index, 1);
            isResourcesFull();
        },
        arrayToString: function(array) {
            var str=''
            array.forEach(element => {
                str+=element+', '
            });
            return str;
        },
        deleteItem(item) {
            console.log(item);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8000/api/deleteclassroom/" + item.id).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(item.cid + " classroom successfully deleted !", {
                icon: "success",
                });
                
                this.allItems.splice((this.allItems.findIndex((e) => e === item)), 1); //Virtualy delete from the array
            }
            });
        },
        updateItem(item) {
            this.showPopupWindow();
            this.updatableItem.classId = item.cid;
            this.updatableItem.capacity = item.capacity;
            this.updatableItem.width = item.width;
            this.updatableItem.length = item.length;
            this.updatableItem.resources = item.resources;
        },
        showPopupWindow() {
            this.showPopup = (this.showPopup===true) ? false : true;
        }
    },
    computed: {
        filterClassrooms: function() {
            return this.allItems.filter((item)=> {
                return item.resources.match(this.search)||item.cid.match(this.search);
            })
        },
        isResourcesFull: function() {
            this.isResEmpty = this.resources.length>0;
            return this.isResEmpty;
        },
        classWidth: function() {
            var result = (this.length/this.width) * 100;
            return Math.trunc(result);
        }
    }
}
</script>


<style scoped>
.model-popup{
    position: fixed;
    padding: 50px 150px;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #00000066;
    z-index: 1000;
}
.popup-fade{
    position: fixed;
    z-index: 999;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background: #00000066;
    padding: 50px 200px;
    transition: 1s;
}
.tag{
    width: fit-content;
    padding: 0px 5px 1px 10px;
    border-radius: 20px;
    text-align: center;
}
.key-press{
    padding: 2px 5px;
    position: absolute;
    top: 36px;
    right: 21px;
    width: 110px;
    cursor: pointer;
}
.key-press-input{
    padding: 5px 120px 5px 10px;
}
.res-row{
    max-width: 100px;
    overflow: hidden;
}
.popover{
    width: 300px;
}
.class-dummy{
    transition: 1s;
}
</style>