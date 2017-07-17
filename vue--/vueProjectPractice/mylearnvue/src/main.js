

import Vue from 'vue'
import Router from '@/router/router'
import aaa from '@/aaa'


new Vue({
    el: '#app',
    router: Router,
    template: '<App />',
    components: {
        App: aaa
    }
})