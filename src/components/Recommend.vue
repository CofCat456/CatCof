<template>
  <section>
    <div class="container my-lg-5 my-md-3 pb-lg-5 pb-md-3">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 my-4">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-3 font-en">Recommended</h1>
            <p class="py-3 fs-6 fw-bold">推薦商品</p>
          </span>
        </div>
        <div class="col-11 col-md-10 mt-3 mb-lg-5 mb-md-2 d-flex flex-wrap">
          <div
            v-for="item in product"
            :key="item.title"
            class="item col-lg-3 col-md-6 px-4 px-md-3 mb-lg-5 mb-md-3"
            @click="getProductId(item.id)"
          >
            <div class="overflow-hidden imgBox">
              <img :src="item.imageUrl" />
            </div>
            <div class="text mt-2">
              <div class="d-flex mt-3 mb-2">
                <p
                  v-for="tag in item.CategoryArray"
                  :key="tag"
                  :class="[
                    ['tag mx-1'],
                    tag === '熱門' && 'blue',
                    tag === '推薦' && 'brown',
                    tag === '免運費' && 'pink'
                  ]"
                >
                  {{ tag }}
                </p>
              </div>
              <h6>{{ item.title }}</h6>
              <h6>TWD {{ $filters.currency(item.price) }} 元</h6>
              <p class="unit">#{{ item.unit }}</p>
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
    font-size: 2rem;
  }
}
.item {
  overflow: hidden;
}

.item img {
  width: 100%;
  height: 165px;
  object-fit: cover;
  transition: all 0.4s;
  cursor: pointer;
}

.item .imgBox {
  border-radius: 10px;
}

.item img:hover {
  transform: scale(1.05);
  opacity: 0.8;
}

.text > p {
  font-size: 0.8rem;
  color: #999;
}

.text .unit {
  font-size: 0.4rem;
}
</style>

<script>
export default {
  props: ['Rproduct'],
  data() {
    return {
      product: []
    };
  },
  watch: {
    Rproduct() {
      this.product = [...this.Rproduct];
    }
  },
  methods: {
    getProductId(id) {
      this.$router.push(`/User/product/${id}`);
    }
  },
  mounted() {
    this.product = [...this.Rproduct];
  }
};
</script>
