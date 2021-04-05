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


// Sweetalert2 support
import Swal from 'sweetalert2'
window.Swal = Swal;

// Toast
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;


// Vuex support
import Vuex from 'vuex'
Vue.use(Vuex)

import storeInfo from './store/store';

const store = new Vuex.Store(
  storeInfo
)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//register new component
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store
});

