<template>
    <div class="w-50 mx-auto bg-info mt-xl-5 h-100 p-lg-5 rounded">
        
        <form v-if="!submitted">
        <h2 class="mb-3 text-lg text-light">Add a New Member</h2>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputname">Name</label>
                    <input v-model.lazy="blog.name" type="name" class="form-control" id="inputname" >
                </div>
                <div class="form-group col-md-6">
                    <label for="inputname">Passport Number</label>
                    <input v-model.lazy="blog.passport" type="passport" class="form-control" id="inputpassport" >
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputname">Email Adress</label>
                    <input v-model.lazy="blog.email" type="passport" class="form-control" id="inputpassport" >
                </div>
                <div class="form-group col-md-6">
                    <label for="inputname">Phone Number</label>
                    <input v-model.lazy="blog.phone" type="phone" class="form-control" id="inputpassport" >
                </div>
                <div class="form-group col-md-6">
                    <label for="inputname">Biography</label>
                    <textarea class="form-control" v-model.lazy="blog.biography"  name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <button v-on:click.prevent="post" type="submit" class="btn btn-primary">Sign in</button>
            
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
    </div>


</template>

<script>
    // Imports

    export default {
        data() {
            return {
                blog: {
                    name: '',
                    passport: '',
                    email: '',
                    phone: ''
                },
                submitted: false
            }
        },
        methods: {
            post: function () {
                this.$http.post('https://form-field-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', this.blog).then(
                    function (data) {
                        console.log(data);
                        this.submitted = true;
                    });
            }
        }
    }
</script>

<style>

</style>