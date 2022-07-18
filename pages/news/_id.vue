<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="'TYPES OF COFFEE'"/>
        <InternalPreloader v-if="showInternalPreloader" />
        <div class="row" v-if="newsItem && !showInternalPreloader">
           <div class="col-md-12 mb-3">
             <v-lazy-image :src="newsItem.news_image" class="w-100" :title="newsItem.title" :alt="newsItem.title" />
          </div>
           <!-- <div class="col-md-12"><small class="badge badge-main"><i class="far fa-calendar-alt"></i> 23/12/2021</small></div> -->
          <div class="col-md-12">
             <p>
            {{newsItem.text}}
          </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import { mapGetters, mapActions } from "vuex";
import InternalPreloader from '@/components/shared/InternalPreloader';
import VLazyImage from "v-lazy-image";
export default {
  data(){
    return{
      showInternalPreloader: true
    }
  },
  components: {
    SectionTitle,
    InternalPreloader,
    VLazyImage
  },
     methods: {
  ...mapActions({
    fetchNewsItem: 'news/fetchNewsItem'
  })
  },
  created(){
    this.fetchNewsItem(this.$route.params.id).then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      newsItem: 'news/newsItem',
    })
  }
}
</script>

<style lang="scss" scoped>
  img{
    height: 350px;
  }
</style>
