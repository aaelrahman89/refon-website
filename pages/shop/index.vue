<template>
   <div class="mb-5">
     <SectionTitle :title="$t('navbar.products')" />
      <div class="container">
        <InternalPreloader v-if="showInternalPreloader" />
          <div class="row">
              <div class="col-md-3" v-for="(product, index) in 12" :key="index">
                <ProductBox :product="product" />
              </div>

<div class="col-md-12 mt-5">
                <b-pagination
                 align="center"
      v-model="currentPage"
      :total-rows="10"
      :per-page="12"
      aria-controls="my-table"
      @change="onPageChange"
    ></b-pagination>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import ProductBox from '@/components/shop/ProductBox';
import InternalPreloader from '@/components/shared/InternalPreloader';
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'shop',
  data(){
    return {
      currentPage: 1,
      showInternalPreloader: false
    }
  },
  components: {
    SectionTitle,
    ProductBox,
    InternalPreloader
  },
//    methods: {
//   ...mapActions({
//     fetchProducts: 'shop/fetchProducts'
//   }),
  onPageChange(e){
    // this.fetchProducts(e);
  }
//   },
//   created(){
//     this.fetchProducts(1).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
//   },
//     computed: {
//     ...mapGetters({
//       allProducts: 'shop/allProducts',
//     })
// }
}
</script>

<style lang="scss" scoped>

</style>
