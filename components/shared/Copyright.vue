<template>
 <div class="copyright">
   <div class="container">
     <div class="row">
     <div class="col-md-12 text-center" v-if="$i18n.locale == 'en'">©{{currentDate}} Refon. All Rights Reserved.</div>
     <div class="col-md-12 text-center" v-if="$i18n.locale == 'ar'">©{{currentDate}} Refon. جميع الحقوق محفوظة.</div>
   </div>
   </div>
   </div>
</template>

<script>
export default {
  name: 'Copyright',
  computed: {
    currentDate(){
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
    .copyright{
      color: #9a9a9a;
    font-weight: 300;
    font-size: 12px;
         background: #1e2e29;
    padding: 20px 0;
    }
</style>
