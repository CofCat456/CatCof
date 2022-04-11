<template>
  <section class="py-5">
    <div class="container-fluid mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 my-2 px-md-5 px-4">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-2 font-en">Interview</h1>
          </span>
        </div>
        <div class="col-md-9 col-12 my-4 px-4 d-flex flex-wrap">
          <div class="item col-lg-4 col-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
          <div class="item col-lg-4 col-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
          <div class="item col-lg-4 col-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-12 text-center mt-5">
          <button class="spButton">
            <i class="bi bi-chevron-right px-1"></i>列表展示
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}

@media screen and (max-width: 414px) {
  h1 {
    font-size: 2.2rem;
  }
}

.item {
  overflow: hidden;
}

.item > img {
  width: 100%;
  height: 280px;
  border-radius: 7px;
  object-fit: cover;
  transition: all 0.4s;
  cursor: pointer;
}

.item > img:hover {
  filter: brightness(80%);
}

.text > .font-en {
  letter-spacing: 1px;
}

.text > h6 {
  letter-spacing: 0.5px;
}

.text > .tag {
  font-size: 0.8rem;
  color: #999;
}

.bi-chevron-right::before {
  color: #24395b;
  font-size: 0.4rem;
  transition: color 0.6s;
}

.spButton:hover {
  color: #fff;
  background: #24395b;
}

.spButton:hover .bi-chevron-right::before {
  color: #fff;
}
</style>
