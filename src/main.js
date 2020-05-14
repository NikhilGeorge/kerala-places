import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'leaflet/dist/leaflet.css';
import store from './store';
import Vuex from 'vuex'

import svgJs from "./plugin/vueSvgPlugin"
import Notifications from 'vue-notification'

Vue.use(svgJs);
Vue.use(Notifications); 
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
