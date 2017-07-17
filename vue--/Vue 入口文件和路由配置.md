入口文件配置
```
1.引入vue
2.引入路由 (路径)
3.引入初始界面的vue文件(路径)

创建vue构造函数 el，router，template，components
```


路由配置
```
1.引入vueRouter (vue-router)
2.然后使用VueRouter


3.配置路由

mode: 'history' --禁止使用哈希模式;

default: ""  --默认组件
test: ""  --自定义组件名,
let router = new vueRouter({
    routes: [
        {
            path: '/',
            compontent: {
                default: "",
                test: "",
            }
        },
        {}
    ]
})


4.导出路由


export default router
```

