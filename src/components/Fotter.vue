<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-11">
          <div class="wrap d-md-flex d-block">
            <div class="logo me-lg-5 me-md-0">
              <img src="../assets/img/Logo/CofShopLogo.png" alt="貓咖啡 Logo" />
            </div>
            <div class="information ms-md-5 ms-0 my-3">
              <div class="addres mb-4">
                <p>地址 : 新北市鶯歌區</p>
                <p>電話 : 02-8711-3351</p>
              </div>
              <p>營業時間 : 13:00-22:00</p>
              <p>營業日 : 週一 ～ 週六</p>
              <div class="connectText fs-5 mt-md-4 mt-2">
                <a
                  v-for="item in infoData"
                  :key="item.icon"
                  :href="item.link"
                  target="_blank"
                  ><i :class="['bi', item.icon]"></i
                ></a>
              </div>
              <p class="mt-lg-5 mt-3 pt-lg-5 pt-md-3">
                Copyright © 2022 CofCat All right reserved
              </p>
            </div>
            <ul class="link d-md-block d-none">
              <li v-for="item in routerData" :key="item.name">
                <router-link :to="item.link">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      routerData: [
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
          link: '/User/cart'
        }
      ],
      infoData: [
        {
          icon: 'bi-facebook',
          link: 'https://www.facebook.com/liao.xiaoan'
        },
        {
          icon: 'bi-envelope',
          link: 'mailto:a25690756@gmail.com'
        },
        {
          icon: 'bi-github',
          link: 'https://github.com/CofCat456'
        }
      ]
    };
  }
};
</script>

<style scoped>
footer {
  margin-top: 150px;
  margin-right: 6.12vw;
  padding-left: 12.24vw;
  background: #dee1e7;
  border-radius: 0 30px 0 0;
}

@media screen and (max-width: 768px) {
  footer {
    margin-top: 100px;
  }
}

@media screen and (max-width: 414px) {
  footer {
    margin-top: 0px;
  }
}

.wrap {
  padding: 110px 0 70px;
}

@media screen and (max-width: 414px) {
  .wrap {
    padding: 20px 0px;
  }
}

h1 {
  margin-top: 9rem;
  font-size: 5.5rem;
  letter-spacing: 0.6rem;
}

p {
  letter-spacing: 0.5px;
}

img {
  width: 200px;
  height: auto;
}

@media screen and (max-width: 768px) {
  img {
    width: 150px;
    height: auto;
  }
}

.information {
  width: 26vw;
}

@media screen and (max-width: 414px) {
  .information {
    width: 85vw;
  }
}

.connectText .bi {
  color: #24395b;
  margin: 0 0.5rem;
  cursor: pointer;
}

.connectText .bi::before {
  transition: all 0.6s;
}

.connectText .bi:hover::before {
  transform: rotateY(360deg);
}

ul li {
  padding: 0.6rem 0;
  cursor: pointer;
}

ul li a {
  color: #24395b;
  font-weight: 500;
  transition: all 0.4s;
}

ul li a:hover {
  color: rgba(36, 57, 91, 0.6);
}
</style>
