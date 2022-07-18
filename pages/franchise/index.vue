<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="$t('navbar.franchise')"/>

     <div class="border rounded p-3">
       <div class="row">
         <div class="col-md-12">
           <h5>Apply for Franchise</h5>
           <hr />
         </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control">
            </div>
          </div>
           <div class="col-md-6">
            <div class="form-group">
              <label>City</label>
              <input type="text" class="form-control">
            </div>
          </div>
         <div class="col-md-6">
            <div class="form-group">
              <label>State</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Postal Code</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Work Number</label>
              <input type="text" class="form-control">
            </div>
          </div>
                   <div class="col-md-6">
            <div class="form-group">
              <label>Website</label>
              <input type="text" class="form-control">
            </div>
          </div>
         <div class="col-md-6">
            <div class="form-group">
              <label>Current Business Information</label>
              <input class="form-control" type="file">
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="button" class="btn main-btn">Submit</button>
          </div>
        </div>
     </div>

      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
export default {
  name: 'contact',
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>

</style>
