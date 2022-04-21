import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// AOS.css
import AOS from 'aos';
import 'aos/dist/aos.css';

// Animate.css
import 'animate.css';

// 千分號
import { currency } from './methods/filters';

// Toast methods
import $httpMessageState from './methods/pushMessageState';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';

// 表單驗證
import { Field, Form, defineRule, configure, ErrorMessage } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

// SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

library.add(fas, fab);

// 跳轉後回到頂端
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// AOS init
AOS.init({
  once: false
});

// 全域註冊
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Loading', Loading);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('defineRule', defineRule);

defineRule('required', required);
defineRule('email', email);

configure({
  generateMessage: localize('zh_TW', {
    messages: {
      alpha: '{field} 須以英文組成',
      alpha_dash: '{field} 須以英數、斜線及底線組成',
      alpha_num: '{field} 須以英數組成',
      alpha_spaces: '{field} 須以英文及空格組成',
      between: '{field} 須介於 0:{min} 至 1:{max}之間',
      confirmed: ' {field} 不一致',
      digits: '{field} 須為 0:{length} 位數字',
      dimensions: '{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素',
      email: '{field} 須為有效的電子信箱',
      excluded: '{field} 的選項無效',
      ext: '{field} 須為有效的檔案',
      image: '{field} 須為圖片',
      one_of: '{field} 的選項無效',
      integer: '{field} 須為整數',
      length: '{field} 的長度須為 0:{length}',
      max: '{field} 不能大於 0:{length} 個字元',
      max_value: '{field} 不得大於 0:{max}',
      mimes: '{field} 須為有效的檔案類型',
      min: '{field} 不能小於 0:{length} 個字元',
      min_value: '{field} 不得小於 0:{min}',
      numeric: '{field} 須為數字',
      regex: '{field} 的格式錯誤',
      required: '{field} 為必填',
      required_if: '{field} 為必填',
      size: '{field} 的檔案須小於 0:{size}KB'
    }
  }),
  validateOnInput: true
});

// 全域屬性
app.config.globalProperties.$filters = {
  currency
};

app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(AOS);
app.use(VueAxios, axios);
app.use(router);
app.use(VueSweetalert2);
app.mount('#app');
