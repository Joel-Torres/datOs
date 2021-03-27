import Vue from 'vue'
import Landing from './views/Landing.vue'
import Profiles from './views/Profile'

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

const routes = {
  '/landing': Landing,
  '/profiles': Profiles
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Landing
    }
  },
  render (h) { return h(this.ViewComponent) },
}).$mount('#app')
