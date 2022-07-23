<template>
    <div class="pt-lg-2">
        <div class="team-boxed">
            <div class="container">
                <h1 class="py-lg-4 display-4">All Members</h1>
                <div class="form-outline mb-4">
                  <input type="" class="form-control" v-model="search" id="datatable-search-input" placeholder="Search Member ...">
                </div>
                <div class="d-flex flex-wrap ">
                    <div class="w-25 bg-info p-4 rounded mr-5" v-for="blog in filteredBlogs">
                        <div class="item">
                            <div class="box d-flex justify-content-center flex-column align-items-center"><img class="rounded-circle mb-2" src="https://i.pravatar.cc/100">
                                <router-link v-bind:to="'/blog/' + blog.id">
                                    <h3 class="name font-weight-bold text-white mb-2"><u>{{blog.name}}</u></h3>
                                </router-link>
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
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://form-field-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            //console.log(this.blogs);
        });
    },
    mixins: [searchMixin]
}
</script>

<style>
</style>
