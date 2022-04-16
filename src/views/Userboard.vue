<template>
  <NavbarMain class="sticky-top"></NavbarMain>
  <router-view></router-view>
  <Fotter></Fotter>
  <fixedButton></fixedButton>
</template>

<style>
.btn-red {
  padding: 5px;
  color: rgba(220, 53, 69, 0.3);
  transition: all 0.5s;
}

.btn-red:hover {
  color: #dc3545;
}

.btn-custom-Blue {
  border: 1px solid #24395b;
  color: #24395b !important ;
  background: #fff;
}

.btn-custom-Blue:hover {
  color: #fff !important;
  background-color: #24395b;
}

.btn-custom-Orange {
  color: #fff;
  background-color: #24395b;
}

.btn-custom-Orange:hover {
  color: #000;
  background-color: #ff9800;
}

.btn-custom-contrary-Blue {
  border: 1px solid #24395b;
  color: #fff !important;
  background-color: #24395b;
}

.btn-custom-contrary-Blue:hover {
  color: #24395b !important ;
  background: #fff;
}
</style>

<script>
import NavbarMain from '../components/NavbarMain.vue';
import Fotter from '../components/Fotter.vue';
import fixedButton from '../components/FixedButton.vue';

export default {
  inject: ['emitter'],
  components: {
    NavbarMain,
    Fotter,
    fixedButton
  }
};
</script>
