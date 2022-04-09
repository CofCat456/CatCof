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
            <span>編輯優惠卷</span>
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
                <label for="title" class="form-label">名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="優惠卷名稱"
                  v-model="tempCoupon.title"
                />
              </div>
              <div class="row gx-3">
                <h5 class="px-2">優惠卷資訊</h5>
                <div class="mt-2 mb-3 col-md-6 px-2">
                  <label for="percent" class="form-label">折價比例</label>
                  <input
                    type="number"
                    class="form-control"
                    id="percent"
                    placeholder="百分比"
                    v-model="tempCoupon.percent"
                  />
                </div>
                <div class="mt-2 mb-3 col-md-6 px-2">
                  <label for="due_date" class="form-label">到期日</label>
                  <input
                    type="number"
                    class="form-control"
                    id="due_date"
                    placeholder="請使用 Unix Timestamp 格式"
                    v-model="tempCoupon.due_date"
                  />
                </div>
              </div>
              <div class="row gx-3">
                <div class="mb-3 col">
                  <label for="code" class="form-label">優惠碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="code"
                    placeholder="Code"
                    v-model="tempCoupon.code"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempCoupon.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
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
            @click="$emit('update-coupon', tempCoupon)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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

<script>
import ModalMixin from '@/mixins/ModalMixin';

export default {
  props: {
    Coupon: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      modal: {},
      tempCoupon: {}
    };
  },
  watch: {
    Coupon() {
      this.tempCoupon = this.Coupon;
    }
  },
  mixins: [ModalMixin]
};
</script>
