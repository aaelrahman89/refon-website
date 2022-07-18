<template>
  <div class="mb-5">
    <SectionTitle :title="$t('navbar.contact')" />
      <div class="container">
        <InternalPreloader v-if="showInternalPreloader" />
        <div class="row" v-if="allStores && !showInternalPreloader">
          <div class="col-md-12" v-for="store in allStores" :key="store.store_id">
            <StoreBox :store="store" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import StoreBox from '@/components/stores/StoreBox';
import SectionTitle from '@/components/shared/SectionTitle';
import InternalPreloader from '@/components/shared/InternalPreloader';
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      showInternalPreloader: true
    }
  },
  components: {
    StoreBox,
    SectionTitle,
    InternalPreloader
  },
     methods: {
  ...mapActions({
    fetchStores: 'stores/fetchStores'
  })
  },
  created(){
    this.fetchStores().then(res => this.showInternalPreloader = false).catch(err => this.showInternalPreloader = false);
  },
    computed: {
    ...mapGetters({
      allStores: 'stores/allStores',
    })
  }

}
</script>
