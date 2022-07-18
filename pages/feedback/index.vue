<template>
   <div class="mb-5">
      <div class="container">
        <SectionTitle :title="$t('navbar.feedback')"/>

     <div class="border rounded p-3">
       <div class="row">
         <div class="col-md-12">
           <p class="text-center">{{$t('feedback.feelFree')}}</p>
           <hr />
         </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Store Visited</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Day Visited</label>
              <input type="date" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Dine In / Take Out</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio1" id="inlineRadio1" value="Dine In">
  <label class="form-check-label" for="inlineRadio1">Dine In</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio1" id="inlineRadio2" value="Take Out">
  <label class="form-check-label" for="inlineRadio2">Take Out</label>
</div>
            </div>
          </div>
                    <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Food Quality</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

<div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Overall Service Quality</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Cleanliness</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

                    <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Order Accuracy</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

                              <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Speed of Service</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

         <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Value</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

        <div class="col-md-6">
            <div class="form-group">
              <label class="col-md-12 p-0 m-0">Overall Experience</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio3" value="Excellent">
  <label class="form-check-label" for="inlineRadio3">Excellent</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio4" value="Good">
  <label class="form-check-label" for="inlineRadio4">Good</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio5" value="Average">
  <label class="form-check-label" for="inlineRadio5">Average</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="radio2" id="inlineRadio6" value="Dissatisfied">
  <label class="form-check-label" for="inlineRadio6">Dissatisfied</label>
</div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label>Any comments, questions or suggestions?</label>
              <textarea class="form-control" rows="4"></textarea>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>E-mail <span class="text-danger">*</span></label>
              <input type="text" class="form-control">
            </div>
          </div>
           <div class="col-md-4">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="button" class="btn main-btn">Submit</button>
          </div>
        </div>
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

</style>
