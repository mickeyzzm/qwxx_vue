import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/init.scss";
// import "@/utils/scale.js";
// import scroll from 'vue-seamless-scroll';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from "@/utils/httpRequest";
import echarts from "echarts";
import './assets/font/font.css'
import 'swiper/css';
import vueSeamlessScroll from 'vue-seamless-scroll'


Vue.prototype.$echarts = echarts  //注册组件
Vue.config.productionTip = false;
Vue.prototype.$http = http; // ajax请求方法
// Vue.use(scroll)
Vue.use(ElementUI)
Vue.use(vueSeamlessScroll)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
