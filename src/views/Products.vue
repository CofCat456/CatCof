<template>
  <ToastMessage></ToastMessage>
  <Loading :active="isLoading"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModel(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="250">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="120">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>{{ $filters.currency(item.origin_price) }}</td>
        <td>{{ $filters.currency(item.price) }}</td>
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
    @emit-Adpages="getProducts"
    @emit-AdPrev="getProducts"
    @emit-AdNext="getProducts"
  ></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
    @dealWith-product="dealWithProducts"
  ></ProductModal>
  <DeleteModel
    ref="deleteModal"
    :item="tempProduct.title"
    :id="tempProduct.id"
    @del-item="DeleteProduct"
  ></DeleteModel>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DeleteModel from '../components/Delete.vue';
import ToastMessage from '../components/ToastMessages.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    ProductModal,
    DeleteModel,
    ToastMessage,
    Pagination
  },
  inject: ['emitter'],
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    };
  },
  methods: {
    openModel(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModel();
    },
    openDeleteModel(item) {
      this.tempProduct = { ...item };
      const deleteProductComponent = this.$refs.deleteModal;
      deleteProductComponent.showModel();
    },
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productkComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        productkComponent.hideModel();
        if (httpMethod === 'post') {
          this.$httpMessageState(res, `新增 ${item.title} 產品`);
        } else {
          this.$httpMessageState(res, `更新 ${item.title} 產品`);
        }
        if (res.data.success) {
          this.getProducts();
        }
      });
    },
    dealWithProducts(item) {
      const NewTemp = item;
      this.$swal({
        title: '確定要進行轉換',
        text: '請確認轉換模式',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '多種咖啡',
        cancelButtonText: '一般模式'
      }).then((result) => {
        if (result.isConfirmed) {
          if (!Array.isArray(NewTemp.altitude)) {
            NewTemp.altitude = item.altitude.split(',');
          }
          if (!Array.isArray(NewTemp.detail)) {
            NewTemp.detail = item.detail.split(',');
          }
          if (!Array.isArray(NewTemp.link)) {
            NewTemp.link = item.link.split(',');
          }
          if (!Array.isArray(NewTemp.roast)) {
            NewTemp.roast = item.roast.split(',');
          }
          if (!Array.isArray(NewTemp.Soli)) {
            NewTemp.Soli = item.Soli.split(',');
          }
          if (!Array.isArray(NewTemp.refined)) {
            NewTemp.refined = item.refined.split(',');
          }
          if (!Array.isArray(NewTemp.area)) {
            NewTemp.area = item.area.split(',');
          }
          if (!Array.isArray(NewTemp.country)) {
            NewTemp.country = item.country.split(',');
          }
          this.updateProduct(NewTemp);
        } else {
          if (Array.isArray(NewTemp.altitude)) {
            NewTemp.altitude = item.altitude.toString();
          }
          if (Array.isArray(NewTemp.detail)) {
            NewTemp.detail = item.detail.toString();
          }
          if (Array.isArray(NewTemp.link)) {
            NewTemp.link = item.link.toString();
          }
          if (Array.isArray(NewTemp.roast)) {
            NewTemp.roast = item.roast.toString();
          }
          if (Array.isArray(NewTemp.Soli)) {
            NewTemp.Soli = item.Soli.toString();
          }
          if (Array.isArray(NewTemp.refined)) {
            NewTemp.refined = item.refined.toString();
          }
          if (Array.isArray(NewTemp.area)) {
            NewTemp.area = item.area.toString();
          }
          if (Array.isArray(NewTemp.country)) {
            NewTemp.country = item.country.toString();
          }
          this.updateProduct(NewTemp);
        }
      });
    },
    DeleteProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      const deleteProductComponent = this.$refs.deleteModal;
      this.$http.delete(api).then((res) => {
        deleteProductComponent.hideModel();
        this.$httpMessageState(res, '刪除產品');
        this.getProducts();
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
