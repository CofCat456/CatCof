<template>
  <section class="py-5">
    <div class="container-fluid mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-md-12  my-2 px-5">
          <span class="d-flex align-items-sm-end">
            <h1 class="me-2 font-en">Interview</h1>
          </span>
        </div>
        <div class="col-9 my-4 d-flex flex-wrap">
          <div class="item col-lg-4 col-md-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
          <div class="item col-lg-4 col-md-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
          <div class="item col-lg-4 col-md-12 px-4">
            <img src="../assets/雜/001.jpg" />
            <div class="text mt-3">
              <p class="font-en fs-5">2021.5.5</p>
              <h6>我是標題測試我是標題測試</h6>
              <p class="tag mt-1">#tag測試</p>
            </div>
          </div>
        </div>
        <div class="col-9 text-center mt-5">
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

.spButton {
  padding: 1rem 6.5rem;
  font-size: 0.6rem;
  color: #24395b;
  background: transparent;
  text-align: center;
  border: 1px solid #24395b;
  border-radius: 5px;
  transition: all 0.6s;
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
