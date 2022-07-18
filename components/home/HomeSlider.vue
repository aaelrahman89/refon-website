<template>
<div class="slider-section">
  <Preloader v-if="showLoading" />
  <div class="nav-bar"><NavBar /></div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      fade
      background="#ababab"
      img-width="1024"
      img-height="800"
    >
      <b-carousel-slide
        v-for="(slider, index) in allSliders" :key="index"
        :caption="slider.title"
        :text="slider.text"
      >
              <template #img>
                <div class="overlay"></div>
          <img
            class="d-block img-fluid w-100"
            :src="slider.slider_image"
            :alt="slider.title"
            :title="slider.title"
          >
        </template>
      <a :href="slider.link" target="_blank" class="btn btn-primary bg-main" v-if="slider.link && slider.link.length > 0">{{$t('shared.readMore')}}</a>
      </b-carousel-slide>

    </b-carousel>
</div>
</template>

<script>
import NavBar from '@/components/shared/NavBar';
import Preloader from '@/components/shared/Preloader.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'HomeSlider',
  data(){
    return{
      showLoading: true
    }
  },
  components: {
    NavBar,
    Preloader
  },
  mounted(){
    this.showLoading = false;

    // Sticky navbar
    let navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
      if (window.top.scrollY > 200 && window.innerWidth > 768){
        navBar.classList.add('sticky')
      }else{
        navBar.classList.remove('sticky')
      }
    });

  setTimeout(() => {
    console.log('myimmmmg', document.querySelectorAll('.carousel-item img'));
  }, 2000)

  },
       methods: {
  ...mapActions({
    fetchSliders: 'slider/fetchSliders'
  })
  },
  created(){
    this.fetchSliders().then(res => this.showLoading = false).catch(err => this.showLoading = false);
  //    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
  //    this.fetchSliders().then(res => this.showLoading = false).catch(err => this.showLoading = false);
  // }
  },
    computed: {
    ...mapGetters({
      allSliders: 'slider/allSliders',
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
$small: 768px;

.slider-section{
  position: relative;
  .nav-bar{
    position: absolute;
    z-index: 10;
    width: 100%;
    background: rgba(225, 225, 225, 0.1) none repeat scroll 0 0;
  }
  .sticky{
    position: fixed;
    background: rgba(22, 34, 30, 0.9) none repeat scroll 0 0;
    box-shadow: 0 0 5px 0 #000;
    transition: all 0.5s ease 0s;
    width: 100%;
  }
}
  .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 2;
  cursor: pointer;
}

::v-deep{

   .carousel-item img {
        height:90vh;
        @media screen and (max-width: $small){
      height: 270px;
    }
    }

.carousel-caption{
    right: 10%;
    top: 200px;
    left: auto;
    z-index: 999 !important;
    @media screen and (max-width: $small){
      top: auto;
    bottom: 10px;
    }
    h3{
      font-size: 90px;
      text-transform: uppercase;
      border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
      @media screen and (max-width: $small){
        font-size: 30px;
      }
    }
    p{
      font-size: 20px;
      color: #bcbcbc;
      @media screen and (max-width: 768px){
        display: none;
      }
    }
}

}

</style>
