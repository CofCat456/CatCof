<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-11 mx-5 my-3">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-end">
            <li class="breadcrumb-item">
              <router-link to="/"><i class="bi bi-house"></i></router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/User/ProductList">產品列表</router-link>
            </li>
            <li class="breadcrumb-item active colorBlue" aria-current="page">
              {{ Category }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <Category
    EnTitle="Category"
    ChTitle="分類列表"
    :Product="Cproduct"
    :CategoryText="Category"
  ></Category>
  <aboutProduct></aboutProduct>
</template>

<style scoped>
.wrap .text h1 {
  margin-bottom: 7rem;
  font-size: 3rem;
  font-weight: 700;
}

.img-fluid {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>

<script>
import Category from '../components/ProductCard.vue';
import aboutProduct from '../components/AboutProduct.vue';
import { dealCategory } from '@/methods/filters';

export default {
  components: {
    Category,
    aboutProduct
  },
  data() {
    return {
      Cproduct: [],
      Category: ''
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.Cproduct = dealCategory(Object.values(res.data.products));
        this.Cproduct = this.Cproduct.filter(
          (item) => item.unit === this.Category
        );
      });
    }
  },
  created() {
    this.Category = this.$route.params.id;
    this.getProducts();
  }
};
</script>
