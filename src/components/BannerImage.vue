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
    class="mySwiper mt-1 mb-md-5 mb-0 mx-0"
  >
    <swiper-slide
      v-for="img in imgData"
      :key="img"
      :style="{ backgroundImage: `url(${require('../assets/img/bg/' + img)})` }"
      class="mx-0"
    ></swiper-slide>
    <div class="bigText text-center">
      <div class="mb-lg-5 mb-md-2">
        <h1>歡迎來到貓咖啡商店！</h1>
        <h1>今天想喝點什麼呢？</h1>
      </div>
      <div class="mt-5 d-lg-block d-none">
        <p>貓咖啡店內販售來自世界各地精品咖啡</p>
        <p>只要輕鬆點擊就能訊速購買</p>
        <p>讓您在家中也能擁有咖啡的陪伴</p>
      </div>
      <router-link
            to="/User/ProductList"
            class="btn btn-custom-Brown mt-3 px-sm-5 px-3 py-1"
            >前 往 購 物</router-link>
    </div>
  </swiper>
</template>

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
  background: no-repeat center / cover;
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
  letter-spacing: 0.25rem;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
}

.bigText p{
  letter-spacing: 0.25rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .bigText h1 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 414px) {
  .bigText h1 {
    letter-spacing: 2px;
    font-size: 1rem;
  }

  .bigText a{
    font-size: 0.875rem;
  }
}
</style>
