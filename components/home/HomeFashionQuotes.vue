<template>
<div class="main-section">
   <div class="container">
     <div class="row">
     <div class="col-md-4 mb-3">
       <img src="~assets/images/quote1.jpg" class="w-100" title="Refon" alt="Refon">
     </div>
      <div class="col-md-4 mb-3">
       <div class="content p-5 text-center">
          <h5 class="text-uppercase mt-3">{{$t('home.fashionQuotes')}}</h5>
          <hr />
          <client-only>
         <splide :options="options" ref="newsSplide">
        <splide-slide v-for="(quote, index) in [1,2,3,4]" :key="index">
               <p class="mt-3">
            "Fashion is the armor to survive the reality of everyday life."
          </p>
          <small>By - Bill Cunningham</small>
        </splide-slide>
        </splide>
      </client-only>

       </div>
     </div>
      <div class="col-md-4 mb-3">
       <img src="~assets/images/quote2.jpg" class="w-100" title="Refon" alt="Refon">
     </div>
   </div>
   </div>
</div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
export default {
  name: 'HomeFashionQuotes',
  components: {
    HomeSectionTitle
  },
    data(){
    return {
      options: {
                  rewind : true,
                  perPage: 1,
                  gap    : '1rem',
             autoplay    : true,
             arrows: false,
             pagination: false,
             direction: this.$i18n.locale == 'ar'?'rtl':'ltr',
             	breakpoints: {
                900: {
			perPage: 1,
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
        this.$refs.newsSplide.splide.refresh();
      })
    },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
   img{
     height: 260px;
     border: 1px solid #e1e1e1;
   }
   .content{
      height: 260px;
      border: 1px solid $mainColor;
      h5{
        color: #000;
        font-weight: 500;
        font-size: 18px;
      }
      p{
        color: #666666;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
      }
   }
</style>
