<template v-if="this.productimages.length < 0">
  <div class="col-12 mb-4 main">
    <img :src="mainImg" :class="[imgAnimate === 'fadeIn' && 'fade-in']" />
  </div>
  <div class="col-12 secondary">
    <div class="row px-lg-2 px-md-4">
      <div
        v-for="item in productimages"
        :key="item"
        class="col-3 px-md-2"
        @click="getImg(item)"
      >
        <img :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.main {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
}

.main img {
  width: 100%;
  height: 360px;
}

.secondary img {
  height: 85px;
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
