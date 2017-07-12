VUE命令行模式:

# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev


当在 npminstall 卡住时，更换源：npm install -g cnpm --registry=https://registry.npm.taobao.org

以后npm 改成cnpm