

import Vue from 'vue'
import Router from '@/router/router'
import bbb from '@/App'


new Vue({
    el: '#app',
    router: Router,
    template: '<App />',
    components: {
        App: bbb
    }
})