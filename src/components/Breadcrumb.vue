<template>
  <div class="col-11 mx-5 my-3">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb justify-content-end">
        <li class="breadcrumb-item">
          <router-link to="/"><i class="bi bi-house"></i></router-link>
        </li>
        <li
          v-for="(item, index) in BreadcrumbData"
          :key="item"
          :class="[
            ['breadcrumb-item'],
            index === Breadcrumb.index && 'active colorBlue'
          ]"
        >
          <router-link v-if="index + 1 !== Breadcrumb.length" :to="item.link">{{
            item.title
          }}</router-link>
          <a v-else>
            {{ item.title }}
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    Breadcrumb: {
      type: Array
    }
  },
  data() {
    return {
      BreadcrumbData: []
    };
  },
  watch: {
    Breadcrumb() {
      this.BreadcrumbData = this.Breadcrumb;
    }
  },
  created() {
    this.BreadcrumbData = this.Breadcrumb;
  }
};
</script>
