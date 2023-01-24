import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import  './css/common.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/mock/mockServe'

Vue.use(Vant);

Vue.prototype.axios=axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
