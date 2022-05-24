<template>
  <LoadingComponent :LoadingState='isLoading' />
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <Breadcrumb :Breadcrumb="Breadcrumb" />
    </div>
  </div>
  <section
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="top-bottom"
  >
    <Category
      EnTitle="Category"
      ChTitle="分類列表"
      :Product="Cproduct"
      :CategoryText="Category"
     />
  </section>
</template>

<script>
import Category from '../components/ProductCard.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import LoadingComponent from '../components/LoadingComponent.vue';

import { dealCategory } from '@/methods/filters';

export default {
  components: {
    Category,
    Breadcrumb,
    LoadingComponent
  },
  data() {
    return {
      Cproduct: [],
      Category: '',
      isLoading: false,
      Breadcrumb: [
        {
          title: '產品列表',
          link: '/User/ProductList'
        }
      ]
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.Cproduct = dealCategory(Object.values(res.data.products));
          this.Cproduct = this.Cproduct.filter(
            (item) => item.unit === this.Category
          );
        }
      });
    }
  },
  created() {
    this.Category = this.$route.params.id;
    this.Breadcrumb.push({ title: this.Category, link: '' });
    this.getProducts();
  }
};
</script>

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
