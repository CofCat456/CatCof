<template>
  <nav class="navbar navbar-expand-lg w-100" :class="{ navBg: isScroll }">
    <div class="container-fluid px-md-5 px-3">
      <router-link to="/" class="nav-link fs-5 title mt-md-1">
        <img src="../assets/img/Logo/CofShopLogo.png" alt="貓咖啡 Logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="navbarBtn"
        @click="hamburgerClick"
      >
        <font-awesome-icon icon="bars" class="hamburge" />
        <span class="navbar-toggler-icon material-icons text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mx-auto"></div>
        <ul class="navbar-nav">
          <li v-for="item in navData" :key="item.name">
            <router-link
              :to="item.link"
              @click="closeBtn()"
              class="nav-link nav-text mx-lg-3 my-lg-0 p-lg-0 my-1 p-3 fw-bold"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
      navData: [
        {
          name: '商品列表',
          link: '/User/ProductList'
        },
        {
          name: '關於我們',
          link: '/User/About'
        },
        {
          name: '管理者登入',
          link: '/Login'
        },
        {
          name: '購物車',
          link: '/User/Cart'
        }
      ]
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 20) {
        return (this.isScroll = true);
      }
      this.isScroll = false;
    },
    closeBtn() {
      this.$refs.navbarBtn.click();
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
};
</script>

<style scoped>
.navbar {
  transition: all 0.4s ease-in-out;
}

.nav-item {
  margin: 0 1rem;
  transition: all 0.4s;
}

.nav-item img {
  width: 35px;
}

.title,
.nav-text {
  position: relative;
  letter-spacing: 2.5px;
  color: #24395b;
  transition: all 0.4s;
}

.title img {
  width: 80px;
  height: 80px;
  transition: all 0.6s ease;
}

@media screen and (max-width: 414px) {
  .title img {
    width: 50px;
    height: 50px;
  }
}

.nav-text::after {
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  margin: 2px 0;
  position: absolute;
  background: #c6a37b;
  transition: width 0.5s;
}

.nav-text:hover::after {
  width: 100%;
  color: #c6a37b;
}

/* 漢堡選單 */
.navbar-toggler {
  border: 0px;
}

.navbar-toggler .hamburge {
  font-size: 1.4rem;
  color: #fff;
}

.navbar-toggler:focus {
  box-shadow: #fff 0 0 0 0;
}

/* 滾動後 */
.navBg {
  padding: 0.2rem;
  background: #24395b;
}

.navBg .title,
.navBg .nav-text {
  color: white;
}

.navBg .title img {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 991px) {
  .navbar {
    padding: 0.2rem;
    background: #24395b;
  }

  .navbar-nav {
    width: 100%;
    text-align: center;
  }

  .navbar-nav .nav-item {
    padding: 1rem;
  }

  .title,
  .nav-text {
    color: white;
  }
}
</style>
