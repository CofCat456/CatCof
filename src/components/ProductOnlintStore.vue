<template>
  <div class="container-fluid my-5 mt-md-3 py-5 pt-md-0">
    <div class="row d-flex justify-content-center">
      <div class="col-xxl-10 col-md-12 col-11 mt-5 mb-2 px-md-5 px-4">
        <span class="d-flex align-items-sm-end">
          <h1 class="me-2 font-en">Online Store</h1>
        </span>
      </div>
      <div class="col-lg-9 col-md-10 col-12 my-4 pb-5 d-flex flex-wrap">
        <div
          v-for="item in productCategoryList"
          :key="item.title"
          class="item col-lg-4 col-12 mb-lg-0 mb-md-4 mb-3 px-xl-4 px-md-3 px-5"
          @click="this.getProductCategory(item.title)"
        >
          <div class="overflow-hidden imgBox">
            <img :src="item.src" />
          </div>
          <div class="text px-md-4 px-4 py-md-4 py-3">
            <h5 class="fw-bold my-2 px-1">{{ item.title }}</h5>
            <p class="pb-3">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  cursor: pointer;
}

.item p {
  font-size: 0.875rem;
}

.item img {
  width: 100%;
  object-fit: cover;
  transition: all 0.6s linear;
}

.item .imgBox {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.item img:hover {
  transform: scale(1.05);
  opacity: 0.8;
}

.text {
  background: #dee1e7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      productCategoryList: [
        {
          title: '咖啡豆',
          src: require('../assets/store/coffeeBeans.jpg'),
          text: '職人親自挑選咖啡豆，提供客人最好的享受，讓我帶您走進手沖咖啡的世界吧！'
        },
        {
          title: '冷萃咖啡',
          src: require('../assets/store/ColdBrew.jpg'),
          text: '炎熱的夏天，想喝點冰的嗎？試試冷萃咖啡吧！使用冷水浸泡過，喝上一口便可抵擋炎熱天氣！'
        },
        {
          title: '精品禮盒',
          src: require('../assets/store/BoutiqueGift.jpg'),
          text: '精品咖啡豆禮盒，不論是各種場合送禮都適合，趕快購買價格甜美的精品咖啡豆禮盒吧！'
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
