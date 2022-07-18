<template>
  <footer class="pt-4 pb-2 text-white" :class="$i18n.locale == 'ar'?'text-right':'text-left'">
   <div class="container">

     <div class="row mb-3">
       <div class="col-md-3">
         <h5>{{$t('footer.mainLinks')}}</h5>
         <ul class="links">
           <li><nuxt-link :to="localePath('/')"><span class="dash">-</span> {{$t('navbar.home')}}</nuxt-link></li>
           <!-- dynamic products here -->
           <li v-for="category in allCategories" :key="category.id"><nuxt-link :to="localePath(`/category/${category.id}`)"><span class="dash">-</span> {{category.category_name}}</nuxt-link></li>
           <li><nuxt-link :to="localePath('/contact')"><span class="dash">-</span> {{$t('navbar.contact')}}</nuxt-link></li>
         </ul>
       </div>
       <div class="col-md-3">
         <h5>{{$t('footer.otherLinks')}}</h5>
         <ul class="links">
           <!-- dynamic pages here -->
           <li v-for="page in allPages" :key="page.id"><nuxt-link :to="localePath(`/page/${page.id}`)"><span class="dash">-</span> {{page.page_name}}</nuxt-link></li>
         </ul>
       </div>
       <div class="col-md-3">
         <h5>{{$t('footer.stayInTouch')}}</h5>
          <ul>
            <li>{{$t('footer.address')}}</li>
            <li>{{$t('footer.riyadh')}}</li>
            <li>{{$t('footer.kingdomOf')}}</li>
            <li><i class="fas fa-phone-alt"></i> <a href="tel:01112078265">011-2078265</a></li>
            <li><i class="far fa-envelope"></i> <a href="mailto:info@refon.sa">info@refon.sa</a></li>
            <li>
              <a href="https://www.facebook.com/REFONARABIA/" target="_blank" class="ml-1 mr-1"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/refon_ar/" target="_blank" class="ml-1 mr-1"><i class="fab fa-instagram"></i></a>
              <a href="https://twitter.com/refon_ar" target="_blank" class="ml-1 mr-1"><i class="fab fa-twitter"></i></a>
              <a href="#" target="_blank" class="ml-1 mr-1"><i class="fab fa-snapchat-ghost"></i></a>
            </li>
          </ul>
       </div>
        <div class="col-md-3">
         <h5>{{$t('navbar.feedback')}}</h5>

         <a class="twitter-timeline" :data-lang="$i18n.locale == 'ar'?'ar':'en'" data-height="180" data-theme="dark" href="https://twitter.com/refon_ar?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <!-- <form>
          <div class="form-group">
            <input type="text" class="form-control" :placeholder="$t('contact.email')">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="2" :placeholder="$t('navbar.feedback')"></textarea>
          </div>
          <div class="form-group">
            <button class="btn whiteborder-btn">{{$t('contact.send')}}</button>
          </div>
        </form> -->
       </div>
     </div>

   </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Footer',
     methods: {
  ...mapActions({
    fetchPages: 'pages/fetchPages',
    fetchCategories: 'menu/fetchCategories'
  }),
  },
  created(){
    this.fetchPages().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
     this.fetchCategories().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
      this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
     this.fetchPages().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
      this.fetchCategories().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  }
  },
    computed: {
    ...mapGetters({
      allPages: 'pages/allPages',
       allCategories: 'menu/allCategories'
    })
}
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
  footer{
    li{
      font-size: 12px;
      color: #a6a6a6;
      margin-bottom: 5px;
      a{
        color: #a6a6a6;
      }
    }
    background-color: #16221e;
    h5{
      border-bottom: 1px solid #203324;
       padding-bottom: 10px;
       color: #d1d1d1;
    }
    .dash{
      color: #525252;
      font-size: 18px;
    }
    .links{
      a{
        color: #a6a6a6;
        font-size: 12px;
        text-transform: uppercase;
        &:hover{
          opacity: 0.7;
          transition: all 0.5s ease;
        }
      }
    }
    .app-img{
      height: 50px;
      margin-bottom: 10px;
    }
    .newsletter{
      font-size: 14px;
    }
  }

 ::v-deep{

  .form-control, .btn {
    color: #798087 !important;
    background-color: #1e2e29 !important;
    border: 1px solid #1e2e29 !important;
    border-radius: 0 !important;
    &::placeholder{
      color: #4e6a62 !important;
    }
  }

 }

</style>
