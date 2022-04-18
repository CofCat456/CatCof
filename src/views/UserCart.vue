<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-3xq5u6jldre">
      <div class="ldio-dwik2dnj2i">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="container">
    <div class="mx-5 my-3"></div>
    <div class="row justify-content-center">
      <div class="col-11 mx-5 my-3">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-end">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active colorBlue" aria-current="page">
              購物車
            </li>
          </ol>
        </nav>
      </div>
      <shopProcess status="確認"></shopProcess>
      <div class="col-lg-10 col-md-12 col-11 my-5">
        <h1 class="fw-bold text-center mb-4">購物車</h1>
        <main
          v-if="!this.cart.carts || this.cart.carts.length !== 0"
          class="mx-auto bg-white px-md-5 px-3 py-5 text-center rounded-3 shadow"
        >
          <table class="table position-relative">
            <thead>
              <tr>
                <td width="40%" scope="col" class="py-3">商品資訊</td>
                <td width="35%" scope="col" class="py-3">數量</td>
                <td width="20%" scope="col" class="py-3">金額</td>
                <td width="5%" scope="col" class="py-3"></td>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="text-start">
                  <div class="row align-items-center">
                    <div class="col-4 d-md-block d-none">
                      <img
                        :src="item.product.imageUrl"
                        :alt="item.product.title + '的商品照片'"
                        @click="getProductId(item.product.id)"
                      />
                    </div>
                    <p class="col-md-8 m-0 px-md-2 fw-bold">
                      {{ item.product.title }}
                    </p>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <div class="input-group d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn px-0 px-sm-1 px-md-2 border"
                        @click="minusCart(item)"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                      <span class="form-control text-center px-0 p-md-1">{{
                        item.qty
                      }}</span>
                      <button
                        type="button"
                        class="btn px-0 px-sm-1 px-md-2 border"
                        @click="addCart(item)"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>{{ $filters.currency(item.total) }} 元</h5>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-red bg-transparent border-0"
                    @click="deleteCart(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row justify-content-end">
            <div class="col-12 text-end mb-1">
              <p class="m-0">
                <small class="d-block text-gray">
                  商品金額NT ${{ $filters.currency(this.cart.total) }}</small
                >
                <small v-if="is_UseCoupon" class="d-block">
                  - 使用優惠折扣NT ${{
                    $filters.currency(
                      this.cart.total - parseInt(this.cart.final_total)
                    )
                  }}</small
                >
                <small
                  :class="[
                    ['d-block'],
                    !this.cart.isFreight && 'text-decoration-line-through'
                  ]"
                >
                  + 運費NT {{ this.freight }}</small
                >
              </p>
            </div>
            <div class="col-12 mb-3">
              <p class="fs-5 text-end text-danger">
                總金額NT ${{
                  this.cart.isFreight
                    ? $filters.currency(
                        parseInt(this.cart.final_total) + this.freight
                      )
                    : $filters.currency(parseInt(this.cart.final_total))
                }}
              </p>
            </div>
            <div class="col-md-10 col-11 col-md-6 col-lg-5">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入折扣碼"
                  v-model="this.code"
                />
                <button
                  type="button"
                  class="btn btn-discount btn-outline-success input-group-text"
                  @click="addCoupon(true, this.code)"
                >
                  套用優惠卷
                </button>
              </div>
            </div>
          </div>
        </main>
        <main
          v-else
          class="mx-auto bg-white px-md-5 px-2 py-5 text-center rounded-3 shadow"
        >
          <h3 class="mb-3">購物車內沒有商品</h3>
          <router-link
            to="/User/ProductList"
            class="btn btn-custom-Orange px-5 py-1"
            >前 往 購 物</router-link
          >
        </main>
      </div>
      <div
        v-if="!this.cart.carts || this.cart.carts.length !== 0"
        class="col-md-10 col-11 d-flex justify-content-between mb-5"
      >
        <router-link
          to="/User/ProductList"
          class="btn btn-custom-Blue px-md-4 py-2"
          ><i class="bi bi-caret-left me-1"></i>繼 續 購 物</router-link
        >
        <button
          class="btn btn-outline-danger px-md-4 py-2"
          @click="deleteAllCart()"
        >
          清 空 購 物 車
        </button>
        <router-link to="/User/Order" class="btn btn-custom-Orange px-md-4 py-2"
          >填 寫 訂 單<i class="bi bi-caret-right ms-1"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  cursor: pointer;
}
.btn {
  font-weight: 700;
  line-height: 1.7;
}

@media screen and (max-width: 414px) {
  .btn {
    padding: 0.5rem 0.2rem;
  }
}

/* 表格內容 */
main {
  max-width: 900px;
}

.input-group span {
  max-width: 80px;
  font-size: 1rem;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ced4da;
}
</style>

<script>
import shopProcess from '../components/ShopProcess.vue';
import { filterFreight, checkFrieht } from '@/methods/order';
import { savaLocalStorage, getLocalStorage } from '@/methods/localStorage';

export default {
  inject: ['emitter'],
  components: {
    shopProcess
  },
  data() {
    return {
      cart: {},
      freight: 300,
      code: '',
      is_UseCoupon: false,
      isLoading: false
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          if (res.data.data.carts.length < 1) {
            localStorage.removeItem('CouponCode');
          }
          this.cart = { ...res.data.data };
          this.cart.carts = [...filterFreight(res.data.data.carts)];
          this.cart.isFreight = checkFrieht(res.data.data);
          this.checkCoupon(getLocalStorage('CouponCode'));
        }
      });
    },
    minusCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;

      if (item.qty <= 1) {
        this.$swal({
          showConfirmButton: true,
          icon: 'error',
          title: '數字型別錯誤',
          Text: '請輸入數字唷!'
        });
        return;
      }
      const cart = {
        product_id: item.product_id,
        qty: --item.qty
      };
      this.$http
        .put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer);
                toast.addEventListener('mouseleave', this.$swal.resumeTimer);
              },
              icon: 'success',
              title: '更新購物車成功!'
            });
            this.getCart();
          }
        })
        .catch((err) => {
          this.$swal({
            showConfirmButton: true,
            icon: 'error',
            title: '更新失敗',
            Text: err
          });
        });
    },
    addCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      const cart = {
        product_id: item.product_id,
        qty: ++item.qty
      };
      this.$http
        .put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer);
                toast.addEventListener('mouseleave', this.$swal.resumeTimer);
              },
              icon: 'success',
              title: '更新購物車成功!'
            });
            this.getCart();
          }
        })
        .catch((err) => {
          this.$swal({
            showConfirmButton: true,
            icon: 'error',
            title: '更新失敗',
            Text: err
          });
        });
    },
    deleteCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.$http
        .delete(url)
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
              title: '已經移出購物車'
            });
            this.getCart();
            this.emitter.emit('update-cartNumber');
          }
        })
        .catch((err) => {
          this.$swal({
            showConfirmButton: true,
            icon: 'error',
            title: '清空失敗',
            Text: err
          });
        });
    },
    deleteAllCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$swal({
        title: '確定刪除所有商品嗎?',
        text: '你將清空購物車',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '我想清楚了',
        cancelButtonText: '再想想'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('已經清空囉!', '你將到宇宙深處才能找到他們...', 'success');
          this.$http
            .delete(url)
            .then((res) => {
              if (res.data.success) {
                localStorage.removeItem('CouponCode');
                this.getCart();
                this.emitter.emit('update-cartNumber');
              }
            })
            .catch((err) => {
              this.$swal({
                showConfirmButton: true,
                icon: 'error',
                title: '清空失敗',
                Text: err
              });
            });
        }
      });
    },
    addCoupon(isAdd, code) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.isLoading = true;
      const tempCoupon = {
        code: code
      };

      this.$http.post(api, { data: tempCoupon }).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.cart.final_total = res.data.data.final_total;
          this.is_UseCoupon = true;
          savaLocalStorage('CouponCode', code);
          if (isAdd) {
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
              title: '套用優惠卷成功!'
            });
          }
        } else {
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
            icon: 'error',
            title: res.data.message
          });
        }
      });
    },
    checkCoupon(CouponCode) {
      if (CouponCode !== null) {
        this.is_UseCoupon = true;
        this.code = CouponCode;
        this.addCoupon(false, this.code);
      }
    },
    getProductId(id) {
      this.$router.push(`/User/product/${id}`);
    }
  },
  created() {
    this.getCart();
  },
  mounted() {
    this.emitter.on('update-cart', () => {
      this.getCart();
    });
  }
};
</script>
