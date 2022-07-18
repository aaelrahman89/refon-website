<template>
   <div class="mb-5">
      <SectionTitle :title="page.page_name"  v-if="!showInternalPreloader" />
      <div class="container">
       <InternalPreloader v-if="showInternalPreloader" />
       <div class="row" v-if="!showInternalPreloader">
         <div class="col-md-12" v-html="page.page_content"></div>
       </div>

      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import Alert from '@/components/shared/Alert';
import InternalPreloader from '@/components/shared/InternalPreloader';
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'about',
  data(){
    return{
      showInternalPreloader: true
    }
  },
  components: {
    SectionTitle,
    Alert,
    InternalPreloader
  },
       methods: {
  ...mapActions({
    fetchPage: 'pages/fetchPage'
  }),
  },
  created(){
    this.fetchPage(this.$route.params.id).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      page: 'pages/page',
    })
}
}
</script>

<style lang="scss" scoped>

   html:lang(ar){
     p{
       text-align: right;
     }
   }

</style>
