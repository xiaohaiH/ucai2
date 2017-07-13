import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = { template: '<div>This is my first practice</div>' }
const HomePage = { template: '<div>这是个人主页</div>' }
const Introduce = {template: `<div><p><span>name:</span><span>xiaohai</span></p><p><span>website:</span><span>besthai.top</span></p></div>`}
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path: '/introduce',
      component: Introduce
    }
  ]
})
export default router
