<template>
   <div class="mb-5">
     <SectionTitle :title="allSubCategories.category_name.category_name" v-if="!showInternalPreloader && allSubCategories && allSubCategories.category_name && allSubCategories.category_name.category_name" />
      <div class="container">
        <InternalPreloader v-if="showInternalPreloader" />
          <div class="row" v-if="allSubCategories && allSubCategories.sub_categories && !showInternalPreloader">
              <div class="col-md-3 text-center mb-4" v-for="subCategory in allSubCategories.sub_categories" :key="subCategory.id">
                <nuxt-link :to="localePath(`/subCategory/${subCategory.id}`)">
                     <div class="shadow-sm p-2">
                       <v-lazy-image :src="subCategory.image" class="w-100" :title="subCategory.sub_category_name" :alt="subCategory.sub_category_name" />
                     <h3 class="mt-2">{{subCategory.sub_category_name}}</h3>
                </div>
                </nuxt-link>
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
import VLazyImage from "v-lazy-image";
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
    InternalPreloader,
    VLazyImage
  },
   methods: {
  ...mapActions({
    fetchSubCategories: 'menu/fetchSubCategories'
  }),
  },
  created(){
    this.fetchSubCategories(this.$route.params.id).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      allSubCategories: 'menu/allSubCategories',
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
