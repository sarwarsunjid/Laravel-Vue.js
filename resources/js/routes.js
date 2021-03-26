import dashboard from './components/admin/dashboard/index.vue';
import categorylist from './components/admin/category/list.vue';

//Creating Routes
export const routes = [

    {

     path: '/',
     component: dashboard

    },
    {

      path:'/category',
      component: categorylist

    }
  ]

