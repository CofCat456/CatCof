<template>
  <nav aria-label="...">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !Pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prevPage(Pages)"
        >
          Previous
        </a>
      </li>
      <li class="page-item" v-for="page in Pages.total_pages" :key="page">
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(page)"
          :class="{ 'currentPage': page === Pages.current_page}"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !Pages.has_next }">
        <a
          class="page-link disabled"
          href="#"
          aria-label="Next"
          @click.prevent="NextPage(Pages)"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  inject: ['emitter'],
  props: ['pages'],
  data() {
    return {
      Pages: {}
    };
  },
  watch: {
    pages() {
      this.Pages = this.pages;
    }
  },
  methods: {
    updatePage(page) {
      this.emitter.emit('emit-pages', page);
      this.$emit('emit-Adpages', page);
    },
    prevPage(page) {
      if (page.has_pre) {
        this.emitter.emit('emit-Prev', page.current_page - 1);
        this.$emit('emit-Adpages', page);
      }
    },
    NextPage(page) {
      if (page.has_next) {
        this.emitter.emit('emit-Next', page.current_page + 1);
        this.$emit('emit-AdNext', page.current_page + 1);
      }
    }
  },
  mounted() {
    this.emitter.on('pushPagination', (Pagination) => {
      this.Pages = { ...Pagination };
    });
  }
};
</script>

<style scoped>
ul li {
  margin: 0 0.5rem;
}

ul li a {
  border-radius: 5px;
  color: #000;
}

ul li:hover a {
  color: #fff;
  background: #00c9ff;
}

.currentPage {
  color: #fff;
  background: #00c9ff;
}
</style>
