window.onload = function(){
	$(".login").css("height",window.screen.height);
	//-----------------我是可爱的分割线------------------------
	(function(){
		getajax.get({//当页面加载完成时,获取数据库里的留言信息和会话里的用户名
			"url" : "../js/load.php",
			"fn" : function(content){
		 		if(content.success){//成功获取到时创建li标签
					var lilen = JSON.parse(content.reception);
					var user = lilen[0];
					establish(lilen,user);
					update();
				}else{
					throw new Error("服务器繁忙,请稍后在试！")
				};
			}
		});
	}());
	//-----------------我是坚强的分割线------------------------
	//鼠标滑过文本域时全选里面的内容
	$(".import textarea").focus(function(){
		$(this).select();
	}).mouseover(function(){$(this).focus()}).mouseout(function(){$(this).blur()});
	//-----------------我是可爱的分割线------------------------
	//点击发送留言按钮
	$("button").click(function(){
		var loginval = $("p a").html();
		if(loginval == "请登录"){//判断用户是否登录
			$(".login").css("display","block");
		}else{
			var messageval = $(".import textarea").val();
			var messagevaltext = /^\s/g.test(messageval);
			if(messagevaltext||!messageval){//判断输入的文本格式是否正确.
				alert("请输入内容,不要以空格开头");
				return false;
			};
			var obj = {};//将留言存储进要发送给后台的对象中;
			obj.message = $(".import").find("textarea").val();
			obj.name = $(".title p a").html();
			obj.id = $(".title p").attr("data-id");
			getajax.get({
				"url" : "../js/append.php",
				"stext" : obj,
				"fn" : function(content){
					if(content.success){//成功后创建该留言
						establish();
						update();
					}else{
						throw new Error("服务器繁忙,请稍后在试！")
					};
				}
			});
		};
	});
	//-----------------我是可爱的分割线------------------------
	//利用原型来写登录注册
	function Ls(){};
	Ls.prototype.judge = function(){//此原型封装的是输入框的格式是否输入正确,并存储输入框的值;
		var self = this;
		self.userele = $(".login form p:eq(2) input:eq(0)");
		self.passele = $(".login form p:eq(2) input:eq(1)");
		self.nameval = $(self.userele).parent().parent().find('input:eq(0)').val();
		self.passval = $(self.passele).parent().parent().find('input:eq(1)').val();
		self.reg = /\s/g;
		if(!(self.nameval&&self.passval)||self.reg.test(self.nameval&&self.passval)){
			alert("值不能为空");
			return false;
		};
		self.data = {
			"name" : self.nameval,
			"password" : self.passval
		};
		return true;
	};
	//这个是注册
	function Signin(){
		var self = this;
		if(self.judge()){//当注册框格式输入正确时,才执行下列代码;
			getajax.get({
				"url" : "../js/signin.php",
				"stext" : self.data,
				"fn" : function(contents){
					if(contents.success){
						if(contents.reception == 0){//根据返回的值进行判断.
							alert("用户已经被注册了");
						}else{//成功则替换用户名,并关闭登录框
							var arr = JSON.parse(contents.reception);
							var oname = arr[0]["name"];
							var oid = arr[0]["id"];
							$(".title p a").html(self.nameval).attr("data-id",oid);
							$(".login").css("display","none");
						};
					}else{
						throw new Error("服务器繁忙,请稍后在试！")
					};
				}
			});
		};
	};
	$(".login form p:eq(2) input:eq(1)").click(function(e){//点击注册按钮时,运行封装的函数;
		if(!e)window.event;
		e.preventDefault();//点击发送留言时,阻止按钮的默认事件;
		Signin.prototype = new Ls();
		var aa = new Signin();
	});
	//这个是登录
	function Login(){
		var self = this;
		if(self.judge()){//当登录框格式输入正确时,才执行下列代码;
			getajax.get({
				"url" : "../js/login.php",
				"stext" : self.data,//要发送的数据
				"fn" : function(contents){
					if(contents.success){
						// console.log(reception);
						//0代表用户名错误;
						//其他代表完全正确;;
						//2代表密码错误;
						if(contents.reception == 0){//根据返回的值进行判断
							alert("用户名错误");
						}else if(contents.reception == 2){
							alert("密码错误");
						}else{
							var arr = JSON.parse(contents.reception);
							$(".title p a").html(self.nameval).attr("data-id",JSON.parse(contents.reception));
							$(".login").css("display","none");
						};
					}else{
						throw new Error("服务器繁忙,请稍后在试！")
					};
				}
			});
		};
	};
	$(".login form p:eq(2) input:eq(0)").click(function(e){//点击登录按钮时,运行封装的函数;
		if(!e)window.event;
		e.preventDefault();//点击发送留言时,阻止按钮的默认事件;
		Login.prototype = new Ls();
		var ff = new Login();
	});

	//-----------------我是可爱的分割线------------------------
	//注册登录关闭按钮
	$(".login span:eq(1)").click(function(){//点击关闭按钮,关闭登录框
		$(".login").css("display","none");
	});
	//点击请登录按钮
	$(".title p:eq(0)").click(function(){//点击登录按钮,显示登录框
		if($(this).find("a").html() == "请登录")$(".login").css("display","block");
	});
	//点击退出按钮
	$(".title span").click(function(){//点击退出后发送ajax请求
		getajax.get({
			url : "../js/append.php",
			fn : function(contents){
				if(contents.success){//成功则将该用户注销,失败报错.
					$(".title p a").html("请登录");
				}else{
					throw new Error("服务器繁忙,请稍后在试！")
				};
			}
		});
	});

	//-----------------我是可爱的分割线------------------------
	//更新留言
	function update(){//这个是封装添加留言.
		$("li span:odd").click(function(){//当删除按钮被点击时,判断用户是否登录,必须登录才能执行一下代码.
			var loginval = $("p a").html();
			if(loginval == "请登录"){
				$(".login").css("display","block");
				return false;
			};
			var self = this;
			var obj = {};//将要发送给后台的数据推送到此对象中
			obj.id = $(".title p").attr("data-id");
			obj.name = $(".title p a").html();
			obj.message = $(self).prev().html();
			getajax.get({//调用封装的get方法.填写url和要发送给后台的数据
				"url" : "../js/delete.php",
				"stext" : obj,
				"fn" : function(content){
					if(content.success){//根据成功信息判断
						//1:数据库已删除,0:不是该用户的留言,数据库删除失败.
						if(content.reception == 1){
							alert("删除成功");
							$(self).parent().remove();
						}else{
							alert("只能删除自己的留言哦");
						};
					}else{
						throw new Error("服务器繁忙,请稍后在试！")
					};
				}
			});
		});
	};
	//-----------------我是可爱的分割线------------------------
	function establish(len,name){//封装函数创建留言
		if(!len){//判断第一个参数是否有值,没有则创建单个li  ,
			var date= new Date();
			var month = "";//这个是用户发表留言的时间,从本地获取.
			(date.getMonth()+1)%10==(date.getMonth()+1)?month = "0" + (date.getMonth() + 1):month = date.getMonth() + 1;
			date = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
			var cli = document.createElement("li");
			var cso = document.createElement("span");
			var cst = document.createElement("span");
			$("ul").prepend(cli);
			$(cli).append(cso);
			$(cli).append(cst);
			$(cso).html($("textarea").val());
			$(cst).html("==>用户:" + $(".title p a").html() + "　时间:"+ date + "del");
		}else{//第一个参数有值,则根据长度来创建留言.
			if(name != 0){//判断第二个参数是否有值,第二个参数存的是的用户名,存在则直接登录,不存在则重新登录
				$(".title p a").html(name);
			};
			for(var i=1;i<len.length;i++){//i从1开始是因为第0个值存的是用户名
				var cli = document.createElement("li");
				var cso = document.createElement("span");
				var cst = document.createElement("span");
				$(cso).html(len[i]["message"]);
				$(cst).html("==>用户:" + len[i]["name"] + "　时间:"+len[i]["updatatime"] + "del");
				$("ul").append(cli);
				$(cli).append(cso);
				$(cli).append(cst);
			};
		};
	};
};