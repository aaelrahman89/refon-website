<template>
  <div>
    <span role="button" @click="scrollToTop" v-if="showScroll">
     <i class="fas fa-chevron-up"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      showScroll: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.top.scrollY > 800) {
        this.showScroll = true;
      } else {
        this.showScroll = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variable";
span {
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 32px;
  height: 32px;
  background-color: #000;
  z-index: 99999;
  font-size: 1em;
  text-align: center;
  opacity: 0.9;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: $mainColor;
  }
    @media screen and (max-width: 768px) {
    bottom: 70px;
  }
}
span:lang(ar){
  left: 20px;
  right: auto;
}
</style>
