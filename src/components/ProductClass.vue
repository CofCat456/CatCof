<template>
  <section>
    <div class="container my-5 py-5">
      <div class="row d-flex justify-content-center px-5">
        <div class="col-12 my-1 px-4">
          <span class="d-flex align-items-end">
            <h1 class="me-md-3 me-2 font-en">Category</h1>
            <p class="py-md-3 py-1 fs-6 fw-bold">類別一覽</p>
          </span>
        </div>
        <div class="col-11 mt-2 mb-lg-5 mb-md-2 px-1 d-flex flex-wrap">
          <div
            v-for="item in productCategoryList"
            :key="item.title"
            class="item col-lg-3 col-6 my-3 px-3"
            @click="getProductCategory(item.title)"
          >
            <img :src="item.src" />
            <p class="ps-4 py-3">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}

@media screen and (max-width: 414px) {
  h1 {
    font-size: 2.2rem;
  }
}

.item {
  overflow: hidden;
}

.item > img {
  width: 100%;
  height: 165px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  object-position: bottom center;
  transition: all 0.4s;
  cursor: pointer;
}

@media screen and (max-width: 414px) {
  .item > img {
    height: 120px;
  }
}

.item > img:hover {
  filter: brightness(80%);
}

.item > p {
  font-size: 1.2rem;
  font-weight: 700;
  background: #dee1e7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media screen and (max-width: 768px) {
  .item > p {
    font-size: 1rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      productCategoryList: [
        {
          title: '咖啡豆',
          src: require('../assets/Class/coffeeBeans.jpg')
        },
        {
          title: '濾掛咖啡',
          src: require('../assets/Class/filtercoffee.jpg')
        },
        {
          title: '冷萃咖啡',
          src: require('../assets/Class/ColdBrew.jpg')
        },
        {
          title: '精品禮盒',
          src: require('../assets/Class/BoutiqueGift.jpg')
        }
      ]
    };
  },
  methods: {
    getProductCategory(id) {
      this.$router.push(`/User/category/${id}`);
    }
  }
};
</script>
