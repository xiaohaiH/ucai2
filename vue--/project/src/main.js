import Vue from 'vue'
import Router from '@/router/router'

import App from '@/App'

import '@/assets/bootstrap/css/bootstrap.css'
import '@/assets/bootstrap/js/bootstrap.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App />',
  components: {
    App
  }
})
