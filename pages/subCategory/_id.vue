<template>
   <div class="mb-5">
     <SectionTitle :title="allMenuItems.sub_category_name" v-if="!showInternalPreloader && allMenuItems && allMenuItems.sub_category_name" />
      <div class="container">
        <InternalPreloader v-if="showInternalPreloader" />
          <div class="row" v-if="allMenuItems && !showInternalPreloader">
              <div class="col-md-3 text-center mb-4" v-for="product in allMenuItems.sub_products" :key="product.id">
                <ProductBox :product="product" />
              </div>

<!-- <div class="col-md-12 mt-5">
                <b-pagination
                 align="center"
      v-model="currentPage"
      :total-rows="10"
      :per-page="12"
      aria-controls="my-table"
      @change="onPageChange"
    ></b-pagination>
          </div> -->

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
      showInternalPreloader: true
    }
  },
  components: {
    SectionTitle,
    ProductBox,
    InternalPreloader
  },
   methods: {
  ...mapActions({
    fetchMenuItems: 'menu/fetchMenuItems'
  }),
  },
  created(){
    this.fetchMenuItems(this.$route.params.id).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      allMenuItems: 'menu/allMenuItems',
    })
}
}
</script>

<style lang="scss" scoped>
    img{
      height: 250px;
      border: 5px solid #f0f0f0;
    }
    h3{
      color: #333;
      font-size: 15px;
    }
</style>
