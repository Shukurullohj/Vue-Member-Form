<template>
    <div id="single-member">
        <div class="w-25 bg-info p-4 rounded mr-5">
            <div class="item">
                <div class="box d-flex justify-content-center flex-column align-items-center"><img class="rounded-circle mb-2" src="https://i.pravatar.cc/100">
                        <h3 class="name font-weight-bold text-white mb-2"><u>{{blog.name}}</u></h3>
                    <p class="title mb-2">{{blog.email}}</p>
                    <p class="description mb-2 text-center">{{blog.biography}}</p>
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <p class="text-muted">{{blog.passport}}</p>
                        <p class="text-muted">{{blog.phone}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://form-field-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style>

</style>
