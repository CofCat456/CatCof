<template>
  <section>
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-11 col-12 d-flex flex-wrap my-2 px-md-5 px-4">
          <div class="col-md-6 col-12 mb-md-0 mb-3 px-lg-4 px-md-2 position-relative">
            <div class="imgframe">
              <img src="../assets/bg/bg-003.jpeg" />
            </div>
            <p>關於咖啡</p>
          </div>
          <div class="col-md-6 col-12 px-lg-4 px-md-2 position-relative">
            <div class="imgframe">
              <img src="../assets/bg/bg-003.jpeg" />
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

@media screen and (max-width:414px){
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
