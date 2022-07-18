<template>
<div class="navbar-section">

 <b-navbar toggleable="lg" type="dark">
   <nuxt-link :to="localePath('/')" class="navbar-brand" exact>
   <img src="~assets/images/logo-en.svg" loading="lazy" class="logo" title="Refon" alt="Refon" v-if="$i18n.locale == 'en'">
   <img src="~assets/images/logo-ar.svg" loading="lazy" class="logo" title="Refon" alt="Refon" v-if="$i18n.locale == 'ar'">
   </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav :class="$i18n.locale == 'ar'?'mr-auto':'ml-auto'">

        <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/')" exact>{{$t('navbar.home')}}</nuxt-link></li>
         <!-- <li class="text-uppercase nav-item" v-for="category in allCategories" :key="category.id"><nuxt-link :to="localePath(`/category/${category.id}`)">{{category.category_name}}</nuxt-link></li> -->

      <div v-for="category in allCategories" :key="category.id">
         <b-nav-item-dropdown :text="category.category_name" right>
           <div class="dropdown-item" v-for="(subCategory, index) in category.sub_categories" :key="index"><nuxt-link :to="localePath(`/subCategory/${subCategory.id}`)">{{subCategory.subcategory_name}}</nuxt-link></div>
        </b-nav-item-dropdown>
      </div>

        <li class="text-uppercase nav-item"><nuxt-link :to="localePath('/contact')">{{$t('navbar.contact')}}</nuxt-link></li>

      <li><nuxt-link class="btn-no-underline" :to="switchLocalePath('en')" v-if="$i18n.locale == 'ar'"><img src="~/assets/images/en-flag.svg" class="lang-img"></nuxt-link></li>
      <li><nuxt-link class="btn-no-underline" :to="switchLocalePath('ar')" v-if="$i18n.locale == 'en'"><img src="~/assets/images/ar-flag.svg" class="lang-img"></nuxt-link></li>

 <!-- <li class="text-uppercase nav-item">
   <nuxt-link class="btn-no-underline" :to="localePath('/login')"><button type="button" class="btn btn-default text-white border">{{$t('navbar.signIn')}}</button></nuxt-link>
   <nuxt-link class="btn-no-underline" :to="localePath('/register')"><button type="button" class="btn main-btn text-white">{{$t('navbar.joinNow')}}</button></nuxt-link>
 </li>
   <li class="mt-2" v-if="$store.state.auth.isLoggedIn"><span class="text-white">Welcome Ahmed</span></li>
   <li class="mt-2" v-if="$store.state.auth.isLoggedIn"><span class="text-white" @click="logout">Logout</span></li> -->

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'NavBar',
       methods: {
  ...mapActions({
    logout: 'auth/logout',
    fetchCategories: 'menu/fetchCategories'
  }),
  },
  created(){
    this.fetchCategories().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
   this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
     this.fetchCategories().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  }
  },
    computed: {
    ...mapGetters({
      allCategories: 'menu/allCategories',
    })
}
}
</script>


<style lang="scss" scoped>
@import 'assets/scss/variable';

$small: 768px;

.lang-img{
  width: 30px;
  height: 30px;
}

/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  border-bottom: 2px solid $mainColor;
  color: $mainColor;
}

.navbar-section{

   .logo{
     height: 50px;
   }

   a{
     color: #fff;
     &:hover{
       text-decoration: none;
     }
   }

}

.cart-icon{
  position: absolute;
  left: 60%;
}

::v-deep{

  .navbar{
    padding: 0.2rem 1rem !important;
  }

  .dropdown-item.active, .dropdown-item:active{
    background-color: transparent !important;
  }

  .navbar-brand{
    border-bottom: none !important;
  }

.nav-link{
  color: #fff !important;
  padding: 0px !important;
}

 .dropdown:hover .dropdown-menu {
        display: block;
        top: 95%;
    }

.navbar-nav{
  li{
    padding: 0px 16px;
    a{
        &:hover{
    // border-bottom: 1px solid #fff;
    transition: all 0.9s ease-in-out;
  }
    }
        a.btn-no-underline{
          border-bottom: none;
        &:hover{
    border-bottom: none;
    opacity: 0.8;
  }
    }
  }
}

.dropdown-item{
      border-bottom: 1px solid #ececec;
      padding: 0.50rem 1.5rem !important;
      cursor: pointer;
  a{
    color: #000 !important;
    display: block;
  }
}
.dropdown-menu{
  border: none !important;
  border-radius: 0 !important;
}

.dropdown-item:lang(ar){
  text-align: right;
}

.navbar-collapse {
  @media screen and (max-width: $small){
     background-color: rgba(29,26,26,0.95);
    border-radius: 5px;
    li{
      padding: 10px 16px;
    }
    li:lang(ar){
      text-align: right;
    }
  }
}

}

html:lang(ar){

  .cart-icon{
  right: 60%;
  left: auto;
}

}

</style>
