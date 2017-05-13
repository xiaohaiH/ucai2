window.onload = function(){
	$(".login").css("height",window.screen.height);
	//-----------------我是可爱的分割线------------------------
	(function(){
		getajax.get({
			"url" : "../js/load.php",
			"fn" : function(content){
				var lilen = JSON.parse(content.reception);
				// console.log(lilen);
				establish(lilen);
				$("li span").click(function(){
					var loginval = $("p").html();
					if(loginval == "请登录"){
						$(".login").css("display","block");
						return false;
					};
					var self = this;
					var obj = {};
					obj.id = $(".title p").attr("data-id");
					obj.name = $(".title p").html();
					obj.message = $(self).prev().html();
					getajax.get({
						"url" : "../js/delete.php",
						"stext" : obj,
						"fn" : function(content){
							console.log(content.reception);
							if(content.reception == 1){
								alert("删除成功");
								$(self).parent().remove();
							}else{
								alert("只能删除自己的留言哦");
							};
						}
					});
				});
			}
		});
	}());
	//-----------------我是可爱的分割线------------------------
	//点击发送留言按钮
	$("button").click(function(){
		var loginval = $("p").html();
		if(loginval == "请登录"){
			$(".login").css("display","block");
		}else{
			var messageval = $(".import textarea").val();
			var messagevaltext = /^\w/g.test(messageval);
			if(!messagevaltext){
				alert("请输入内容,不要以空格开头");
				return false;
			};
			var obj = {};
			obj.message = $(".import").find("textarea").val();
			obj.name = $(".title p").html();
			obj.id = $(".title p").attr("data-id");
			getajax.get({
				"url" : "../js/append.php",
				"stext" : obj,
				"fn" : function(){
					establish();
					// $("li span").click(function(){
					// 	$(this).parent().remove();
					// });
				}
			});
		};
	});
	//-----------------我是可爱的分割线------------------------
	//利用原型来写登录注册
	function ls(){};
	ls.prototype.judge = function(){
		var self = this;
		self.userele = $(".login div p:eq(2) input:eq(0)");
		self.passele = $(".login div p:eq(2) input:eq(1)");
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
		console.log("aa")
		var self = this;
		if(self.judge()){
			getajax.get({
				"url" : "../js/signin.php",
				"stext" : self.data,
				"fn" : function(contents){
					var reception = contents.reception;
					if(reception == "用户已经被注册了"){
						alert("用户已经被注册了");
					}else{
						var arr = JSON.parse(reception);
						var oname = arr[0]["name"];
						var oid = arr[0]["id"];
						console.log(oid)
						$(".title p").html(self.nameval).attr("data-id",oid);
						$(".login").css("display","none");
					};
				}
			});
		};
	};
	$(".login div p:eq(2) input:eq(1)").click(function(){
		Signin.prototype = new ls();
		var aa = new Signin();
	});
	//这个是登录
	function Login(){
		var self = this;
		if(self.judge()){
			getajax.get({
				"url" : "../js/login.php",
				"stext" : self.data,
				"fn" : function(contents){
					var reception = contents.reception;
					// console.log(reception);
					//0代表用户名错误;
					//1代表完全正确;换成ID了;
					//2代表密码错误;
					if(reception == 0){
						alert("用户名错误");
					}else if(reception == 2){
						alert("密码错误");
					}else{
						$(".title p").html(self.nameval).attr("data-id",JSON.parse(reception));
						$(".login").css("display","none");
					};
				}
			});
		};
	};
	$(".login div p:eq(2) input:eq(0)").click(function(){
		Login.prototype = new ls();
		var ff = new Login();
	});

	//-----------------我是可爱的分割线------------------------
	//注册登录关闭按钮
	$(".login span:eq(1)").click(function(){
		$(".login").css("display","none");
	});
	//点击请登录按钮
	$(".title p:eq(0)").click(function(){
		$(".login").css("display","block");
	});

	//-----------------我是可爱的分割线------------------------


	function establish(len){//封装函数创建留言
		if(!len){
			var cli = document.createElement("li");
			var cso = document.createElement("span");
			var cst = document.createElement("span");
			$("ul").prepend(cli);
			$(cli).append(cso);
			$(cli).append(cst);
			$(cso).html($("textarea").val());
			$(cst).html("del");
		}else{
			for(var i=0;i<len.length;i++){
				var cli = document.createElement("li");
				var cso = document.createElement("span");
				var cst = document.createElement("span");
				$(cso).html(len[i]["message"]);
				$(cst).html("del");
				$("ul").prepend(cli);
				$(cli).append(cso);
				$(cli).append(cst);
			};
		};
	};
};