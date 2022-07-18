<template>
<div class="main-section">
 <div class="container">
   <HomeSectionTitle :title="$t('home.ourFeauturedProducts')" />
   <div class="row">
     <div class="col-md-12">
      <client-only>
         <splide :options="options" ref="newArrivalsSplide">
        <splide-slide v-for="(product, index) in homeMenuItems" :key="index">
          <ProductBox :product="product" />
        </splide-slide>
        </splide>
      </client-only>
     </div>
   </div>
 </div>
</div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
import ProductBox from '@/components/shop/ProductBox';
import VLazyImage from "v-lazy-image";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'HomeOurFabrics',
  components: {
    HomeSectionTitle,
    VLazyImage,
    ProductBox
  },
  data(){
    return {
      options: {
                  rewind : true,
                  perPage: 4,
                  gap    : '1rem',
             autoplay    : true,
             arrows: false,
             direction: this.$i18n.locale == 'ar'?'rtl':'ltr',
             	breakpoints: {
                900: {
			perPage: 2,
		},
		640: {
			perPage: 1,
		},
	}
              },
    }
  },
     updated: function () {
      this.$nextTick(function () {
        this.$refs.newArrivalsSplide.splide.refresh();
      })
    },
       methods: {
  ...mapActions({
    fetchHomeMenuItems: 'menu/fetchHomeMenuItems'
  }),
  },
  created(){
    this.fetchHomeMenuItems().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      homeMenuItems: 'menu/homeMenuItems',
    })
}
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';

i{
  color: $mainColor;

}
h5{
  font-size: 18px;
}
p{
  font-size: 13px;
  overflow: hidden;
  height: 65px;
}
img{
  height: 250px;
}
label{
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: $mainColor;
  font-size: 12px;
}

html:lang(ar){

label{
  top: 10px;
  left: auto;
  right: 10px;
}

}

::v-deep{

  .splide__pagination__page.is-active {
    background: $mainColor !important;
  }

}

</style>
