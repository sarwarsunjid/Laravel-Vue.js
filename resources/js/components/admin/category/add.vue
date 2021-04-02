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
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form"  @submit.prevent= 'categorySave'>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="form.cat_name" placeholder="Enter Category Name"
                     :class="{ 'is-invalid': form.errors.has('cat_name') }" name="cat_name">
                      <has-error :form="form" field="cat_name"></has-error>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer text-center">
                  <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                  <button type="" class="btn btn-sm btn-danger">Back</button>
                </div>
              </form>
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
    name: 'Save',
  data () {
    return {
      // Create a new form instance
      form: new Form({
        cat_name: '',

      })
    }
  },

  methods: {
    categorySave () {
      // Submit the form via a POST request
      this.form.post('/categorySave')
        .then(({ response }) => { 
          //check json response
          // console.log(response)
          
          //store data, redirect to url: /category(which is actually category list page)
          this.$router.push('/category');
          }).catch(()=>{
        });
    }
  }      
}
</script>

<style>

</style>