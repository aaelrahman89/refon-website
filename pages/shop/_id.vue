<template>
   <div class="mb-5">
     <SectionTitle :title="product.prodcut_name" v-if="!showInternalPreloader" />
      <div class="container">
        <InternalPreloader v-if="showInternalPreloader" />
        <div class="row mb-5" v-if="!showInternalPreloader" >
          <div class="col-md-6">
            <v-lazy-image :src="product.product_photo" class="w-100" :title="product.prodcut_name" :alt="product.prodcut_name" />
          </div>
          <div class="col-md-6 content">
            <h2 class="product-title">{{product.prodcut_name}}</h2>
            <h5 class="product-price">{{product.product_price}} {{$t('shared.sar')}}</h5>
            <p class="product-desc mb-4 mt-4">{{product.product_description}}</p>
          </div>
        </div>


      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import ProductBox from '@/components/shop/ProductBox';
import { mapGetters, mapActions } from "vuex";
import InternalPreloader from '@/components/shared/InternalPreloader';
import VLazyImage from "v-lazy-image";
export default {
  name: 'shopId',
  data(){
    return{
      showInternalPreloader: true
    }
  },
  components: {
    SectionTitle,
    ProductBox,
    InternalPreloader,
    VLazyImage
  },
     methods: {
  ...mapActions({
    fetchMenuItem: 'menu/fetchMenuItem'
  })
  },
  created(){
    this.fetchMenuItem(this.$route.params.id).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      product: 'menu/menuItem',
    })
  }
}
</script>

<style lang="scss" scoped>
img{
  border: 5px solid #f0f0f0;
}
  .product-price{
    color: #999;
    font-size: 25px;
  }

::v-deep{
  .tab-content{
    border: 1px solid #ededed;
    padding: 10px;
    margin-top: 5px;
  }
}

html:lang(ar){
  .content{
    text-align: right;
  }
}

</style>
