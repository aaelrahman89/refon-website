<template>
<div class="main-section">
 <div class="container pt-5 pb-5">
   <HomeSectionTitle :title="'Featured Products'" />
   <div class="row">
     <div class="col-md-3" v-for="(product, index) in [1,2,3,4,5,6,7,8]" :key="index">
       <ProductBox />
     </div>
   </div>
   <div class="row">
     <div class="col-md-12 text-center">
       <nuxt-link :to="localePath('/shop')"><button class="btn main-btn">View All Products</button></nuxt-link>
     </div>
   </div>
 </div>
</div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import ProductBox from '@/components/shop/ProductBox';
import VLazyImage from "v-lazy-image";
export default {
  name: 'HomeFeaturedProducts',
  components: {
    HomeSectionTitle,
    VLazyImage,
    ProductBox
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';


</style>
