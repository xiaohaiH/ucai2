import Vue from 'vue'
import App from '@/App'
import Router from '@/router/router'

new Vue({
    el: '#box',
    router: Router,
    template: '<App />',
    components: {
        App: App
    }
})