<template>
  <section>
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-12 my-2 px-md-5 px-4">
          <span class="d-flex align-items-end">
            <h1 class="me-md-3 me-2 font-en">Category</h1>
            <p class="py-md-3 py-1 fs-6 fw-bold">類別一覽</p>
          </span>
        </div>
        <div class="col-md-10 col-11 my-3 d-flex flex-wrap">
          <div
            class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2"
            @click="getProductCategory('咖啡豆')"
          >
            <img src="../assets/雜/coffeeBeans.jpg" />
            <p class="ps-4 py-3">咖啡豆</p>
          </div>
          <div
            class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2"
            @click="getProductCategory('冷萃咖啡')"
          >
            <img src="../assets/雜/ColdBrew.jpeg" />
            <p class="px-3 py-3">冷萃咖啡</p>
          </div>
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
          </div>
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
          </div>
        </div>
        <div class="col-11 col-md-10 my-3 d-flex flex-wrap">
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
          </div>
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
          </div>
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
          </div>
          <div class="item col-lg-3 col-6 my-3 px-lg-4 px-md-3 px-2">
            <img src="../assets/雜/001.jpg" />
            <p class="px-3 py-3">測試用文字</p>
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

.item {
  overflow: hidden;
}

.item > img {
  width: 100%;
  height: 165px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
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

@media screen and (max-width: 414px) {
  h1 {
    font-size: 1.4rem;
  }
}
</style>

<script>
export default {
  methods: {
    getProductCategory(id) {
      this.$router.push(`/User/category/${id}`);
    }
  }
};
</script>
