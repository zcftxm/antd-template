import Vue from 'vue';
import '@/core';
import store from './store';
import router from './router';
import './utils/axios';
import draggable from 'vuedraggable';
import App from './App.vue';
import './router/permission';
import loading from '@/components/Loading';
Vue.component('draggable', draggable)
Vue.config.productionTip = false

Vue.use(loading)
window.vm = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
