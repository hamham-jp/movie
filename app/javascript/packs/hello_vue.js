import Vue from 'vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from '../app.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
  	vuetify,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
