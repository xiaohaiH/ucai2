
报错一：no-new
        Do not use 'new' for side effects


        这是缺少了一句注释代码，在顶部加上这句 
        ```
            /* eslint-disable no-new */ 
        ```
         即可解决。

二：路由删除#(哈希) 
    在router下的index.js内 new VueRouter({})设置
    ```
    new VueRouter({
        mode: 'history',
    })
    ```

三：取消严格模式下的样式
    配置build下的webpack.base.conf文件
    找到module下rules，并将第一个对象注释,需重启服务器
    ```
    module: {
        rules: [
        // {
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   enforce: 'pre',
        //   include: [resolve('src'), resolve('test')],
        //   options: {
        //     formatter: require('eslint-friendly-formatter')
        //   }
        // },
        ]
    }
    ```