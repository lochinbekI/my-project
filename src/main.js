import Vue from 'vue'
import App from './App.vue'
import router from './router'


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAwsx3hw-XCvOFwh-Q6QVTrI-7bhSkoO4M',
    },
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
