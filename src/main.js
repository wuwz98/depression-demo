import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router' // 仅需找到router目录即可
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(ElementUI, VueRouter);

Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
