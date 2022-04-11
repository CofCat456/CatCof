<template>
  <div class="container">
    <div class="mx-5 my-3"></div>
    <div class="row justify-content-center">
      <div class="col-11 mx-5 my-3">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-end">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/User/cart">購物車</router-link>
            </li>
            <li class="breadcrumb-item active colorBlue" aria-current="page">
              <router-link to="/User/Order">填寫訂單資料</router-link>
            </li>
            <li class="breadcrumb-item active colorBlue" aria-current="page">
              送出訂單
            </li>
          </ol>
        </nav>
      </div>
      <shopProcess status="送出"></shopProcess>
      <div class="col-10 my-5">
        <h1 class="fw-bold text-center mb-4">訂單成立</h1>
      </div>
      <div class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <div class="col-lg-9 col-md-12 px-3">
            <section class="mb-5 px-md-5 px-md-3 px-3 py-5 rounded shadow bg-white">
              <h3 class="h5 text-center fw-bold mt-3">訂單編號</h3>
              <p class="text-center text-danger fw-bold mb-4 pb-3 fs-5">
                {{ this.order.id }}
              </p>
              <p class="fs-5 text-center fw-bold mt-3 mb-2">訂購人資訊</p>
              <table
                v-if="Object.keys(this.order).length !== 0"
                class="table table-borderless mb-5 text-break"
              >
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      姓名
                    </th>
                    <td class="px-3 border" width="70%">
                      {{ this.order.user['name'] }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      電話
                    </th>
                    <td class="px-2 px-md-3 border" width="70%">
                      {{ this.order.user['tel'] }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      E-mail
                    </th>
                    <td class="px-3 border" width="70%">
                      {{ this.order.user['email'] }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      地址
                    </th>
                    <td class="px-3 border" width="70%">
                      {{ this.order.user['address'] }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      付款方式
                    </th>
                    <td class="px-3 border" width="70%">
                      {{ this.order.user['payment'] }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="fs-6 px-3 fw-bold border"
                      width="35%"
                    >
                      備註
                    </th>
                    <td
                      v-if="this.order.user['remark']"
                      class="px-3 border"
                      width="70%"
                    >
                      {{ this.order.user['remark'] }}
                    </td>
                    <td v-else class="px-2 px-md-3 border" width="70%">無</td>
                  </tr>
                </tbody>
              </table>
              <p class="fs-5 text-center fw-bold mt-3 mb-2">商品項目</p>
              <table
                v-if="Object.keys(this.order).length !== 0"
                class="table table-borderless mb-5 text-center text-break"
              >
                <thead>
                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border fw-bold"
                      width="40%"
                    >
                      品名
                    </th>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border fw-bold"
                      width="20%"
                    >
                      數量
                    </th>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border fw-bold"
                      width="30%"
                    >
                      金額
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in this.order.products" :key="item.id">
                    <td scope="row" class="border ps-2 text-strat">
                      {{ item.product.title }}
                    </td>
                    <td class="px-2 px-md-3 border">{{ item.qty }} 個</td>
                    <td class="px-2 px-md-3 border">
                      NT ${{ $filters.currency(item.total) }}元
                    </td>
                  </tr>
                  <tr v-if="this.order.isFreight">
                    <td scope="row" class="border ps-2 text-strat">運費</td>
                    <td class="px-2 px-md-3 border">1 趟</td>
                    <td class="px-2 px-md-3 border">
                      NT ${{ this.freight }}元
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="fs-5 text-center mb-3">
                總金額NT ${{ $filters.currency(this.order.total) }}元
              </p>
            </section>
          </div>
          <div class="col-10 d-flex justify-content-center mb-5">
            <router-link
              to="/User/ProductList"
              class="btn btn-custom-Orange px-3 py-1"
              >前 往 付 款</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  font-weight: 700;
  line-height: 1.7;
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
import { filterFreight } from '@/methods/order';

export default {
  components: {
    shopProcess
  },
  data() {
    return {
      order: {},
      product: [],
      freight: 300
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`;
      this.$http.get(url).then((res) => {
        this.order = { ...res.data.order };
        this.order.products = [
          ...filterFreight(Object.values(this.order.products))
        ];
        this.order.isFreight = this.checkFrieht(this.order);
      });
    },
    checkFrieht(order) {
      let isFreight = true;
      if (
        order.total >= 6000 ||
        order.products.some((e) => e.product.CategoryArray.includes('免運費'))
      ) {
        isFreight = false;
      }
      return isFreight;
    }
  },
  mounted() {
    this.getOrder();
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
      title: '訂單成功建立!'
    });
  }
};
</script>
