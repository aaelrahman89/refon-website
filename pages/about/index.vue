<template>
   <div class="mb-5">
     <!-- <transition name="bounce">
     <Alert v-if="showAlert" title="Success!" desc="Sent Successfully" alertType="success" />
     </transition> -->
     <SectionTitle :title="$t('navbar.about')"/>
      <div class="container">

       <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         <br /> <br />
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         <br /> <br />
       </p>

      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import Alert from '@/components/shared/Alert';
export default {
  name: 'about',
  components: {
    SectionTitle,
    Alert
  }
}
</script>

<style lang="scss" scoped>


  html:lang(ar){
    p, h3, h5{
      text-align: right;
    }
  }

</style>
