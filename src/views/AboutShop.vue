<template>
  <LoadingComponent :LoadingState='isLoading' />
  <section>
    <div class="container-fluid mb-5">
      <div class="row d-flex justify-content-center">
        <Breadcrumb :Breadcrumb="Breadcrumb" />
        <div class="row my-5 pb-xxl-5 pb-md-0 px-0">
          <div
            class="col-lg-5 col-11 offset-1 order-lg-1 order-2 d-flex flex-column justify-content-xxl-center align-items-xxl-center px-md-4 px-2"
          >
            <div class="wrap">
              <h1 class="text-start font-en">About coffee</h1>
              <div class="text ms-md-4 ms-2">
                <h1 class="mb-5 pb-xxl-5 pb-md-0">關於咖啡</h1>
                <span>
                    在咖啡館裡
                    <br/>
                    總是情绪在掌握時間，喝掉一杯咖啡的時間
                    <br/>
                    可以是十分鐘，也可以是一個下午。
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-11 offset-1 order-lg-1 order-1 mb-lg-0 mb-5">
            <img src="../assets/img/bg/bg-005.jpg" class="img-fluid" alt="關於我們的照片" />
          </div>
        </div>
        <div v-for="(item, index) in AboutText" :key="item" class="col-lg-8 col-md-7 col-10 px-md-1 px-3 d-flex flex-wrap justify-content-center my-lg-5 py-lg-5 my-md-3 my-4">
          <div :class="[['col-lg-5 col-md-12 order-md-0'], index%2 === 0 ? 'order-lg-1' : 'order-lg-0']">
              <img :src="item.img"  class="img-fluid round" :alt="item.title + '的照片'" />
          </div>
          <div :class="[['col-lg-7 col-md-12 order-md-1 mt-4'],  index%2 === 0 ? 'order-lg-0 pe-lg-5' : 'order-lg-1 ps-lg-5']">
            <h2 class="fw-bold">{{item.title}}</h2>
            <p class="my-lg-4 my-3">{{item.text1}}</p>
            <p class="my-lg-4 my-3">{{item.text2}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import LoadingComponent from '../components/LoadingComponent.vue';

export default {
  components: {
    Breadcrumb,
    LoadingComponent
  },
  data() {
    return {
      product: [],
      Rproduct: [],
      isLoading: false,
      Breadcrumb: [
        {
          title: '關於我們',
          link: ''
        }
      ],
      AboutText: [
        {
          img: require('../assets/img/aboutMe/about-01.jpg'),
          title: '每天都能喝到的味道',
          text1: '只使用優質青豆，並用小火慢煮，以促進美味成分的化學變化。煮到核心的咖啡的特點是餘味悠長，沒有不愉快的味道，無論是輕度烘焙還是深度烘焙。',
          text2: '烘焙技術可以用來營造“濃烈的味道”，但每天都能喝的咖啡不需要第一口就砰砰直跳。它不浮華，但簡單易飲，如果你注意到它，你永遠不會厭倦它。這就是味道。'
        },
        {
          img: require('../assets/img/aboutMe/about-02.jpg'),
          title: '每天可以喝的價格',
          text1: '生咖啡豆的市場價格是由供求關係決定的。稀缺價值高、質量好的生豆價格也會相應上漲。',
          text2: '貓咖啡的咖啡豆是經過嚴格挑選的，我們購買前一定會經過重重挑選，通過堅持這一標準，我們實現了既滿足顧客可以飲用的價格，又滿足維持商店運轉的利潤的平衡。'
        },
        {
          img: require('../assets/img/aboutMe/about-03.jpg'),
          title: '每天都能在家享用',
          text1: '雖然疫情時代，不太能出門，但貓咖啡推出線上商城服務，只要簡單幾個步驟就能訂購咖啡豆，在家也就能享用美味的咖啡囉！',
          text2: '現在線上商城推出滿六千享免運，並且購買指定單品也能喲，要買要快！'
        },
        {
          img: require('../assets/img/aboutMe/about-04.jpg'),
          title: '每天享受的休閒時光',
          text1: '貓咖啡的商品都是店主精心挑選，在每天工作時，配上一杯咖啡，絕對能大大提升工作品質',
          text2: '疫情結束後，也歡迎到店，來找我，我絕對會為您泡上一杯最頂的咖啡！'
        }
      ]
    };
  }
};
</script>

<style scoped>
.wrap > h1 {
  font-size: 1.2rem;
}

.text > h1 {
  font-size: 3rem;
  font-weight: 700;
}

h2 {
  font-size: 1.8rem;
}

@media screen and (max-width: 768px) {
  .text > h1 {
  font-size: 1.8rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 414px) {
  .wrap > h1 {
    font-size: 1.2rem;
  }

  .text > h1 {
    font-size: 2rem;
  }
}

.img-fluid {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.round{
  border-radius: 20px;
}
</style>
