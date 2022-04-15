<template>
  <swiper
    :slidesPerView="1"
    :slidesPerGroup="1"
    :speed="2000"
    :effect="'fade'"
    :loop="true"
    :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper mt-4 mb-md-5 mb-0 mx-0"
  >
    <swiper-slide
      v-for="img in imgData"
      :key="img"
      :style="{ backgroundImage: `url(${require('../assets/bg/' + img)})` }"
      class="mx-0"
    ></swiper-slide>
    <div class="bigText text-center">
      <h1>來和貓咪一起快樂的過每一天吧!</h1>
    </div>
  </swiper>
</template>

<style scoped>
@import '~swiper/swiper.min.css';

/* 畫面高度 */
.swiper {
  max-width: 93%;
  right: -7%;
}

/* 背景圖 */
.swiper >>> .swiper-slide {
  max-width: 100%;
  height: 780px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .swiper >>> .swiper-slide {
    height: 500px;
  }
}

@media screen and (max-width: 414px) {
  .swiper >>> .swiper-slide {
    padding-bottom: 100%;
    height: auto;
  }
}

/* 圖片文字 */
.bigText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
}

.bigText h1 {
  width: 500px;
  letter-spacing: 0.25rem;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .bigText h1 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 414px) {
  .bigText h1 {
    font-size: 1.2rem;
  }
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
// import required modules
import { Autoplay, EffectFade } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade]
    };
  },
  data() {
    return {
      imgData: ['bg-001.jpg', 'bg-002.jpg', 'bg-003.jpg']
    };
  },
  methods: {
    scroll(Name) {
      const element = document.getElementById(Name);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
  mounted() {
    window.onresize = () => {
      window.screenWidth = document.body.clientWidth;
      this.width = window.screenWidth;
    };
  }
};
</script>
