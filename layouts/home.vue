<template>
  <div>
    <Preloader v-if="showLoading" />
    <ScrollToTop />
    <div class="layout-container">
      <Nuxt />
    </div>
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Preloader from '@/components/shared/Preloader.vue';
import Copyright from '@/components/shared/Copyright';
export default {
    head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr",
      },
    };
  },
  data(){
    return {
      showLoading: true
    }
  },
  components: {
    Footer,
    ScrollToTop,
    Preloader,
    Copyright
  },
    mounted(){
    this.showLoading = false;
  },
    created(){
        this.$axios.interceptors.response.use((response) => {
          if(response.status == 200){
            this.showLoading = false;
          }
        return response;
    }, (err) => {
        console.log(err.response.status);
        if(err){
            this.showLoading = false;
          }
        return Promise.reject(err); // i didn't have this line before
    });
  }
}
</script>

<style>

</style>
