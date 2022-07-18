<template>
<div class="main-section">
 <div class="container pt-5 pb-5">
   <HomeSectionTitle :title="$t('home.latestNews')" />
   <div class="row">
     <div class="col-md-12">
      <client-only>
         <splide :options="options" ref="newsSplide">
        <splide-slide class="text-center mb-3 position-relative" v-for="item in allNews" :key="item.id">
          <nuxt-link :to="localePath(`/news/${item.id}`)">
         <label class="text-white p-1">31 <br />JAN</label>
          <v-lazy-image  :src="item.news_image" class="w-100" :title="item.title" :alt="item.title" />
       <h5 class="mt-2 text-uppercase">{{item.title}}</h5>
       <p>{{item.text}}</p>
          </nuxt-link>
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
import { mapGetters, mapActions } from "vuex";
import VLazyImage from "v-lazy-image";
export default {
  name: 'HomeLatestNews',
  components: {
    HomeSectionTitle,
    VLazyImage
  },
  data(){
    return {
      options: {
                  rewind : true,
                  perPage: 3,
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
     methods: {
  ...mapActions({
    fetchNews: 'news/fetchNews'
  })
  },
  created(){
    this.fetchNews();
  },
    computed: {
    ...mapGetters({
      allNews: 'news/allNews',
    })
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
a{
  color: #000;
  &:hover{
    opacity: 0.7;
    transition: all 0.9s ease-in-out;
  }
}

i{
  color: $mainColor;

}
h5{
  font-size: 13px;
}
p{
  font-size: 12px;
  overflow: hidden;
  height: 65px;
}
img{
  height: 250px;
  border: 5px solid #f5f5f5;
}
label{
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: $mainColor;
  font-size: 16px;
      height: 45px;
    line-height: 18px;
    margin-bottom: 5px;
    padding: 4px;
    transition: all 0.3s ease 0s;
    width: 50px;
    font-weight: bold;
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
