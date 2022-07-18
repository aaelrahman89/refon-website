<template>
  <div class="section-bg text-center mb-5">
     <h1 class="text-capitalize">{{title}}</h1>
     <p class="mt-3">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeSectionTitle',
  props: ['title', 'desc']
}
</script>

<style lang="scss" scoped>
  h1{
        color: #262626;
        font-size: 40px;
  }
  p{
    font-size: 16px;
    color: #767676;
  }
  hr{
    width: 25%;
  }
  .section-bg{
    background-image: url('~assets/images/section-bg.jpg');
    padding: 40px 0;
  }
</style>
