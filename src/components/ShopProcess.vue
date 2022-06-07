<template>
  <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center">
    <img src="../assets/img/Logo/CofShopLogo.png" alt="貓咖啡 Logo" />
    <div class="process mt-4 d-flex">
      <div
        v-for="(item, index) in shopData"
        :key="item"
        :class="[['enter d-flex mx-3'], this.status === item && 'active']"
      >
        <p class="rounded-circle me-2">{{ index + 1 }}</p>
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status'],
  data() {
    return {
      shopData: ['確認', '輸入', '送出']
    };
  }
};
</script>

<style scoped>
img {
  width: 180px;
  height: 180px;
}
.col-12 {
  background: #000;
}

.process > div {
  padding: 7.5px;
}

.active {
  border-width: 0 0 1px;
  border-style: solid;
  border-color: #c6a37b;
}

.enter :first-child,
.sure :first-child,
.done :first-child {
  width: 30px;
  height: 30px;
  color: #fff;
  text-align: center;
}

.active :first-child {
  background: #c6a37b !important;
}

.enter :first-child,
.sure :first-child,
.done :first-child {
  background: #cfd8dc;
}

.sure :last-child,
.done :last-child,
.enter :last-child {
  color: #cfd8dc;
}

.active :last-child {
  color: #c6a37b;
}
</style>
