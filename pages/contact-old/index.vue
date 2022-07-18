<template>
   <div class="mb-5 contact-bg">
     <SectionTitle :title="$t('navbar.contact')" />
      <div class="container">
       <div class="row">
         <div class="col-md-6 content">
           <h5>{{$t('contact.getInTouch')}}</h5>
           <hr />
           <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beening the stand ard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrames bled it make a type specimen book.
           </p>
           <ul>
             <li><i class="fas fa-map-marker-alt"></i> {{$t('footer.address')}}</li>
             <li><i class="fas fa-phone-alt"></i> <a href="tel:00201112078265">0111-2078265</a></li>
             <li><i class="far fa-envelope"></i> <a href="mailto:info@refon.com">info@refon.com</a></li>
           </ul>
          </div>

          <div class="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8582830895707!2d46.61932251483609!3d24.76604768409855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3b27beffa49%3A0xa79fc63a99fc7031!2sREFON!5e0!3m2!1sen!2seg!4v1622557861075!5m2!1sen!2seg" width="100%" height="230" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

         <!-- <div class="col-md-6">
           <h5>{{$t('contact.haveAQuestions')}}</h5>
           <hr />
            <div class="form-group">
              <input type="text" class="form-control" :placeholder="$t('contact.name')">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" :placeholder="$t('contact.email')">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" :placeholder="$t('contact.subject')">
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="5" :placeholder="$t('contact.message')"></textarea>
            </div>
          <div class="form-group">
            <button type="button" class="btn main-btn-border">{{$t('contact.sendMessage')}}</button>
          </div>
         </div> -->

        </div>
      </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/shared/SectionTitle';
export default {
  name: 'contact',
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>

.contact-bg{
  background: rgba(0, 0, 0, 0) url(~assets/images/contact-bg.jpg) no-repeat scroll center center / cover;
}

p, li{
      color: #666666;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
}

li{
  margin-bottom: 10px;
}

   html:lang(ar){

     label, h5, .content{
       text-align: right;
     }

   }

</style>
