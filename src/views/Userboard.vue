<template>
  <NavbarMain class="sticky-top"></NavbarMain>
  <router-view></router-view>
  <Fotter></Fotter>
  <fixedButton></fixedButton>
</template>

<style scoped></style>

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
