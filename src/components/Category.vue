<template>
  <section>
    <div class="container my-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 my-4">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-3 font-en">Category</h1>
            <span class="py-3 fw-bold d-flex">
              <p>「</p>
              <p class="clrPink">{{ CategoryText }}</p>
              <p>」分類列表</p>
            </span>
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
              <div
                v-if="item.CategoryArray[0] != '無'"
                class="d-flex mt-3 mb-2"
              >
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
              <div v-else class="mb-3"></div>
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

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

.item {
  overflow: hidden;
  margin-bottom: 4rem;
}

.item img {
  width: 100%;
  height: 165px;
  object-fit: cover;
  object-position: center;
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

.tag p {
  padding: 1px 10px;
  font-size: 0.6rem;
  color: #fff;
}

.text .unit {
  font-size: 0.4rem;
}
</style>

<script>
export default {
  props: ['Cproduct', 'Category'],
  data() {
    return {
      product: [],
      CategoryText: ''
    };
  },
  watch: {
    Cproduct() {
      this.product = [...this.Cproduct];
    },
    Category() {
      this.CategoryText = this.Category;
    }
  },
  methods: {
    getProductId(id) {
      this.$router.push(`/User/product/${id}`);
    }
  },
  mounted() {
    this.product = [...this.Cproduct];
    this.CategoryText = this.Category;
  }
};
</script>
