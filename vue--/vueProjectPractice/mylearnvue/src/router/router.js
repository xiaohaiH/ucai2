import Vue from "vue"
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const test = {template: `<div>
    <h1>title</h1>
    <p>谢谢侬</p>
</div>`}

const heiheihei = {template: `
    <h1>谁能告诉我，有没有这样的笔</h1>
`}

let Router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'abc',
            components: {
                default: test
            }
        },
        {
            path: '/heiheihei',
            name: 'yihuo',
            components: {
                default: heiheihei
            }
        }
    ]
})

export default Router
