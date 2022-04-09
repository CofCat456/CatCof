<template>
  <section class="pt-4">
    <div class="container-fluid my-4">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 my-2 px-5">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-2 font-en">Online Store</h1>
          </span>
        </div>
        <div class="col-lg-9 col-md-10 my-4 d-flex flex-wrap" @click="getProductCategory('咖啡豆')">
          <div class="item col-lg-4 col-md-12 mb-lg-0 mb-md-5 px-4 px-md-3">
            <div class="overflow-hidden imgBox">
              <img src="../assets/雜/coffeeBeans.jpg" class="img-fluid" />
            </div>
            <div class="text px-5 px-md-5 py-4">
              <h5 class="fw-bold my-2 px-1">咖啡豆</h5>
              <p class="pb-3">
                我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。
              </p>
            </div>
          </div>
          <div class="item col-lg-4 col-md-12 mb-lg-0 mb-md-5 px-4 px-md-3">
            <div class="overflow-hidden imgBox">
              <img src="../assets/雜/coffeeBeans.jpg" />
            </div>
            <div class="text px-5 px-md-5 py-4">
              <h5 class="fw-bold my-2 px-1">咖啡豆</h5>
              <p class="pb-3">
                我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。
              </p>
            </div>
          </div>
          <div class="item col-lg-4 col-md-12 mb-lg-0 mb-md-5 px-4 px-md-3">
            <div class="overflow-hidden imgBox">
              <img src="../assets/雜/coffeeBeans.jpg" />
            </div>
            <div class="text px-5 px-md-5 py-4">
              <h5 class="fw-bold my-2 px-1">咖啡豆</h5>
              <p class="pb-3">
                我們正在烘焙咖啡，餘味悠長，沒有令人不快的味道，並且具有長時間留在口中的甜味和濃郁感。這是一種每天喝都不會膩的味道，而不是第一口的影響。
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
  methods: {
    getProductCategory(id) {
      this.$router.push(`/User/category/${id}`);
    }
  }
};
</script>
