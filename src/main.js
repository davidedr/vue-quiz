import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// import 'bbotstrap/dist/css/bootstrap.css'
// import 'bbotstrap/dist/css/bootstrap-vue.css'

//import 'node_modules/bootstrap/dist/css/bootstrap.css'
//import 'node_modules/botstrap/dist/css/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
