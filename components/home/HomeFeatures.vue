<template>
<div class="main-section text-center text-white position-relative">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <i class="fas fa-bacon"></i>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'en'">Refon Men's Tailoring</h5>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'ar'">ريفون للخياطة الرجالية</h5>
          <p v-if="$i18n.locale == 'en'">When quality fabrics meet precision detail,<br />  Respecting our culture moves us forward.</p>
           <p v-if="$i18n.locale == 'ar'">عندما تلتقي الأقمشة عالية الجودة بالتفاصيل الدقيقة ،<br />  احترام ثقافتنا يدفعنا إلى الأمام.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-align-center"></i>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'en'">Refon Plan</h5>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'ar'">خطة ريفون</h5>
          <p v-if="$i18n.locale == 'en'">Refon Fashion is planned to lead retailer and franchise of lifestyle for women, men and kids fashion in Saudi Arabia.</p>
           <p v-if="$i18n.locale == 'ar'">تم التخطيط لريفون فاشون لتكون رائدة متاجر التجزئة وامتياز أسلوب الحياة لأزياء النساء والرجال والأطفال في المملكة العربية السعودية.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-map-marked-alt"></i>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'en'">Find Us</h5>
          <h5 class="text-uppercase" v-if="$i18n.locale == 'ar'">اين تجدنا</h5>
          <p v-if="$i18n.locale == 'en'">You will find us in Riyadh in (Al-Malqa neighborhood, Hittin neighborhood, Al-Rawda neighborhood, Imam Saud Road).</p>
           <p v-if="$i18n.locale == 'ar'">تجدنا في الرياض في (حي الملقا ، حي حطين ، حي الروضة ، طريق الإمام سعود).</p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeFeatures'
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
.main-section{
  background-image: url('~assets/images/pattern.jpg');
  color: #fff;
  padding: 50px 0 40px 0;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    display: none;
  }
  div{
    z-index: 3;
  }
  i{
    border: 1px solid $mainColor;
    border-radius: 50%;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    width: 50px;
    transition: all 0.3s ease 0s;
    color: $mainColor;
  }
  h5{
    color: #000;
    font-size: 16px;
  }
  p{
    line-height: 23px;
    padding: 0 25px;
    color: #666666;
    font-size: 12px;
  }
}
</style>
