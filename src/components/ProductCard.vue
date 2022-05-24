<template>
  <div :class="[['my-5 py-3'], isFluid ? 'container-fluid' : 'container']">
    <div class="row d-flex justify-content-center">
      <div
        :class="[
          isFluid ? ['col-xxl-10 px-md-5'] : ['col-xxl-11'],
          ['mt-1 mb-3 px-xxl-4 px-md-2 px-4 col-md-12 col-12']
        ]"
      >
        <span class="d-flex align-items-center">
          <h1 class="me-md-3 me-2 font-en">{{ EnTitle }}</h1>
          <p
            v-if="typeof CategoryText === 'undefined'"
            class="py-md-3 py-1 fw-bold"
          >
            {{ ChTitle }}
          </p>
          <span v-else class="py-3 fw-bold d-flex">
            <p>「</p>
            <p class="clrPink">{{ CategoryText }}</p>
            <p>」分類列表</p>
          </span>
        </span>
      </div>
      <div
        :class="[
          isFluid ? ['col-xxl-9  mb-4'] : ['col-xxl-11  mb-lg-5 mb-md-2'],
          ['mt-2 px-md-4 px-3 col-12 d-flex flex-wrap']
        ]"
      >
        <div
          v-for="item in Product"
          :key="item.title"
          class="item col-lg-3 col-6 mb-md-5 mb-3 pb-md-3 pb-0 px-md-3 px-1"
          @click="getProductId(item.id)"
        >
          <div class="overflow-hidden imgBox">
            <img :src="item.imageUrl" :alt="item.title + '的照片'"/>
          </div>
          <div class="text mt-2">
            <div v-if="item.CategoryArray[0] != '無'" class="d-flex mt-3 mb-2">
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
            <p class="unit mt-2">#{{ item.unit }}</p>
          </div>
        </div>
      </div>
      <div
        v-if="spButton"
        class="col-md-9 col-12 text-center mt-md-3 mt-3 px-4"
      >
        <router-link to="/User/ProductList" class="spButton">
          <i class="bi bi-chevron-right px-1"></i>列表展示
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFluid: {
      type: Boolean
    },
    EnTitle: {
      type: String
    },
    ChTitle: {
      type: String
    },
    Product: {
      type: [Object, Array],
      required: true
    },
    CategoryText: {
      type: String
    },
    spButton: {
      type: Boolean
    }
  },
  // props: ['EnTitle', 'ChTitle', 'product', 'CategoryText', 'spButton'],
  data() {
    return {
      productList: []
    };
  },
  methods: {
    getProductId(id) {
      this.$router.push(`/User/product/${id}`);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

@media screen and (max-width: 414px) {
  h1 {
    font-size: 2.2rem;
  }

  h6 {
    font-size: 0.875rem;
  }
}

.item {
  overflow: hidden;
  margin-bottom: 4rem;
}

.item img {
  width: 100%;
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

.spButton:hover {
  color: #fff;
  background: #24395b;
}

.spButton:hover .bi-chevron-right::before {
  color: #fff;
}
</style>
