<template>
  <section>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-11 mx-5 mt-4 mb-md-5 mb-2">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb d-flex justify-content-md-end">
              <li class="breadcrumb-item">
                <router-link to="/">首頁</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/User/ProductList">產品列表</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="returnProductCategory(product.unit)">{{
                  product.unit
                }}</router-link>
              </li>
              <li class="breadcrumb-item active colorBlue" aria-current="page">
                {{ product.title }}
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-9 col-md-10 col-12 d-flex flex-wrap justify-content-center">
          <div class="col-lg-6 col-md-12 mb-md-0 mb-3 px-4">
            <ProductImg :images="product.images"></ProductImg>
          </div>
          <div class="col-lg-6 col-md-12 col-9  mt-lg-0 mt-md-3 px-lg-4 px-md-5 productText">
            <div class="d-lg-none d-md-flex mt-3 mb-2">
              <p
                v-for="tag in product.CategoryArray"
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
            <h2 class="fw-bold">
              {{ product.title }}
            </h2>
            <h1>{{ $filters.currency(product.price) }} 元</h1>
            <div class="productCart mt-4 px-md-5 py-md-4 px-4 py-3 bgBlue">
              <h6 class="mb-1">購買數量</h6>
              <div class="input-group mb-3">
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-custom-Blue btn-checkout"
                    @click="subproductNumber()"
                  >
                    <i class="bi bi-dash-lg"></i>
                  </button>
                </span>
                <input
                  type="number"
                  class="form-control"
                  min="1"
                  placeholder="請輸入購買數量"
                  v-model="productNumber"
                  aria-describedby="button-addon1"
                />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-custom-Blue btn-checkout"
                    @click="addproductNumber()"
                  >
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </span>
              </div>
              <div
                class="btn btn-custom-contrary-Blue w-100 mb-2 text-center"
                @click="addCart(product.id)"
              >
                添加到購物車
              </div>
              <h6
                v-if="!is_collect"
                class="love text-center text-dark"
                @click="addCollectList(product)"
              >
                <i class="bi bi-heart"></i> 加入收藏名單
              </h6>
              <h6
                v-else
                class="love text-center text-dark"
                @click="removeCollectList(product)"
              >
                <i class="bi bi-heartbreak"></i> 移除收藏名單
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-lg-5 mt-md-0 pt-5">
      <div class="row justify-content-center px-4">
        <div class="col-lg-7 col-10 pt-1 productDescribe">
          <div class="stitle mb-4 px-1 pb-2">
            <h1>{{ product.stitle }}</h1>
          </div>
          <div class="mb-4 pb-2">
            <p>■ 內容物 : {{ product.content }}</p>
            <p>■ {{ product.freight }}</p>
          </div>
          <div class="mb-5 pb-4">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div v-if="product.images" class="productDetail">
            <h5 class="my-4 py-1 fw-bold">細節</h5>
            <img :src="product.images[1]" alt="" />
            <div class="mt-4 mb-4 pt-2 pb-1">
              <p v-if="typeof product.country !== 'undefined'">
                原產國 : {{ product.country }}
              </p>
              <p v-if="typeof product.area !== 'string'">
                產區 : {{ typeof product.area }}
              </p>
              <p v-if="typeof product.altitude !== 'undefined'">
                海拔 : {{ product.altitude }}
              </p>
              <p v-if="typeof product.Variety !== 'undefined'">
                品種 : {{ product.Variety }}
              </p>
              <p v-if="typeof product.Soli !== 'undefined'">
                土壤種類 : {{ product.Soli }}
              </p>
              <p v-if="typeof product.refined !== 'undefined'">
                精煉 : {{ product.refined }}
              </p>
              <p v-if="typeof product.roast !== 'undefined'">
                烘烤程度 : {{ product.roast }}
              </p>
            </div>
            <div class="mb-4 pb-1">
              <span v-if="typeof product.bitter !== 'undefined'">
                <p class="me-1">苦味</p>
                <i
                  v-for="star in product.bitter"
                  :key="star"
                  class="bi bi-star-fill"
                ></i>
                <i
                  v-for="star in 5 - product.bitter"
                  :key="star"
                  class="bi bi-star"
                ></i>
              </span>
              <span v-if="typeof product.sour !== 'undefined'">
                <p class="me-1">酸味</p>
                <i
                  v-for="star in product.sour"
                  :key="star"
                  class="bi bi-star-fill"
                ></i>
                <i
                  v-for="star in 5 - product.sour"
                  :key="star"
                  class="bi bi-star"
                ></i> </span
              ><span v-if="typeof product.sweet !== 'undefined'">
                <p class="me-1">甜味</p>
                <i
                  v-for="star in product.sweet"
                  :key="star"
                  class="bi bi-star-fill"
                ></i>
                <i
                  v-for="star in 5 - product.sweet"
                  :key="star"
                  class="bi bi-star"
                ></i> </span
              ><span v-if="typeof product.rich !== 'undefined'">
                <p class="me-1">濃郁</p>
                <i
                  v-for="star in product.rich"
                  :key="star"
                  class="bi bi-star-fill"
                ></i>
                <i
                  v-for="star in 5 - product.rich"
                  :key="star"
                  class="bi bi-star"
                ></i>
              </span>
            </div>
            <div>
              <p>
                {{ product.stext }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div :class="['productitem d-md-block d-none', isMove && 'move']">
    <p class="mb-1">{{ product.title }}</p>
    <p class="fs-5 text-center">{{ $filters.currency(product.price) }} 元</p>
    <div
      class="btn btn-custom-contrary-Blue w-100 mt-3 mb-4 text-center"
      @click="addCart(product.id)"
    >
      添加到購物車
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.productText h1 {
  font-size: 2.5rem;
}

.productText h2 {
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {
  .productText h2 {
    font-size: 1.2rem;
  }

  .productText h1 {
  font-size: 1.4rem;
}
}

.tag {
  font-size: 1rem;
}

.productCart {
  border-radius: 10px;
}

.productShop {
  width: 100%;
  border: 1px #24395b solid;
  border-radius: 6px;
  color: #fff;
  background: #24395b;
  transition: all 0.4s;
  cursor: pointer;
}

.productShop:hover {
  border: 1px #24395b solid;
  color: #24395b;
  background: #fff;
}

.form-control {
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 0ox !important;
  border-right-width: 0px !important;
  border-color: #24395b !important;
}

.input-group :first-child .btn {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right-width: 0px !important;
}

.input-group :last-child .btn {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-left-width: 0px !important;
}

.btn-custom-Blue {
  border: 1px solid #24395b;
  color: #24395b !important ;
  background: #fff;
}

.btn-custom-Blue:hover {
  color: #fff !important;
  background-color: #24395b;
}

.btn-custom-contrary-Blue {
  border: solid #24395b;
  color: #fff !important;
  background-color: #24395b;
}

.btn-custom-contrary-Blue:hover {
  color: #24395b !important ;
  background: #fff;
}

.love {
  transition: all 0.4;
  cursor: pointer;
}

.love:hover {
  color: #24395b !important;
}

/* 產品敘述 */

.productDescribe i {
  margin: 0 0.1rem;
  font-size: 0.875rem;
}

.productDescribe span {
  display: flex;
}

.stitle h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

.productDetail img {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 20px;
}

.productitem {
  width: 235px;
  min-width: 192px;
  padding: 20px 20px 0;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateX(250px) translateY(-50%);
  border: 1px solid #dee1e7;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  background: #fff;
  transition: transform 0.4s;
  z-index: 999;
}

.move {
  transform: translateY(-50%);
}
</style>

<script>
import ProductImg from '../components/ProductImg.vue';
import { getLocalStorage } from '@/methods/localStorage';
import { dealCategory } from '@/methods/filters';

export default {
  inject: ['emitter'],
  components: {
    ProductImg
  },
  data() {
    return {
      product: [],
      productNumber: 1,
      isMove: false,
      is_collect: false
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.product.push(res.data.product);
          this.product = dealCategory(this.product)[0];
          this.isCollect(this.product);
        }
      });
    },
    getProductCategory(unit) {
      this.$router.push(`/User/category/${unit}`);
    },
    handleScroll() {
      if (window.pageYOffset > 480) {
        this.isMove = true;
      } else {
        this.isMove = false;
      }
    },
    addproductNumber() {
      this.productNumber++;
    },
    subproductNumber() {
      if (this.productNumber <= 1) {
        return;
      }
      this.productNumber--;
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: this.productNumber
      };

      if (this.productNumber < 1) {
        this.$swal({
          showConfirmButton: true,
          icon: 'error',
          title: '數字型別錯誤',
          Text: '請輸入數字唷!'
        });
        this.productNumber = 1;
        return;
      }

      this.$http
        .post(url, { data: cart })
        .then((res) => {
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer);
              toast.addEventListener('mouseleave', this.$swal.resumeTimer);
            },
            icon: 'success',
            title: '加入購物車成功!'
          });
          this.emitter.emit('update-cartNumber');
        })
        .catch((err) => {
          this.$swal({
            showConfirmButton: true,
            icon: 'error',
            title: '加入失敗',
            Text: err
          });
        });
    },
    returnProductCategory(unit) {
      return `/User/category/${unit}`;
    },
    addCollectList(product) {
      this.emitter.emit('add-product', product);
      this.isCollect(product);
    },
    removeCollectList(product) {
      this.emitter.emit('remove-product', product);
      this.isCollect(product);
    },
    isCollect(product) {
      const collects = getLocalStorage('favoriteList');
      this.is_collect = Object.values(collects).some(
        (item) => item.id === product.id
      );
    },
    updateProduct(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        this.product = response.data.product;
      });
    }
  },
  created() {
    this.getProducts();
    window.addEventListener('scroll', this.handleScroll, true);
  },
  mounted() {
    this.emitter.on('update-product', (id) => {
      this.updateProduct(id);
    });

    this.emitter.on('update-collect', () => {
      this.isCollect();
    });
  }
};
</script>
