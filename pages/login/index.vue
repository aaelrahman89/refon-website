<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="$t('navbar.signIn')" />


       <div class="row">
         <div class="col-md-6 mx-auto">
           <div class="border rounded p-3">
            <form @submit.prevent="onLogin">
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model="userData.email">
            </div>
                </div>

            <div class="col-md-12">
              <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="userData.password">
            </div>
            </div>

 <div class="col-md-12 text-center">
            <button type="submit" class="btn main-btn">Login</button>
          </div>

             </div>
            </form>
           </div>
         </div>
        </div>

      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import { mapActions } from "vuex";
export default {
  name: 'contact',
  data(){
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    SectionTitle
  },
     methods: {
  ...mapActions({
    login: 'auth/login'
  }),
  onLogin(){
    this.login(this.userData);
  }
  },
}
</script>

<style lang="scss" scoped>

</style>
