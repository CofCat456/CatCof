<template>
  <ToastMessage></ToastMessage>
  <Loading :active="isLoading"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModel(true)">
      增加一個優惠卷
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">名稱</th>
        <th width="300">折扣百分比</th>
        <th width="250">到期日</th>
        <th width="250">是否啟用</th>
        <th width="300">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ item.due_date }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModel(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModel(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination
    :pages="pagination"
    @emit-Adpages="getCoupon"
    @emit-AdPrev="getCoupon"
    @emit-AdNext="getCoupon"
  ></Pagination>
  <CouponModal
    ref="CouponModal"
    :Coupon="tempCoupon"
    @update-coupon="updateCoupon"
  ></CouponModal>
  <DeleteModel
    ref="deleteModal"
    :item="tempCoupon.title"
    :id="tempCoupon.id"
    @del-item="DeleteCoupon"
  ></DeleteModel>
</template>

<script>
import CouponModal from '../components/CouponModal.vue';
import DeleteModel from '../components/Delete.vue';
import ToastMessage from '../components/ToastMessages.vue';
import Pagination from '../components/Pagination.vue';
import { date } from '@/methods/filters';

export default {
  components: {
    CouponModal,
    DeleteModel,
    ToastMessage,
    Pagination
  },
  inject: ['emitter'],
  data() {
    return {
      coupons: [],
      pagination: {},
      isLoading: false,
      tempCoupon: {},
      isNew: false
    };
  },
  methods: {
    openModel(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const CouponComponent = this.$refs.CouponModal;
      CouponComponent.showModel();
    },
    openDeleteModel(item) {
      this.tempCoupon = { ...item };
      const deleteProductComponent = this.$refs.deleteModal;
      deleteProductComponent.showModel();
    },
    getCoupon(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.coupons.forEach((e) => {
            e.due_date = date(e.due_date);
          });
          this.pagination = res.data.pagination;
        }
      });
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      // 新增;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      // // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = 'put';
      }
      const CouponComponent = this.$refs.CouponModal;
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        CouponComponent.hideModel();
        if (httpMethod === 'post') {
          this.$httpMessageState(res, '新增優惠卷');
        } else {
          this.$httpMessageState(res, '編輯優惠卷');
        }

        if (res.data.success) {
          this.getCoupon();
        }
      });
    },
    DeleteCoupon(id) {
      console.log(id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      const deleteCouponComponent = this.$refs.deleteModal;
      this.$http.delete(api).then((res) => {
        deleteCouponComponent.hideModel();
        this.$httpMessageState(res, '刪除優惠卷‘');
        this.getCoupon();
      });
    },
    convertDate(Unix) {
      const date = new Date(Unix * 1000);
      return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
    }
  },
  created() {
    this.getCoupon();
  }
};
</script>
