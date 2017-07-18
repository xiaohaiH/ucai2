import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/view/Home/Home'
import Introduce from '@/view/Introduce/Introduce'
import Follow from '@/components/Home/Follow'
import TellMe from '@/components/Introduce/TellMe'

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            components: {
                default: Home,
                follow: Follow
            }
        },
        {
            path: '/introduce',
            name: 'introduce',
            components: {
                default: Introduce,
                details: TellMe
            }
        }
    ]
})

export default router