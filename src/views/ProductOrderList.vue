<template>
  <ToastMessage></ToastMessage>
  <Loading :active="isLoading"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-danger" type="button" @click="DeleteAllOrder()">
      刪除全部訂單
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="450">訂單編號</th>
        <th width="200">顧客姓名</th>
        <th width="150">付款方式</th>
        <th width="120">狀態</th>
        <th width="300">備註</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.user.name }}</td>
        <td>{{ item.user.payment }}</td>
        <td>
          <span
            :class="[item.is_paid === '已付款' ? 'text-success' : 'text-muted']"
            >{{ item.is_paid ? '已付款' : '未付款' }}</span
          >
        </td>
        <td>
          <p>{{ item.remark ? item.remark : '無' }}</p>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModel(item)"
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
    @emit-Adpages="getOrderList"
    @emit-AdPrev="getOrderList"
    @emit-AdNext="getOrderList"
  ></Pagination>
  <OrderModal
    ref="OrderModal"
    :Order="tempOrder"
    @update-order="updateOrder"
  ></OrderModal>
  <DeleteModel
    ref="deleteModal"
    :item="OrderName(tempOrder.user.name)"
    :id="tempOrder.id"
    @del-item="DeleteOrder"
  ></DeleteModel>
</template>

<script>
import OrderModal from '../components/OrderModal.vue';
import DeleteModel from '../components/Delete.vue';
import ToastMessage from '../components/ToastMessages.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    OrderModal,
    DeleteModel,
    ToastMessage,
    Pagination
  },
  inject: ['emitter'],
  data() {
    return {
      orderList: [],
      pagination: {},
      tempOrder: {
        user: {}
      },
      isLoading: false,
      Fright: 300
    };
  },
  methods: {
    openModel(item) {
      this.tempOrder = { ...item };
      const OrderComponent = this.$refs.OrderModal;
      OrderComponent.showModel();
    },
    openDeleteModel(item) {
      this.tempOrder = { ...item };
      const deleteProductComponent = this.$refs.deleteModal;
      deleteProductComponent.showModel();
    },
    getOrderList(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.orderList = res.data.orders;
          this.pagination = res.data.pagination;
        }
      });
    },
    updateOrder(item) {
      this.tempOrder = item;
      // const Email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      // const PhoneNumber = /^(09)[0-9]{8}$/;

      // if (!Email.test(this.tempOrder.user.email)) {
      //   this.tempOrder.user.email = 'error@gmail.com';
      // }

      // if (!PhoneNumber.test(this.tempOrder.user.phone)) {
      //   this.tempOrder.user.phone = '0900000000';
      // }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const OrderComponent = this.$refs.OrderModal;
      this.$http.put(api, { data: this.tempOrder }).then((res) => {
        OrderComponent.hideModel();
        this.$httpMessageState(res, '更新訂單');
        if (res.data.success) {
          console.log(res);
          this.getOrderList();
        }
      });
    },
    DeleteOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      const deleteProductComponent = this.$refs.deleteModal;
      this.$http.delete(api).then((res) => {
        this.$httpMessageState(res, '刪除訂單');
        deleteProductComponent.hideModel();
        this.getOrderList();
      });
    },
    DeleteAllOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      const deleteProductComponent = this.$refs.deleteModal;
      this.$swal({
        title: '確認刪除所有訂單嗎',
        text: '確認後將清除所有訂單，並再也找不回他們...',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '要拼就拼到底',
        cancelButtonText: '冷靜'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('已經清空囉!', '你將到宇宙深處才能找到他們...', 'success');
          this.$http.delete(api).then((res) => {
            deleteProductComponent.hideModel();
            this.getOrderList();
          });
        }
      });
    },
    OrderName(item) {
      return `${item} 的訂單`;
    }
  },
  created() {
    this.getOrderList();
  }
};
</script>
