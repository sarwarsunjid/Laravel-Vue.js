require('./bootstrap');

window.Vue = require('vue').default;

//Vue router support code
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  import {routes} from './routes';

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//rgister new component
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

const app = new Vue({
    el: '#app',
    router
});

