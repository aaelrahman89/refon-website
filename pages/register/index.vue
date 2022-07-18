<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="$t('navbar.joinNow')" />


       <div class="row">
         <div class="col-md-6 mx-auto">
           <div class="border rounded p-3">
             <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control">
            </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control">
            </div>
                </div>

            <div class="col-md-12">
              <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control">
            </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" class="form-control">
            </div>
            </div>

 <div class="col-md-12 text-center">
            <button type="button" class="btn main-btn">Register</button>
          </div>

             </div>
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
