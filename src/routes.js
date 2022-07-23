import addMember from './components/addMember.vue';
import showMembers from './components/showMembers.vue';
import singleMember from './components/singleMember.vue';

export default [
    { path: '/', component: showMembers},
    { path: '/add', component: addMember},
    { path: '/blog/:id', component: singleMember}
]
