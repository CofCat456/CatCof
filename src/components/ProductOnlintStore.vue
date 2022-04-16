<template>
  <section class="pt-4">
    <div class="container-fluid my-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-11 my-2 px-md-5 px-4">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-2 font-en">Online Store</h1>
          </span>
        </div>
        <div class="col-lg-9 col-md-10 col-12 my-4 d-flex flex-wrap">
          <div
            v-for="item in productCategoryList"
            :key="item.title"
            class="item col-lg-4 col-12 mb-lg-0 mb-md-5 mb-3 px-xl-4 px-md-3 px-5"
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

.item p {
  font-size: 0.875rem;
}

.item img {
  width: 100%;
  object-fit: cover;
  transition: all 0.6s linear;
  cursor: pointer;
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
          src: require('../assets/雜/coffeeBeans.jpg'),
          text: '我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。'
        },
        {
          title: '冷萃咖啡',
          src: require('../assets/雜/coffeeBeans.jpg'),
          text: '我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。'
        },
        {
          title: '冷萃咖啡',
          src: require('../assets/雜/coffeeBeans.jpg'),
          text: '我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。'
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
