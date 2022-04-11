<template>
  <section class="py-lg-5 py-md-3">
    <div class="container-fluid my-lg-5 my-md-2">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 my-2 px-md-5 px-4">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-2 font-en">Hot Products</h1>
          </span>
        </div>
        <div
          v-if="Hproduct.length > 1"
          class="col-md-9 col-12 my-4 px-4 d-flex"
        >
          <swiper
            :slidesPerView="4"
            :spaceBetween="40"
            :breakpoints="{
              '1024': {
                slidesPerView: 4,
                spaceBetween: 20
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 40
              },
              '390': {
                slidesPerView: 2,
                spaceBetween: 15
              }
            }"
            class="mySwiper"
          >
            <swiper-slide
              v-for="item in product1"
              :key="item.title"
              @click="getProductId(item.id)"
            >
              <div class="imgBox">
                <img :src="item.imageUrl" alt="" />
              </div>
              <div class="text">
                <div class="d-flex mt-3 mb-2">
                  <p
                    v-for="tag in item.CategoryArray"
                    :key="tag"
                    :class="[
                      ['tag mx-1'],
                      tag === '熱門' && 'blue',
                      tag === '推薦' && 'brown',
                      tag === '免運費' && 'pink'
                    ]"
                  >
                    {{ tag }}
                  </p>
                </div>
                <h6>{{ item.title }}</h6>
                <h6>TWD {{ $filters.currency(item.price) }} 元</h6>
                <p class="unit">#{{ item.unit }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-md-9 col-12 my-4 px-4 d-flex">
          <swiper
            :slidesPerView="4"
            :spaceBetween="40"
            :breakpoints="{
              '1024': {
                slidesPerView: 4,
                spaceBetween: 20
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 40
              },
              '390': {
                slidesPerView: 2,
                spaceBetween: 15
              }
            }"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1"># tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="imgBox">
                <img src="../assets/雜/001.jpg" alt="" />
              </div>
              <div class="text">
                <p class="font-en fs-5">2021.5.5</p>
                <h6>我是標題測試我是標題測試</h6>
                <p class="tag mt-1">#tag測試</p>
              </div>
            </swiper-slide>
            -->
          </swiper>
        </div>
        <div class="col-md-9 col-12 text-center mt-md-5 mt-3 px-4">
          <router-link to="/User/ProductList" class="spButton">
            <i class="bi bi-chevron-right px-1"></i>列表展示
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '~swiper/swiper.min.css';
h1 {
  font-size: 3rem;
}

@media screen and (max-width: 390px) {
  h1 {
    font-size: 2.2rem;
  }
}

/* 畫面高度 */
.swiper {
  width: 100%;
}

/* 背景圖 */
.swiper >>> .swiper-wrapper {
  width: 100%;
}

.swiper >>> .swiper-slide {
  width: 100%;
  cursor: pointer;
}

.swiper >>> .swiper-slide .imgBox {
  width: 100%;
  height: 200px;
  border-radius: 7px;
  overflow: hidden;
}
.swiper >>> .swiper-slide img {
  width: 100%;
  height: 200px;
  margin-bottom: 0.5rem;
  object-fit: cover;
  object-position: center;
  transition: all 0.4s linear;
}

@media screen and (max-width: 414px) {
  .swiper >>> .swiper-slide .imgBox {
    width: 100%;
    height: 120px;
  }
  .swiper >>> .swiper-slide img {
    width: 100%;
    height: 120px;
    margin-bottom: 0.2rem;
  }
}

.swiper >>> .swiper-slide:hover img {
  transform: scale(1.05);
}

.text > .font-en {
  letter-spacing: 1px;
}

.text > h6 {
  letter-spacing: 0.5px;
}

.text .unit {
  font-size: 0.4rem;
}

.bi-chevron-right::before {
  color: #24395b;
  font-size: 0.4rem;
  transition: color 0.6s;
}

.spButton:hover {
  color: #fff;
  background: #24395b;
}

.spButton:hover .bi-chevron-right::before {
  color: #fff;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['Hproduct'],
  data() {
    return {
      product1: [],
      product2: []
    };
  },
  watch: {
    Hproduct() {
      for (let i = 0; i < 5; i++) {
        this.product1[i] = this.Hproduct[i];
      }
      for (let i = 5; i < 10; i++) {
        this.product2[i] = this.Hproduct[i];
      }
    }
  },
  methods: {
    getProductId(id) {
      this.$router.push(`/User/product/${id}`);
    }
  },
  created() {
    for (let i = 0; i < 5; i++) {
      this.product1[i] = this.Hproduct[i];
    }
    for (let i = 5; i < 10; i++) {
      this.product2[i] = this.Hproduct[i];
    }
  }
};
</script>
