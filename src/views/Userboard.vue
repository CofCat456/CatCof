<template>
  <NavbarMain class="sticky-top" />
  <router-view />
  <Fotter />
  <FixedButton />
</template>

<script>
import NavbarMain from '../components/NavbarMain.vue';
import Fotter from '../components/Fotter.vue';
import FixedButton from '../components/FixedButton.vue';

export default {
  inject: ['emitter'],
  components: {
    NavbarMain,
    Fotter,
    FixedButton
  }
};
</script>
