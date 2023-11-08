import Vue from 'vue'
import App from './App.vue'
import components from './components/componentList'
import router from './router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Object.entries(components).forEach(([name, component]) => Vue.component(name, component))
Vue.use(VueAxios, axios, router)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
