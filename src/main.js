import Vue from 'vue'
import App from './App.vue'
import { Dialog, Input } from 'element-ui';
import Contextmenu from "vue-contextmenujs"
Vue.use(Contextmenu);

Vue.config.productionTip = false
Vue.component(Dialog.name, Dialog);
Vue.component(Input.name, Input);
new Vue({
  render: h => h(App),
}).$mount('#app')
