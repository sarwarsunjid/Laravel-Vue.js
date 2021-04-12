import dashboard from './components/admin/dashboard/index.vue';
import categorylist from './components/admin/category/list.vue';
import categoryadd from './components/admin/category/add.vue';
import categoryedit from './components/admin/category/edit.vue';

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
      path:'/addCategory',
      component: categoryadd

    },
    {
      path:'/editCategory/:categoryId',
      component: categoryedit

    },


  ]

