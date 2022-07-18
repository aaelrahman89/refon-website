<template>
  <div class="section-title">
							<h3>{{title}}</h3>
	</div>
</template>

<script>
export default {
  name: 'HomeSectionTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
.section-title{
  border-bottom: 1px solid #ccc;
  margin-bottom: 40px;
  h3{
    color: $mainColor;
    display: inline-block;
    line-height: 19px;
    margin-bottom: 10px;
    position: relative;
    &::before{
      background: #fff none repeat scroll 0 0;
    border: 1px solid #ef6644;
    border-radius: 50%;
    bottom: -14px;
    content: "";
    height: 7px;
    position: absolute;
    right: 0;
    width: 7px;
    z-index: 2;
    }
    &::after{
      background: $mainColor none repeat scroll 0 0;
    bottom: -11px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
    }
  }
}

html:lang(ar){

  h3{
    text-align: right;
    width: 100%;
  }

}
</style>
