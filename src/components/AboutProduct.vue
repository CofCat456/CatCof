<template>
  <section>
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-md-12 d-flex">
          <div class="col-6 px-lg-4 px-md-2 position-relative">
            <div class="imgframe">
              <img src="../assets/bg/bg-003.jpg" />
            </div>
            <p>關於咖啡</p>
          </div>
          <div class="col-6 px-lg-4 px-md-2 position-relative">
            <div class="imgframe">
              <img src="../assets/bg/bg-003.jpg" />
            </div>
            <p>關於咖啡</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.imgframe {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(0, 0, 0, 0.3);
  opacity: 1;
  cursor: pointer;
  transition: all .4s;
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
