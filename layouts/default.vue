<template>
  <div>
    <ScrollToTop />
    <SectionHeader />
    <div class="layout-container">
      <Nuxt />
    </div>
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Copyright from '@/components/shared/Copyright';
export default {
    head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "en" ? "ltr" : "rtl",
      },
    };
  },
  components: {
    SectionHeader,
    Footer,
    ScrollToTop,
    Copyright
  }
}
</script>

<style>

</style>
