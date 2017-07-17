/* eslint-disable no-new */

import Vue from 'vue'
import App from './App'

import router from './router'
/* 引入jQuery */
import $ from 'jquery'
// import 'api/bootstrap.css'
// import 'api/bootstrap.min.js'

import '@/assets/api/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/api/bootstrap/dist/js/bootstrap.min.js'
/* 引入样式 */
import '@/assets/css/app.css'
// import 'bootstarp/js/bootstarp.min.js'
// import 'bootstarp/css/bootstarp.min.css'
new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
})
