<template>
  <div>
    <HomeSlider />
    <HomeFashionQuotes />
     <LazyBlock target="HomeOurFabrics">
      <LazyHomeOurFabrics />
    </LazyBlock>
    <LazyBlock target="HomeFeatures">
      <LazyHomeFeatures />
    </LazyBlock>
    <!-- <LazyBlock target="HomeFeaturedProducts">
      <LazyHomeFeaturedProducts />
    </LazyBlock> -->
  </div>
</template>

<script>
import LazyBlock from '@/components/shared/LazyBlock';

export default {
  name: 'home',
  layout: 'home',
  components: {
    LazyBlock
  },
  mounted(){
    this.showLoading = false;
  }
}
</script>

<style lang="scss" scoped>

</style>
