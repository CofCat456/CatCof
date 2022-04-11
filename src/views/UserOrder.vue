<template>
  <div class="container">
    <div class="mx-5 my-3"></div>
    <div class="row justify-content-center">
      <div class="col-12">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-end mx-5 px-4">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/User/cart">購物車</router-link>
            </li>
            <li class="breadcrumb-item active colorBlue" aria-current="page">
              填寫訂單資料
            </li>
          </ol>
        </nav>
      </div>
      <shopProcess status="輸入"></shopProcess>
      <div class="col-10 my-5">
        <h1 class="fw-bold text-center mb-4">訂購人資訊</h1>
      </div>
      <Form
        @submit="createOrder()"
        v-slot="{ errors }"
        class="d-flex flex-column align-items-center"
      >
        <div
          class="col-12 mb-5 px-lg-0 px-xl-5 d-flex flex-wrap justify-content-center align-items-center"
        >
          <div class="col-lg-6 col-12 mb-lg-0 mb-sm-5 px-3">
            <div class="p-3 p-sm-5 mx-auto rounded bg-white shadow-sm">
              <h3 class="text-center mb-4 fs-5">購物明細</h3>
              <table class="table text-center mb-5">
                <thead>
                  <tr>
                    <td scope="col" width="40%">商品資訊</td>
                    <td scope="col" width="20%">數量</td>
                    <td scope="col" width="40%">金額</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in this.cart.carts" :key="item">
                    <td scope="row" class="text-start">
                      {{ item.product.title }}
                    </td>
                    <td>{{ item.qty }}</td>
                    <td>NT ${{ $filters.currency(item.total) }}</td>
                  </tr>
                </tbody>
              </table>
              <p
                v-if="this.cart.isFreight"
                :class="[
                  ['d-block'],
                  !this.cart.isFreight && 'text-decoration-line-through'
                ]"
              >
                + 運費NT {{ this.freight }}
              </p>
              <p class="fs-5 mb-2 text-center">
                總金額NT ${{
                  this.cart.isFreight
                    ? $filters.currency(
                        parseInt(this.cart.final_total) + this.freight
                      )
                    : $filters.currency(parseInt(this.cart.final_total))
                }}
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 px-3">
            <!-- 姓名 -->
            <div class="mb-3">
              <label for="name" class="form-label"
                >訂購人姓名
                <span class="text-danger fw-bold">*</span>
              </label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                v-model="form.user.name"
                rules="required"
                :class="{ 'is-invalid': errors['姓名'] }"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label"
                >付款方式<span class="text-danger fw-bold">*</span></label
              >
              <Field
                as="select"
                name="付款方式"
                class="form-select"
                rules="required"
                v-model="form.user.payment"
                :class="{ 'is-invalid': errors['付款方式'] }"
              >
                <option value="" selected disabled>
                  選擇付款方式<span class="text-danger fw-bold">*</span>
                </option>
                <option value="信用卡">VISA信用卡</option>
                <option value="ATM轉帳">ATM轉帳</option>
              </Field>
              <ErrorMessage
                name="付款方式"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <!-- 電話 -->
            <div class="mb-3">
              <label for="phone" class="form-label"
                >聯絡電話<span class="text-danger fw-bold">*</span></label
              >
              <Field
                id="phone"
                name="電話"
                type="text"
                class="form-control"
                :rules="isPhone"
                placeholder="請輸入聯絡電話"
                v-model="form.user.tel"
                :class="{ 'is-invalid': errors['電話'] }"
              />
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label"
                >Email<span class="text-danger fw-bold">*</span></label
              >
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                rules="email|required"
                placeholder="請輸入Email"
                v-model="form.user.email"
                :class="{ 'is-invalid': errors['email'] }"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label"
                >地址<span class="text-danger fw-bold">*</span></label
              >
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                placeholder="請輸入地址"
                v-model="form.user.address"
                rules="required"
                :class="{ 'is-invalid': errors['地址'] }"
              />
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="validationTextarea" class="form-label">備註</label>
              <textarea
                class="form-control"
                id="validationTextarea"
                placeholder="如有特殊需求請寫備註欄"
                v-model="form.user.remark"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-10 d-flex justify-content-between mb-2 mb-md-5">
          <router-link
            to="/User/cart"
            class="btn btn-custom-Blue px-1 px-sm-2 px-md-4 py-2"
            ><i class="bi bi-caret-left me-1"></i>返 回 購 物 車</router-link
          >

          <button
            type="submit"
            class="btn btn-custom-Orange px-1 px-sm-2 px-md-4 py-2"
            :disabled="Object.keys(errors).length !== 0"
          >
            送 出 訂 單
            <i class="bi bi-caret-right ms-1"></i>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
label,
option {
  letter-spacing: 2px;
  font-weight: 700;
}

input,
textarea {
  letter-spacing: 2px;
}

/* 左邊 */
h3 {
  letter-spacing: 2px;
}

.table > :not(caption) > * > * {
  padding: 0.75rem 0.5rem;
}

.btn {
  font-weight: 700;
  line-height: 1.7;
}

.input-group span {
  max-width: 80px;
  font-size: 1rem;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ced4da;
}

.btn-custom-Blue {
  border: 1px solid #24395b;
  color: #24395b !important ;
}

.btn-custom-Blue:hover {
  color: #fff !important;
  background-color: #24395b;
}

.btn-custom-Orange {
  color: #fff;
  background-color: #24395b;
}

.btn-custom-Orange:hover {
  color: #000;
  background-color: #ff9800;
}
</style>

<script>
import shopProcess from '../components/ShopProcess.vue';
import { filterFreight, checkFrieht } from '@/methods/order';

export default {
  inject: ['emitter'],
  components: {
    shopProcess
  },
  data() {
    return {
      cart: {},
      form: {
        user: {}
      },
      freight: 300
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cart = { ...res.data.data };
        this.cart.carts = [...filterFreight(res.data.data.carts)];
        this.cart.isFreight = checkFrieht(res.data.data);
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = { ...this.form };
      this.$swal({
        title: '確認送出訂單嗎?',
        text: '送出後將無法修改訂單資料',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '送出!',
        cancelButtonText: '晚點再說'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.post(url, { data: order }).then((res) => {
            this.emitter.emit('update-cartNumber');
            this.$router.push(`/User/Order/${res.data.orderId}`);
          });
        }
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>
