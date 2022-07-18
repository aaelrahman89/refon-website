<template>
  <div class="store-box mb-4 shadow-sm" :class="$i18n.locale == 'ar'?'text-right':'text-left'">
   <div class="container">
      <div class="row">
      <div class="col-md-6 p-0">
        <div class="p-2">
           <h5>- {{store.store_name}}</h5>
         <ul class="list-group">
   <li class="list-group-item"><i class="fas fa-map-marker-alt"></i> {{store.store_address}}</li>
   <li class="list-group-item"><i class="fas fa-mobile-alt"></i> {{store.store_phone}}</li>
</ul>
         </div>
      </div>
      <div class="col-md-6 p-0">
<iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" :src="`https://maps.google.com/maps?q=${store.store_latitude},${store.store_longitude}&hl=es&z=14&amp;output=embed`"></iframe>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: 'StoreBox',
  props: ['store'],
  data(){
    return{
      showMap: false
    }
  },
  components: {
    VLazyImage
  }
}
</script>

<style lang="scss" scoped>
 @import 'assets/scss/variable.scss';
.store-box{
  border: 2px solid #fefefe;
  img{
    height: 300px;
  }
  .list-group-mt{
    margin-top: 0.9rem !important;
  }
  span{
    font-size: 12px;
  }
}

</style>
