require('./bootstrap');

window.Vue = require('vue').default;

//Vue router support code
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  import {routes} from './routes';

  const router = new VueRouter({
    routes,
    mode:'hash', // short for `routes: routes`
  })

//v form support 

import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//register new component
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

const app = new Vue({
    el: '#app',
    router
});

