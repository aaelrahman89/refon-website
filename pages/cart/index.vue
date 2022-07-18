<template>
   <div class="mb-5">
     <!-- <transition name="bounce">
     <Alert v-if="showAlert" title="Success!" desc="Sent Successfully" alertType="success" />
     </transition> -->
      <div class="container">
        <SectionTitle :title="$t('cart.title')"/>
        <div class="row">
          <div class="col-md-12 table-responsive">
            <table class="table">
  <thead>
    <tr>
      <th>{{$t('cart.product')}}</th>
      <th>{{$t('cart.name')}}</th>
      <th>{{$t('cart.price')}}</th>
      <th style="width: 5%;">{{$t('cart.quantity')}}</th>
      <th>{{$t('cart.total')}}</th>
      <th style="width: 5%;">{{$t('cart.action')}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <!-- <v-lazy-image :src="src" /> -->
        <!-- <img src="~assets/images/product-img.jpg" loading="lazy" class="img-fluid" title="caffebene" alt="caffebene"> -->
        </td>
      <td>French Press</td>
      <td>23</td>
      <td>
        <input type="number" class="form-control mt-4" v-model="quantity">
      </td>
      <td>23</td>
      <td><i class="fas fa-trash text-danger cursor-pointer"></i></td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="4"></td>
      <td class="text-center text-uppercase" :class="$i18n.locale == 'ar'?'border-left':'border-right'"><b>{{$t('cart.total')}}</b></td>
      <td :class="$i18n.locale == 'ar'?'pr-5':'pl-5'"><span class="badge bg-secondary">23</span></td>
    </tr>
  </tfoot>

</table>
          </div>
        </div>

  <div class="row">
    <div class="col-md-12" :class="$i18n.locale == 'ar'?'text-left':'text-right'">
      <nuxt-link :to="localePath('/shop')"><button type="button" class="btn btn-default border">{{$t('cart.continueShopping')}}</button></nuxt-link>
      <nuxt-link :to="localePath('/checkout')"><button type="button" class="btn main-btn">{{$t('cart.proceedToCheckout')}}</button></nuxt-link>
      </div>
  </div>

      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
import Alert from '@/components/shared/Alert';
import VLazyImage from "v-lazy-image";
export default {
  name: 'about',
  components: {
    SectionTitle,
    Alert,
    VLazyImage
  },
  data(){
    return {
      quantity: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    height: 100px;
  }
  .table {
    td{
      line-height: 100px;
    }
  }

  .number{
    span{
      background-color: #e9e9e9;
    width: 30px;
    height: 30px;
    line-height: 27px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    }
    .form-control{
      width: 80px;
          height: 30px;
    margin: 0px 5px;
    text-align: center;
    }
    }

  .number-margin{
     margin-top: 2.3rem !important;
  }

.badge{
  font-size: 15px;
  color: #fff;
}
</style>
