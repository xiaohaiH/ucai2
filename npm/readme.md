第一步:在命令行中输入npm init --yes;初始化json对象
第二步:npm login;登录npm中注册的账号
第三步:npm publish;将包推到npm中 成功打开https://www.npmjs.com/package/(xiaohai-test)包名
第四步:npm install xiaohai-test包名;注:包名不能和下载位置的文件名相同.
第四部可以这样写: npm i xiaohai-test --save-dev
更新包:npm version <版本号>;然后在npm publish.例 npm version 1.2.1;npm publish;

p.s
补丁发布：1.0或1.0.x或~1.0.4
次要版本：1或1.x或^1.0.4
主要版本：*或x


