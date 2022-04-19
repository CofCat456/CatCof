<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-3xq5u6jldre">
      <div class="ldio-dwik2dnj2i">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <section class="mb-5">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-11 mx-5 my-3">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-end">
              <li class="breadcrumb-item">
                <router-link to="/"><i class="bi bi-house"></i></router-link>
              </li>
              <li class="breadcrumb-item active colorBlue" aria-current="page">
                產品列表
              </li>
            </ol>
          </nav>
        </div>
        <div class="row my-5 pb-5 px-0">
          <div
            class="col-lg-5 col-12 offset-1 order-lg-1 order-2 d-flex flex-column justify-content-center align-items-center px-md-0 px-4"
          >
            <div class="wrap">
              <h1 class="text-start font-en">Online Store</h1>
              <div class="text ms-4">
                <h1 class="mb-5 pb-2">產品列表</h1>
                <div class="my-2">
                  <h2>喝杯咖啡休息一下。</h2>
                  <h2>我很高興能過上平常的生活。</h2>
                </div>
                <span>
                  <p>我們將為您</p>
                  <p class="clrPink">
                    購買 2,500
                    日元或更多的點擊後航班（咖啡豆和滴水袋）免費送貨。
                  </p>
                  <p>如果你住的很遠，或者即使你在附近也不能來，請使用它！</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-11 offset-1 order-lg-1 order-1 mb-lg-0 mb-5">
            <img src="../assets/bg/bg-004.jpeg" class="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="center-bottom"
  >
    <ProductClass></ProductClass>
  </section>
  <section
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="top-bottom"
  >
    <Recommend
      EnTitle="Recommended"
      ChTitle="推薦商品"
      :Product="Rproduct"
    ></Recommend>
  </section>
  <section>
    <aboutProduct></aboutProduct>
  </section>
</template>

<style scoped>
.wrap > h1 {
  font-size: 1.2rem;
}

.text > h1 {
  font-size: 3rem;
  font-weight: 700;
}

.text > h2 {
  font-size: 1.8rem;
}

@media screen and (max-width: 768px) {
  .text > h2 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 414px) {
  .wrap > h1 {
    font-size: 1.2rem;
  }
}

.img-fluid {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>

<script>
import ProductClass from '../components/ProductClass.vue';
import Recommend from '../components/ProductCard.vue';
import aboutProduct from '../components/AboutProduct.vue';
import { dealCategory, filterCategory } from '@/methods/filters';

export default {
  components: {
    ProductClass,
    Recommend,
    aboutProduct
  },
  data() {
    return {
      product: [],
      Rproduct: [],
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
          this.Rproduct = filterCategory('推薦', this.product);
        }
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
