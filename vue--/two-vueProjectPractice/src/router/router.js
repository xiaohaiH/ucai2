import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import Home from '@/components/Home/index'
import Introduce from '@/components/Introduce/index'
import IntroduceName from '@/components/Introduce/IntroduceName'

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            components: {
                default: Home
            }
        },
        {
            path: '/introduce',
            name: 'Intorduce',
            components: {
                default: Introduce,
                IntroduceName: IntroduceName
            }
        }
    ]
})
export default router