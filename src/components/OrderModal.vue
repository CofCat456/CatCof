<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>編輯訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12 px-3">
              <div class="mb-3">
                <label for="id" class="form-label">訂單編號</label>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  disabled
                  placeholder="訂單編號"
                  v-model="tempOrder.id"
                />
              </div>
              <div class="row gx-3">
                <h5 class="px-2">顧客資料（可更改）</h5>
                <div class="mt-2 mb-3 col-md-6 px-2">
                  <label for="name" class="form-label">姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="顧客姓名"
                    v-model="tempOrder.user.name"
                  />
                </div>
                <div class="mb-3 col-md-6 px-2">
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    class="form-control"
                    id="email"
                    placeholder="顧客信箱"
                    v-model="tempOrder.user.email"
                  />
                </div>
              </div>
              <div class="row gx-3">
                <div class="mb-3 col">
                  <label for="tel" class="form-label">電話</label>
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    placeholder="顧客電話"
                    v-model="tempOrder.user.tel"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="payment" class="form-label">付款方式</label>
                  <select
                    id="payment"
                    class="form-control"
                    v-model="tempOrder.user.payment"
                  >
                    <option
                      v-for="item in payment"
                      :key="item"
                      :value="item"
                      :selected="tempOrder.user.payment === item"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="顧客地址"
                    v-model="tempOrder.user.address"
                  />
                </div>
              </div>
              <hr />
              <div class="row gx-3">
                <h5 class="px-2">訂單資訊</h5>
                <div class="mt-2 mb-3 col-md-6 px-2">
                  <label for="total" class="form-label">訂單總價格(不含運)</label>
                  <div class="form-control">
                    <p>
                      {{ tempOrder.total }}
                    </p>
                  </div>
                </div>
                <div class="mt-2 mb-3 col-md-6 px-2">
                  <label class="form-label">是否付款 (可更改）</label>
                  <div class="form-control">
                    <input
                      type="radio"
                      id="未付款"
                      value="false"
                      v-model="tempOrder.is_paid"
                    />
                    <label for="未付款">未付款</label>
                    <input
                      type="radio"
                      id="已付款"
                      value="true"
                      v-model="tempOrder.is_paid"
                      class="ms-2"
                    />
                    <label for="已付款">已付款</label>
                  </div>
                </div>
              </div>
              <div v-if="tempOrder.products" class="row gx-3">
                <div class="mb-3 col">
                  <label for="num" class="form-label">產品數量</label>
                  <div class="form-control">
                    <p>
                      {{ Object.keys(tempOrder.products).length }}
                    </p>
                  </div>
                </div>
                <div class="mb-3 col">
                  <label for="payment" class="form-label">產品列表</label>
                  <select class="form-control">
                    <option v-for="item in tempOrder.products" :key="item">
                      {{ item.product.title }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-order', tempOrder)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from '@/mixins/ModalMixin';

export default {
  props: {
    Order: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      modal: {},
      tempOrder: {
        user: {}
      },
      payment: ['VISA信用卡', 'ATM轉帳']
    };
  },
  watch: {
    Order() {
      this.tempOrder = JSON.parse(JSON.stringify(this.Order));
    }
  },
  mixins: [ModalMixin]
};
</script>

<style scoped>
span {
  color: white;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
