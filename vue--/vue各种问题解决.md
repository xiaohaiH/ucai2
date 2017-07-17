
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

四：jsonp指定回调名的键值 
    写法
    jsonp:
        第一个参数URL加上传递的值；
        第二个参数是对象方式，param--> 指定回调函数的键值 ; name--> 指定回调函数的名称(p.s这个不重要) ; prefix -->这个指定jsonp响应的全局回调函数；
        第三个参数是成功或失败后的函数 --- 参数一:代表失败后返回的值，-参数二代表成功后返回的值！
    ```
        jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=123',{param:'cb'}, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(data);
            }
        });
    ```

五：更改服务器端口

在config/index.js文件内
``` 
port: 端口号

```


六：API的跨域问题
在config/index.js中配置
dev对象下写
```
proxyTable: {
  '/api/**': {
    target: 'http://127.0.0.1:8089',///API接口的域    .
    secure: false,///如果是https接口,需要配置这个参数.
    changeOrigin: true,///如果接口跨域,需要进行这个    数配置.
  },
  '/users/*':{
    target: 'http://127.0.0.1:8089'
  }
},

```

 七：省略引入文件的后缀名
 在build/webpack.base.conf.js文件内找到module.exports对象内的resolve并设置extensions数组
```
extensions: ['.js', '.vue', '.json']
```

