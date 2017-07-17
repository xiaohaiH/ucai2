import Vue from 'vue'
import Router from '@/router/router'
import App from './App'

new Vue({
    el: '#box',
    router: Router,
    template: "<App />",
    components: {
        App: App
    }
})