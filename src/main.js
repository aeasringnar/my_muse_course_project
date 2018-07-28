// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import AMap from 'vue-amap'

Vue.use(AMap)
Vue.use(MuseUI);
AMap.initAMapApiLoader({
  ksy:'5e71f5b194d178ad67c2e02225301a8d',
  plugin:['']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
