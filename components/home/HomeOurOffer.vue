<template>
 <div class="container pt-5 pb-5">
   <HomeSectionTitle title="OUR DELICIOUS OFFER" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
   <div class="row">
     <div class="col-lg-3 text-center" v-for="(item, index) in [1,2,3,4]" :key="index">
       <i class="fas fa-coffee fa-4x"></i>
       <h5 class="mt-2 text-uppercase">TYPES OF COFFEE</h5>
       <p>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
     </div>
   </div>
 </div>
</template>

<script>
import HomeSectionTitle from '@/components/home/HomeSectionTitle';
export default {
  name: 'HomeOurOffer',
  components: {
    HomeSectionTitle
  },
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
}

</style>
