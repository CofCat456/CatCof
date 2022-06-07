<template>
  <ul
    class="btn-custom-ul position-fixed d-flex flex-column justify-content-around align-items-center"
  >
    <li class="my-1">
      <button
        type="button"
        class="love"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i class="bi bi-heart position-relative"
          ><span
            :class="[['position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'], collects.length === 0 && 'd-none']"
            >+{{ collects.length }}
          </span></i
        >
      </button>
    </li>
    <li class="my-1">
      <router-link to="/User/cart"
        ><i class="bi bi-cart3 position-relative"
          ><span
           :class="[['position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'], cartNumber === 0 && 'd-none']"
            >+{{ cartNumber }}</span
          ></i
        ></router-link
      >
    </li>
  </ul>
  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <div class="row align-items-center justify-content-between w-100">
        <div class="col-10">
          <h4 class="d-in;one">我的收藏</h4>
        </div>
        <div class="col-2 text-end">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
    <div class="offcanvas-body">
      <ul v-if="this.collects.length > 0" class="mb-3">
        <li
          v-for="(item, index) in collects"
          :key="item.id"
          class="row justify-content-center align-items-center mb-2 pb-2 border-bottom"
        >
          <div
            class="col-2 p-0 ms-2 me-1 d-sm-bolck"
            @click="getProducts(item.id)"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img :src="item.imageUrl" class="w-100" :alt="item.title + '的照片'" />
          </div>
          <p class="col-5 m-0 px-1 py-0 text-center">
            {{ item.title }}
            <br />
            ${{ $filters.currency(item.price) }}元
          </p>
          <div class="col-2 col-sm-2 px-1">
            <input
              type="number"
              min="1"
              v-model="item.qty"
              class="form-control w-100 text-center py-1"
            />
          </div>
          <div class="col-2 p-0 ps-sm-1">
            <button
              type="button"
              class="btn fs-4"
              @click="addCart(item.id, item.qty, index)"
            >
              <i class="bi bi-cart3"></i>
            </button>
          </div>
        </li>
      </ul>
      <div v-else class="w-100 text-center mb-5 px-3 py-2">
        <h4>目前無收藏商品唷！</h4>
      </div>
      <div class="row">
        <div class="col-6 px-2">
          <button
            type="button"
            class="btn btn-custom-Blue w-100 px-1 px-md-4 py-2"
            @click="this.$router.push('/User/ProductList')"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            繼 續 選 購
          </button>
        </div>
        <div class="col-6 px-2">
          <button
            type="button"
            class="btn btn-custom-Brown w-100 px-1 px-sm-2 px-md-4 py-2"
            @click="this.$router.push('/User/cart')"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            填 寫 訂 單
          </button>
        </div>
        <div class="col-12 mt-2 px-2">
          <button
            type="button"
            class="btn btn-outline-danger w-100 px-1 px-sm-2 px-md-4 py-2"
            @click="DeleteAllCollects()"
            :disabled="this.collects.length < 1"
          >
            清 空 收 藏
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { savaLocalStorage, getLocalStorage } from '@/methods/localStorage';

export default {
  inject: ['emitter'],
  data() {
    return {
      collects: [],
      cartNumber: 0,
      isLoading: false
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.cartNumber = res.data.data.carts.length;
        }
      });
    },
    addCart(id, qty, index) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      const cart = {
        product_id: id,
        qty: qty
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
            // 更新LocalStorage
            savaLocalStorage('favoriteList', this.collects);
            // 更新fixedbutton 購物車數量
            this.getCart();
            // 更新購物車頁面
            this.emitter.emit('update-cart');
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
    getProducts(id) {
      this.emitter.emit('update-product', id);
      this.$router.push(`/User/product/${id}`);
    },
    DeleteAllCollects() {
      this.collects = [];
      savaLocalStorage('favoriteList', this.collects);
      this.emitter.emit('update-collect');
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
        title: '已經清空收藏囉'
      });
    }
  },
  mounted() {
    this.getCart();
    if (getLocalStorage('favoriteList') !== null) {
      this.collects = getLocalStorage('favoriteList');
    }
    this.emitter.on('add-product', (product) => {
      product.qty = 1;
      this.collects.push(product);
      savaLocalStorage('favoriteList', this.collects);
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
        title: '加入收藏成功!'
      });
    });

    this.emitter.on('remove-product', (product) => {
      const collects = getLocalStorage('favoriteList');
      this.collects = Object.values(collects).filter(
        (e) => e.id !== product.id
      );
      savaLocalStorage('favoriteList', this.collects);
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
        title: '移除收藏成功！'
      });
    });

    this.emitter.on('update-cartNumber', () => {
      this.getCart();
    });
  }
};
</script>

<style scoped>
ul {
  padding-left: 0 !important;
}
.offcanvas-start {
  width: 600px;
}

.offcanvas-body img {
  cursor: pointer;
  transition: all 0.4s linear;
}

.offcanvas-body img:hover {
  transform: scale(1.2);
}
.btn-custom-ul {
  width: 70px;
  margin: 0px;
  padding: 1rem 0rem;
  right: 2%;
  bottom: 5%;
  background-color: rgba(36, 57, 91, 1);
  border-radius: 20px;
  z-index: 100000000000000;
}

@media screen and (max-width: 768px) {
  .btn-custom-ul {
    right: 3%;
    bottom: 18%;
  }
}

@media screen and (max-width: 414px) {
  .btn-custom-ul {
    right: 5%;
    bottom: 5%;
  }
}

.love {
  background-color: transparent;
  border: 0;
}

.btn-custom-ul * {
  color: #fff;
  cursor: pointer;
}

.btn-custom-ul a > i,
.btn-custom-ul button > i {
  font-size: 1.4rem;
  transition: all 0.6s;
}

.icon {
  font-size: 0.2rem;
}

.btn-custom-ul a:hover > i,
.btn-custom-ul button:hover > i {
  font-size: 1.6rem;
}

.btn-custom-ul span {
  font-size: 0.4rem;
}

.input-group span {
  max-width: 80px;
  font-size: 1rem;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ced4da;
}
</style>
