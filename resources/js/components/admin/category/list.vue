<template>
    <div>
      <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard v2</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Category Add</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <div class="row justify-content-center">
              <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
                <div class="text-right">
                  <router-link to="/addCategory" class="btn btn-sm btn primary">Add Category</router-link>
                </div>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for= "(categoryList, index) in getCategoryList" :key= "categoryList.id">
                      <td>{{index}}</td>
                      <td>{{categoryList.cat_name}}</td>
                      <td>
                        <div class="">
                            <router-link to="" class="btn btn-xs btn-info"><i class="fa fa-edit"></i></router-link>
                            <router-link to="" class="btn btn-xs btn-danger" ><i class="fa fa-trash"></i></router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>
          </div>
        </div>
     
    <!-- /.content -->
 
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->      

    </div>
</template>

<script>
export default {
    name: 'List',

    mounted(){
      this.$store.dispatch('getCategoryList')
    },
    computed:{
      getCategoryList(){
        return this.$store.getters.categoryList
      }
    },

  methods: {
    
  }      
}
</script>

