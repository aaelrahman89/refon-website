<template>
  <div>
   <div class="container">
     <div class="row mt-3">
       <div class="col-md-12">
         <splide :options="options">
        <splide-slide>
            <h1>boo1</h1>
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        <splide-slide>
            <h1>boo2</h1>
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        <splide-slide>
            <h1>boo3</h1>
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        </splide>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    layout: 'noFooter',
      data() {
          return {
              options: {
                  rewind : true,
                  perPage: 2,
                  gap    : '1rem',

              },
          };
      },
  }
</script>
