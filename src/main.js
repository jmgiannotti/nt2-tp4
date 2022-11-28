import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import { router } from './router'
import './form'
import './axios'


Vue.config.productionTip = false

new Vue({
  router, // es igual es -> router : router,
  render: h => h(App),
}).$mount('#app')
