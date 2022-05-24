<template v-if="this.productimages">
  <div class="col-12 mb-4 main">
    <img :src="mainImg" :class="[imgAnimate === 'fadeIn' && 'fade-in']" alt="產品的主要照片" />
  </div>
  <div class="col-12 secondary">
    <div class="row px-lg-2 px-4">
      <div
        v-for="item in productimages"
        :key="item"
        class="col-3 px-1"
        @click="getImg(item)"
      >
        <img :src="item" alt="產品的副照片" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data() {
    return {
      mainImg: '',
      productimages: [],
      imgAnimate: ''
    };
  },
  watch: {
    images() {
      this.productimages = this.images;
      this.mainImg = this.productimages[0];
    }
  },
  methods: {
    getImg(item) {
      this.mainImg = item;
      this.imgAnimate = 'fadeIn';
      setTimeout(() => {
        this.imgAnimate = '';
      }, 500);
    }
  },
  mounted() {
    this.productimages = this.images;
  }
};
</script>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.main {
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
}

.main img {
  width: 100%;
}

.secondary img {
  width: 100%;
  height: auto;
  transition: all 0.4s;
  cursor: pointer;
}

.secondary img:hover {
  opacity: 0.8;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in 1 forwards;
}
</style>
