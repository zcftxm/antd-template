import Vue from 'vue'
import '@/core';
import router from './router'
import './utils/axios'
import draggable from 'vuedraggable'
import App from './App.vue'
Vue.component('draggable', draggable)
Vue.config.productionTip = false

window.vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
