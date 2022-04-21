<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-11">
          <div class="wrap d-md-flex d-block">
            <div class="logo me-lg-5 me-md-0">
              <img src="../assets/Logo/CofShopLogo.png" alt="貓咖啡 Logo" />
            </div>
            <div class="information ms-md-5 ms-0 my-3">
              <div class="addres mb-4">
                <p>地址 : 新北市鶯歌區</p>
                <p>電話 : 02-8711-3351</p>
              </div>
              <p>營業時間 : 13:00-22:00</p>
              <p>營業日 : 週一 ～ 週六</p>
              <div class="connectText fs-5 mt-md-4 mt-2">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'github']" />
              </div>
              <p class="mt-lg-5 mt-3 pt-lg-5 pt-md-3">
                Copyright © 2022 CofCat All right reserved
              </p>
            </div>
            <ul class="link d-md-block d-none">
              <li>
                <router-link to="/User/ProductList">產品列表</router-link>
              </li>
              <li><router-link to="">管理者登入</router-link></li>
              <li><router-link to="">購物車</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

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
  width: 24vw;
}

@media screen and (max-width: 414px) {
  .information {
    width: 85vw;
  }
}

.connectText svg {
  color: #24395b;
  margin: 0 0.5rem;
  transition: all 0.6s;
  cursor: pointer;
}

.connectText svg:hover {
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
