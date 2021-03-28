import dashboard from './components/admin/dashboard/index.vue';
import categorylist from './components/admin/category/list.vue';
import categoryadd from './components/admin/category/add.vue';

//Creating Routes
export const routes = [
    {

     path: '/',
     component: dashboard

    },
    {
      path:'/category',
      component: categorylist

    },
    {
      path:'/add_category',
      component: categoryadd

    },


  ]

