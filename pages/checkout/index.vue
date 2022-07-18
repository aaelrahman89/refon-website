<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="$t('checkout.title')"/>
        <div class="row">
          <div class="col-md-6">
            <h5>{{$t('checkout.billingDetails')}}</h5>
            <div class="form-group">
              <label class="col-md-12 pl-0 pr-0">{{$t('contact.fullName')}}</label>
              <input type="text" class="form-control" value="Ahmed Ali">
            </div>
            <div class="form-group">
              <label class="col-md-12 pl-0 pr-0">{{$t('contact.address')}}</label>
              <input type="text" class="form-control" value="hasan mohamed street">
            </div>
            <div class="form-group">
              <label class="col-md-12 pl-0 pr-0">{{$t('contact.city')}}</label>
              <input type="text" class="form-control" value="Gadda">
            </div>
            <div class="form-group">
              <label class="col-md-12 pl-0 pr-0">{{$t('contact.email')}}</label>
              <input type="text" class="form-control" value="a.ali@gmail.com">
            </div>
             <div class="form-group">
              <label class="col-md-12 pl-0 pr-0">{{$t('contact.phone')}}</label>
              <input type="text" class="form-control" value="+996545555">
            </div>
          </div>
          <div class="col-md-6">
            <h5>{{$t('checkout.yourOrder')}}</h5>
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">{{$t('checkout.productName')}}</th>
      <th scope="col">{{$t('checkout.total')}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>French Press</td>
      <td>23</td>
    </tr>
    <tr>
      <td><b>{{$t('checkout.cartSubtotal')}}</b></td>
      <td>23</td>
    </tr>
       <tr>
      <td><b>{{$t('checkout.shipping')}}</b></td>
      <td>10</td>
    </tr>
       <tr>
      <td><b>{{$t('checkout.orderTotal')}}</b></td>
      <td>33</td>
    </tr>
  </tbody>
</table>

<hr />

<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    {{$t('checkout.directBankTransfer')}}
  </label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    {{$t('checkout.paypal')}}
  </label>
</div>
<div class="form-check mb-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    {{$t('checkout.cashOnDelivery')}}
  </label>
</div>


<button type="button" class="btn btn-default main-btn btn-block">{{$t('checkout.placeOrder')}}</button>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
export default {
  name: 'checkout',
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>

html:lang(ar){

  label, h5, .form-check{
    text-align: right;
  }

  .form-check-input {
    margin-right: -1.25rem;
    margin-left: 0rem;
  }

    .form-check {
    right: 20px;
  }

}

</style>
