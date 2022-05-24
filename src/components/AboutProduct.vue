<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-11 col-12 d-flex flex-wrap my-2 px-xxl-5 px-md-3 px-4">
        <div
          class="col-xxl-6 col-12 mb-xxl-0 mb-md-3 mb-3 px-lg-4 px-md-2 position-relative"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div class="imgframe">
            <img src="../assets/img/bg/bg-003.jpg" alt="關於咖啡的照片" />
          </div>
          <p>關於咖啡</p>
        </div>
        <div
          class="col-xxl-6 col-12 px-lg-4 px-md-2 position-relative"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div class="imgframe">
            <img src="../assets/img/bg/bg-003.jpg" alt="關於咖啡的照片" />
          </div>
          <p>關於咖啡</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgframe {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(0, 0, 0, 0.3);
  opacity: 1;
  cursor: pointer;
  transition: all 0.4s;
}

.imgframe:hover {
  background: transparent;
}

img {
  width: 100%;
  height: 200px;
  position: relative;
  object-fit: cover;
  z-index: -1;
}

@media screen and (max-width: 414px) {
  img {
    height: 135px;
  }
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  transform: translate(-50%, -50%);
}
</style>
