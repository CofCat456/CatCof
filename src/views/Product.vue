<template>
  <LoadingComponent :LoadingState='isLoading' />
  <section>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <Breadcrumb :Breadcrumb="Breadcrumb" />
        <div
          v-if="product"
          class="col-xxl-7 col-md-10 col-12 d-flex flex-wrap justify-content-center"
        >
          <div class="col-lg-6 col-md-12 mb-md-0 mb-3 px-3">
            <ProductImg :images="product.images" />
          </div>
          <div
            class="col-lg-6 col-md-12 col-9 mt-lg-0 mt-md-3 px-md-4 productText"
          >
            <div class="d-flex mt-3 mb-2">
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
                class="btn btn-custom-contrary-Blue w-100 mb-2 py-2 text-center"
                @click="addCart(product.id)"
              >
                添加到購物車
              </div>
              <h6
                v-if="!is_collect"
                class="love p-2 text-center text-dark"
                @click="addCollectList(product)"
              >
                <i class="bi bi-heart"></i> 加入收藏名單
              </h6>
              <h6
                v-else
                class="love p-2 text-center text-dark"
                @click="removeCollectList(product)"
              >
                <i class="bi bi-heartbreak"></i> 移除收藏名單
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="['container mt-lg-5 mt-md-0 pt-5']"
      data-aos="fade"
      data-aos-delay="1000"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="tpp-bottom"
    >
      <div class="row justify-content-center px-4">
        <div class="col-lg-6 col-10 pt-1 productDescribe">
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
          <div class="productDetail">
            <!-- 下方照片 -->
            <h5 v-if="product.unit === '精品禮盒'" class="my-4 py-1 fw-bold">
              關於禮盒
            </h5>
            <h5 v-else class="my-4 py-1 fw-bold">細節</h5>
            <img
              v-for="item in product.Detailimages"
              :key="item"
              :src="item"
              :alt="product.title + '的照片'"
              class="img-fluid"
            />
            <p v-if="product.unit === '精品禮盒'" class="giftbox my-1">
              {{ product.giftbox }}
            </p>

            <h5 v-if="product.unit === '精品禮盒'" class="my-4 py-1 fw-bold">
              禮盒內容
            </h5>
            <!-- 咖啡資訊 -->
            <div v-if="!product.products" class="mt-4 mb-4 pt-2 pb-1">
              <div v-for="item in coffeeData" :key="item.title">
                <p
                  v-if="
                    product[item.tag] !== undefined &&
                    product[item.tag] !== '無'
                  "
                >
                  {{ item.title }} : {{ product[item.tag] }}
                </p>
              </div>
            </div>
            <!-- 咖啡評價 -->
            <div v-if="!product.products" class="mb-4 pb-1">
              <span v-for="item in coffeeEvaluation" :key="item.title">
                <div v-if="product[item.tag] !== undefined" class="d-flex">
                  <p class="me-1">{{ item.title }}</p>
                  <i
                    v-for="star in product[item.tag]"
                    :key="star"
                    class="bi bi-star-fill"
                  ></i>
                  <i
                    v-for="star in 5 - product[item.tag]"
                    :key="star"
                    class="bi bi-star"
                  ></i>
                </div>
              </span>
            </div>
            <!-- 多種咖啡 -->
            <div
              v-for="products in product.products"
              :key="products.title"
              class="mb-4 pb-1"
            >
              <!-- 咖啡資訊 -->
              <img :src="products.image" class="img-fluid mb-3" :alt="products.title + '的照片'" />
              <div v-for="item in coffeeData" :key="item.title">
                <p
                  v-if="
                    products[item.tag] !== undefined &&
                    products[item.tag] !== '無'
                  "
                >
                  {{ item.title }} : {{ products[item.tag] }}
                </p>
              </div>
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
    <button
      type="button"
      class="btn btn-custom-contrary-Blue w-100 mt-3 mb-4 text-center"
      @click="addCart(product.id)"
    >
      添加到購物車
    </button>
  </div>
</template>

<script>
import ProductImg from '../components/ProductImg.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import { getLocalStorage } from '@/methods/localStorage';
import { dealCategory } from '@/methods/filters';

export default {
  inject: ['emitter'],
  components: {
    ProductImg,
    Breadcrumb,
    LoadingComponent
  },
  data() {
    return {
      product: [],
      productNumber: 1,
      isMove: false,
      is_collect: false,
      Breadcrumb: [
        {
          title: '產品列表',
          link: '/User/ProductList'
        }
      ],
      isLoading: false,
      coffeeData: [
        {
          title: '原產國',
          tag: 'country'
        },
        {
          title: '產區',
          tag: 'area'
        },
        {
          title: '海拔',
          tag: 'altitude'
        },
        {
          title: '品種',
          tag: 'Variety'
        },
        {
          title: '土壤種類',
          tag: 'Soli'
        },
        {
          title: '處理法',
          tag: 'refined'
        },
        {
          title: '烘烤程度',
          tag: 'roast'
        }
      ],
      coffeeEvaluation: [
        {
          title: '苦味',
          tag: 'bitter'
        },
        {
          title: '酸味',
          tag: 'sour'
        },
        {
          title: '甜味',
          tag: 'sweet'
        },
        {
          title: '濃郁',
          tag: 'rich'
        }
      ]
    };
  },
  watch: {
    $route: function() {
      this.getProduct();
    }
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.product = res.data.product;
          this.product = dealCategory([res.data.product])[0];
          this.isCollect(this.product);
          this.Breadcrumb.push({
            title: this.product.unit,
            link: `/User/category/${this.product.unit}`
          });
          this.Breadcrumb.push({
            title: this.product.title,
            link: ''
          });
        }
      });
    },
    handleScroll() {
      if (window.pageYOffset > 480) {
        return (this.isMove = true);
      }
      this.isMove = false;
    },
    addproductNumber() {
      this.productNumber++;
    },
    subproductNumber() {
      if (this.productNumber <= 1) return;
      this.productNumber--;
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
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
          if (res.data.success) {
            this.isLoading = false;
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
          }
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
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.product = res.data.product;
        }
      });
    }
  },
  created() {
    this.getProduct();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.emitter.on('update-product', (id) => {
      this.updateProduct(id);
    });

    this.emitter.on('update-collect', () => {
      this.isCollect();
    });
  }
};
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.productText h1 {
  font-size: 2rem;
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

.love {
  transition: all 0.4 ease;
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

.giftbox {
  font-size: 0.6rem;
}

@media screen and (max-width: 390px) {
  .stitle h1 {
    font-size: 1.2rem;
  }
}

.productDetail img {
  width: 100%;
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
