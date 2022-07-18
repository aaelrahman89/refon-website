<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle  :title="$t('navbar.career')"/>

     <div class="border rounded p-3">
       <div class="row">
         <div class="col-md-12">
           <h5>Job Application Form</h5>
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
              <label>Applying for Position</label>
              <select class="form-control">
                <option>Store Manager</option>
                <option>Shift Supervisor</option>
              </select>
            </div>
          </div>
           <div class="col-md-6">
            <div class="form-group">
              <label>Country Applying To</label>
              <select class="form-control">
                <option>Saudi Arabia</option>
                <option>Egypt</option>
              </select>
            </div>
          </div>
         <div class="col-md-6">
            <div class="form-group">
              <label>Upload Resume</label>
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
