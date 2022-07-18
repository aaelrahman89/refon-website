<template>
  <div class="product-box mb-5 text-center position-relative">
    <!-- <button class="btn btn-sm">NEW</button> -->
    <nuxt-link :to="localePath(`/shop/${product.product_id}`)">
    <v-lazy-image :src="product.product_photo" class="w-100" :title="product.product_name" :alt="product.product_name" />
       <h3 class="mt-2">{{product.product_name}}</h3>
       <span>
         <!-- <del>$65.00</del> -->
         {{product.product_price}} {{$t('shared.sar')}}</span>
    </nuxt-link>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: 'ProductBox',
  props: ['product'],
  components: {
    VLazyImage
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
.product-box{
  &:hover{
    opacity: 0.9;
    transition: all 0.9s ease-out;
  }
    img{
      height: 250px;
      border: 5px solid #f0f0f0;
    }
    h3{
      color: #333;
      font-size: 15px;
    }
    span{
      color: #333333;
    font-size: 18px;
    font-weight: 600;
    }
    del{
      color: #999;
    margin-right: 5px;
    margin-left: 5px;
    }
    .btn{
      position: absolute;
      color: $mainColor;
      border: 2px solid $mainColor;
      border-radius: 0;
      left: 10px;
      top: 26px;
      &:lang(ar){
        left: auto;
        right: 10px;
      }
    }
}
</style>
