<template>
  <div>
    <b-alert
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
    >
      Perfect for a festive attitude!
    </b-alert>
    <b-button
      variant="warning"
      class="m-1"
      @click="showDismissibleAlert=true"
    >
      <h3>CHECK OUT OUR NEW OAXACAN AIR! ({{ showDismissibleAlert ? 'visible' : '' }})</h3>
    </b-button>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://photographe-en-herbe.com/wp-content/uploads/2019/03/paysage-montagne-photographe-en-herbe-1024x576.jpg(147 kB)
https://photographe-en-herbe.com/wp-content/uploads/2019/03/paysage-montagne-photographe-en-herbe-1024x576.jpg
"
      >
        <h1>REVITALIZE YOURSELF</h1>
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="https://voyagerloin.com/uploads/960/8390041535255.jpg(178 kB)
https://voyagerloin.com/uploads/960/8390041535255.jpg
"
      >
        <h1>REENERGIZE YOURSELF</h1>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/sunset-3423899_1920.jpeg?yVomw0Dy4DJHpw6goGocYEp48.2zZz5A(61 kB)
https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/sunset-3423899_1920.jpeg?yVomw0Dy4DJHpw6goGocYEp48.2zZz5A
"
      >
        <h1>PURIFY YOURSELF</h1>
      </b-carousel-slide>
    </b-carousel>
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<script>
 export default {
   data() {
     return {
       dismissSecs: 10,
       dismissCountDown: 0,
       showDismissibleAlert: false
     }
   },
   methods: {
     countDownChanged(dismissCountDown) {
       this.dismissCountDown = dismissCountDown
     },
     showAlert() {
       this.dismissCountDown = this.dismissSecs
     }
   }
 }
</script>
