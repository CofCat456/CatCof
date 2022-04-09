<template>
  <div class="col-4 d-flex flex-column align-items-center">
    <img src="../assets/雜/CofShopLogo.png" alt="" />
    <div class="process mt-4 d-flex">
      <div :class="[['enter d-flex mx-3'], this.status === '確認' && 'active']">
        <p class="rounded-circle me-2">1</p>
        <p>確認</p>
      </div>
      <div :class="[['sure d-flex mx-3'], this.status === '輸入' && 'active']">
        <p class="rounded-circle me-2">2</p>
        <p>輸入</p>
      </div>
      <div :class="[['done d-flex mx-3'], this.status === '送出' && 'active']">
        <p class="rounded-circle me-2">3</p>
        <p>送出</p>
      </div>
    </div>
  </div>
</template>

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
  border-color: #ff9800;
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
  background: #ff9800 !important;
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
  color: #ff9800;
}
</style>

<script>
export default {
  props: ['status']
};
</script>
