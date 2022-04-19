<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-3xq5u6jldre">
      <div class="ldio-dwik2dnj2i">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <NavbarMain class="sticky-top"></NavbarMain>
  <div class="d-flex justify-content-end my-2 px-3">
    <p class="me-2 px-2 rounded-pill bgOrange">NEW</p>
    <p class="text-decoration-underline">
      結帳時輸入good coffee折扣碼即享有8折優惠！
    </p>
  </div>
  <BannerImage></BannerImage>
  <section
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="top-bottom"
  >
    <OnlintStore></OnlintStore>
  </section>
  <section
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="center-bottom"
  >
    <HotProduct EnTitle="Hot Products" :Product="Hproduct" isFluid></HotProduct>
  </section>
  <section
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="center-bottom"
  >
    <Introduce3></Introduce3>
  </section>
  <Fotter></Fotter>
  <FixedButton></FixedButton>
</template>

<style>
@import '~swiper/swiper.min.css';
@import '~swiper/swiper-bundle.min.css';

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.6rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 1px 10px;
  white-space: nowrap;
  letter-spacing: 1px;
  color: #fff;
}

.tag.blue {
  background-color: #00aaf5;
  box-shadow: 0 2px 4px rgb(0 170 245 / 30%);
}

.tag.pink {
  /* background-color: #ff93c2; */
  background: #ed1e79;
  box-shadow: 0 2px 4px rgb(255 147 194 / 30%);
}

.tag.brown {
  background: #998675;
  box-shadow: 0 2px 4px rgba(205, 97, 8, 0.3);
}

.text .unit {
  font-size: 0.8rem;
  color: #999;
}
</style>

<script>
import BannerImage from '../components/BannerImage.vue';
import NavbarMain from '../components/NavbarMain.vue';
import OnlintStore from '../components/ProductOnlintStore.vue';
import HotProduct from '../components/ProductCard.vue';
import Introduce3 from '../components/Introduce3.vue';
import Fotter from '../components/Fotter.vue';
import FixedButton from '../components/FixedButton.vue';
import { dealCategory, filterCategory } from '@/methods/filters';

export default {
  inject: ['emitter'],
  components: {
    BannerImage,
    NavbarMain,
    OnlintStore,
    HotProduct,
    Introduce3,
    Fotter,
    FixedButton
  },
  data() {
    return {
      product: [],
      Hproduct: [],
      isLoading: false
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.product = dealCategory(Object.values(res.data.products));
          this.Hproduct = filterCategory('熱門', this.product);
        }
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
