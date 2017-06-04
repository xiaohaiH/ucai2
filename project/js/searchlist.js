window.onload = function(){//整个页面加载完成后在运行此函数
	!(function(){//登录获取保存在本地的cookie值  用localStorage做的
		var username = localStorage.username;
		var Img = localStorage.avatar;
		// localStorage.clear()//清楚localStorage里所有的键值
		// sessionStorage.removeItem("*")//删除session中某个值
		// sessionStorage.clear("*")//删除session中某个值
		// sessionStorage.setItem("key", "value"); //设置某个键值
		// sessionStorage.setItem("key", "value"); //设置某个键值
		// sessionStorage.getItem("key");  //获取某个键值
		// localStorage.clear();
		// localStorage.removeItem("search");//每次进入页面清空搜索的值
		if(username){//判断本地是否存储了用户名
			$(".header div ul a:eq(0)").html(username).attr("href","javascript:;");
			$("<span></span>").prependTo(".header .user ul li:eq(0) a").css({"float":"left","background":"url(http://www.iliangcang.com/images/default/headImgTmp239.png) no-repeat center","width":"30px","height":"30px","background-size":"cover","margin":"14px 5px 0 0"});
			$(".header div ul a:eq(1)").remove();
		};
		$(".header div ul li:eq(0) a").click(function(){
			localStorage.setItem("address",window.location.href)//保存当前页面地址
		});
		$(".header div ul a:eq(0)").hover(//鼠标放到登录那里时判断是否已经登录,登录了则显示
			function(){
				if($(".header div ul a:eq(0)").html()!= "登录"){
					$(".userlist").css("display","block");
				}else{
					return false;
				};
			},
			function(){
				$(".userlist").css("display","none");
			}
		);
		$(".userlist").hover(//鼠标放到登录后的用户菜单上显示
			function(){
				$(".userlist").css("display","block");
			},
			function(){
				$(".userlist").css("display","none");
			}
		);
		$(".userlist li:eq(3)").click(function(){//点击登录后用户菜单上的退出按钮时,清空保存的值,并将购物车清零.
			 localStorage.clear();
			$(".userlist").css("display","none");
			$(".header .user ul li:eq(0) a span").remove();
			$(".header div ul a:eq(0)").html("登录").attr("href","../html/login.html");
			$("<a></a>").appendTo(".header .user ul li:eq(0)").html("注册").attr("href","../html/sign.html");
			$(".NoneShopping").html("你的购物车暂时没有商品...");
		});
	}())
//-----
	!(function(){
		if($(".user ul li a").eq(0).text() != "登录"){
			$.ajax({//刷新页面时如果登录了则刷新购物车的内容,并将获取到的添加进去
				url : "http://lc.shudong.wang/api_cart.php",
				// data : obj,
				dataType : "json",
				beforeSend : function(xhr){//在发送数据前将token值添加进去
					xhr.setRequestHeader("token",localStorage.token);
				},
				success : function(data){//判断数据成功后且获取到的数据长度不为0则将数据添加进购物车中.
					if(data.message == "购物车数据获取成功"&&data.data.length != 0){
						$(".NoneShopping").html("").append("<ul></ul>").find("ul").attr("class","list");
						$.each(data.data,function(){
							var compiled = _.template($("#templete2").html())
							$(compiled(this)).appendTo(".list").attr({"cart_id":this.cart_id,"cat_id":this.cat_id,"goods_id":this.goods_id,"goods_number":this.goods_number,"user_id":this.user_id});
						});
					};

					$(".delshop").click(function(){//点击购物车里的删除按钮时,发送ajax请求,成功则删除该宝贝
						var self = this;
						var obj = {};
						obj.goods_id = $(this).parents(".ShopList").attr("goods_id");
						obj.number = 0;
						$.ajax({
							url : "http://lc.shudong.wang/api_cart.php",
							type : "POST",
							data : obj,
							dataType : "json",
							beforeSend : function(xhr){
								xhr.setRequestHeader("token",localStorage.token)
							},
							success : function(data){
								if(data.message == "更新购物车成功"){
									$(self).parents(".ShopList").remove();
								}else{
									alert("数据更新失败,请重试")
								};
							}
						});
					});

				}
			});
		};
	}());
//-----
	$(".header .user ul li:eq(2)").hover(//放上去购物车显示,离开消失
		function(){
			$(".shoppinglist").css("display","block");
		},
		function(){
			$(".shoppinglist").css("display","none");
		}
	);
	$(".shoppinglist").mouseenter(function(){//确保鼠标移动到购物车上时,不会隐藏
		$(".shoppinglist").css("display","block");
	});
	$(".shoppinglist").mouseleave(function(){
		$(".shoppinglist").css("display","none");
	});
//-----
	$(".header .user ul li:eq(4)").hover(//放上去消息栏显示,离开消失
		function(){
			$(".messagelist").css("display","block");
		},
		function(){
			$(".messagelist").css("display","none");
		}
	);
	$(".messagelist").mouseenter(function(){//确保鼠标移动到消息栏上时,不会隐藏
		$(".messagelist").css("display","block");
	});
	$(".messagelist").mouseleave(function(){
		$(".messagelist").css("display","none");
	});
//-----
//搜索框
	var boo = true;//给定判断条件,默认为真
	$(".search input:eq(0)").mouseenter(function() {//鼠标移入搜索框时,自动全选里面的内容
		$(this).select();
	}).blur(function(){
		if($(".box").find("input").val()){//搜索框失去焦点时,判断搜索框是否有值,有则不变,没有值搜索框隐藏,且判断条件为真
			return false;
		};
		$(".box").animate({"left":"230px"},400,function(){
			boo = true;
		});
	});
	$(window).keydown(function(e){//判断如果搜索框有内容时,按回车键开始搜索
		if(!e)e=window.event;
		var searchval = $(".box").find("input").val();
		if(searchval && e.keyCode == 13){//判断如果搜索框有内容时,按回车键开始搜索
			$(".box input").val("");//每次搜索完都清空搜索框的值
			localStorage.setItem("search",searchval);
			location.href = "../html/searchlist.html";
		};
	});
	$(".search>input").on("mouseover",function(){
		if(!$(this).is(":animated")){
			$(this).animate({"opacity":".5"},200);
		};
	});
	$(".search>input").on("mouseout",function(){
		$(this).animate({"opacity":"1"},200);
	});
	$(".search>input").click(function() {//点击搜索框时,判断是否有值或者是否在运动中,是则不产生变化,否则根据判断条件来确定搜索框的显示跟隐藏.
		var searchval = $(".box input").val();
		if(searchval){
			$(".box input").val("");//每次搜索完都清空搜索框的值
			localStorage.search = searchval;
			location.href = "../html/searchlist.html";
		};
		if($(".box").find("input").val()||$(".box").is(":animated")){
			return false;
		};
		if(boo){
			$(".box").animate({"left":"0"},400,function(){
				$(".box").find("input").focus();
				boo = false;
			});
		}else{
			$(".box").animate({"left":"230px"},400,function(){
				$(".box").find("input").blur();
				boo = true;
			});
		};
	});
	////////
//导航栏
	$(".nav li").hover(
		function (){
			$(this).find("a").css("border-bottom","4px solid #262B30");
		},
		function (){
			$(this).find("a").css("border-bottom","none");
		}
	);
	$(".nav li").eq(1).hover(//鼠标放到商店上时,商店列表显示,移开消失
		function(){
			$(".stroe").css("display","block");
		},
		function(){
			$(".stroe").css("display","none");
		}
	);
	$(".stroe").hover(//确保鼠标放到商店列表上时,商店列表不会消失 且下划线也不会消失
		function(){
			$(this).prev().find("a").eq(1).css("border-bottom","4px solid #262B30");
			$(this).css("display","block");
		},
		function(){
			$(this).prev().find('a').eq(1).css("border-bottom","none");
			$(this).css("display","none");
		}
	);
	//////////////////////////
	//杂志清单
	var list2 = [
		['趣物','数码','汽车','文化','时尚','美食','建筑','空间','圈子','清单','活动','视频'],
		['男士','家居','数码','工具','玩具','美容','孩子','宠物','饮食','运动','文化','女士']
	];
	$(".nav>li").eq(2).hover(//鼠标放到杂志上时,杂志列表显示,移开消失,且将杂志列表里添加a节点
		function(){
				var lileng = $(this).index() - 2;
				$(".stroe2").html("");
				for(var i=0;i<list2[lileng].length;i++){
					$("<a></a>").attr("href","javascript:;").html(list2[lileng][i]).appendTo(".stroe2");
				}
				$(".stroe2").css("display","block");
		},
		function(){
			$(".stroe2").css("display","none");
		}
	);
	$(".nav>li").eq(3).hover(//鼠标放到分享上时,分享列表显示,移开消失,且将分享列表里添加a节点
		function(){
				var lileng = $(this).index() - 2;
				$(".stroe3").html("");
				for(var i=0;i<list2[lileng].length;i++){
					$("<a></a>").attr("href","javascript:;").html(list2[lileng][i]).appendTo(".stroe3");
				}
				$(".stroe3").css("display","block");
		},
		function(){
			$(".stroe3").css("display","none");
		}
	);
	$(".stroe2").hover(//确保鼠标放到杂志列表上时,其列表不会消失 且下划线也不会消失
		function(){
			$(this).prevAll(".box2").find('a').eq($(this).index()).css("border-bottom","4px solid #262B30");
			$(this).css("display","block");
		},
		function(){
			$(this).prevAll(".box2").find("a").eq($(this).index()).css("border-bottom","none");
			$(this).css("display","none");
		}
	);
	$(".stroe3").hover(//确保鼠标放到分享列表上时,其列表不会消失 且下划线也不会消失
		function(){
			$(this).prevAll(".box2").find('a').eq($(this).index()).css("border-bottom","4px solid #262B30");
			$(this).css("display","block");
		},
		function(){
			$(this).prevAll(".box2").find("a").eq($(this).index()).css("border-bottom","none");
			$(this).css("display","none");
		}
	);
//商店清单

	$.ajax({
		url : "http://lc.shudong.wang/api_cat.php",
		type : "GET",
		// obj : "",
		dataType : "json",
		success : function(data){
			// var getdata = JSON.parse(data);
			var getdata = data;
			if(getdata.message == "商品分类数据获取成功"){
				//数据不全,只到童装。。。。
				var arr = ["家居","家具","文具","数码","玩乐","厨卫","美食","男装","女装","童装","鞋包","配饰","美护","户外","植物","图书","艺术","礼物","推荐"];
				// var arr = getdata.data;
				// // // // // // //
				var num = 87;//图片名字,是以递减形式出现
				var arrindex =0;
				$('<div></div>').appendTo(".stroeleft").attr("class","stroetop")
				for(var j=0;j<3;j++){//这一段是将图片放入div中,并将数组里的值添加进去.
					var cul = document.createElement("ul");
					for(var i=0;i<7;i++){
						if(j==2&&i==5){
							break;
						};
						var cdiv = document.createElement("div");
						var cli = document.createElement("li");
						var cimg = document.createElement("img");
						var ca = document.createElement("a");
						var cspan = document.createElement("span");
						cdiv.className = "shoptop";
						ca.innerHTML = arr[arrindex++];
						ca.href = "javascript:;";
						cimg.src = "../img/236"+(num--)+".png";
						$(ca).append(cspan);
						$(cli).append(cimg).append(ca);
						$(cul).append(cli);
						$(cdiv).append(cul);
					}
					$("<div></div>").attr("class","shoplist").appendTo(cdiv);
					$(".stroetop").append(cdiv);
				};

				//list
				var index = 0;//商品列表清单
				var list=[
					    ["装饰摆件","生活用品","香薰香氛","空气净化","收纳整理","床品布艺","儿童家居","钟表灯具","其他"],
					    ["卧室","客厅","餐厅","书房","办公室","儿童房"],
					    ["办公用品","本子","笔具","书签","卡片","日历","其它"],
					    ["耳机","音箱","相机","存储设备","手机配件","移动电源","其它"],
					    ["儿童玩具","玩偶","益智","其他玩具"],
					    ["杯子","便当盒","饮食餐具","烹饪工具","酒具","茶具","清洁","毛巾","其他"],
					    ["美酒","进口食品","零食","巧克力","果汁","咖啡茶饮","糖果糕点","其它"],
					    ["上衣","T谐","裤装","外套","衬衫","套装","家居睡袍","内衣","春夏系列","秋冬系列","针织"],
					    ["上衣","T谐","裤装","外套","半裙","连衣裙","套装","针织","家居睡袍","内衣","春夏系列","秋冬系列"],
					    ["婴儿服","幼儿服","学童服"],
					    ["男鞋","女鞋","双肩包","单肩包","钱包","手提包","行李箱","手拿包","皮质包","布质包","其它"],
					    ["项链","戒指","耳饰","手链手镯","胸针徽章","手表","眼镜","丝巾围巾","领带领结","帽子","袜子","其它"],
					    ["牙膏","洗发护发","身体护理","香水精油","唇部护理","手工皂","指甲油","面膜面霜","男士护理","婴儿护理","其它"],
					    ["旅行设备","户外运动","雨具","自行车","其它","滑板"],
					    ["鲜花","永生花","花瓶花器","其它"],
					    ["文学","艺术","生活方式","杂志","儿童读物","其它"],
					    ["艺术品","装饰画","雕塑","摄影","装置模型","衍生品"],
					    ["送她","送他","送儿童","送父母","送闺蜜","送同事","送自己"],
					    ["新品","热销","优惠","限量","合作款","独家"]
					];
				//
				//
				$(".stroeleft").find("ul").hover(//鼠标移入列表的时候,商品列表里的下划线显示
					function(){
						$(this).css("border-color","#C0C0C0");
					},
					function(){
						$(this).css("border-color","white");
					}
				);
				//
				$(".stroeleft li").hover(
					function(){
						index = $(this).index();
						$(".shoplist").html("");//每次显示前先清空里面的值
						$(this).find("span").addClass("triangle");//移动到li上时,显示倒三角
						$(".shoplist").eq($(this).parent().parent().index()).css("display","block");//子级列表显示
						for(var i=0;i<list[$(this).index()].length;i++){//给子级列表赋值(数组内的值)
							$("<a></a>").attr("href","javascript:;").appendTo(".shoplist").eq($(this).parent().parent().index()).html(list[$(this).index(".stroeleft li")][i]);
						};
					},
					function(){
						$(this).find("span").removeClass("triangle");
						$(".shoplist").eq($(this).parent().parent().index()).css("display","none");
					}
				);
				$(".shoplist").mouseenter(function() {//鼠标划入自己列表时显示且倒三角与下划线不会消失
					$(this).css("display","block");
					$(this).prev().find("li").eq(index).find("span").addClass("triangle");
					$(this).prev().css("border-color","#C0C0C0");
				});
				$(".shoplist").mouseleave(function() {
					$(this).css("display","none");
					$(this).prev().find("li").eq(index).find("span").removeClass("triangle");
					$(this).prev().css("border-color","white");
					// ///////////////
				});
				//底部
				$("<div></div>").appendTo(".stroeleft").attr("class","stroebottom");
				$("<p></p>").appendTo(".stroebottom").append('<a></a><a></a>');
				$(".stroebottom p a").eq(0).attr("href","javascript:;").html("查看所有品牌&nbsp;>").css({"margin":"0 20px","font-size":"14px","color":"666666"});
				$(".stroebottom p a").eq(1).attr("href","javascript:;").html("最新到货&nbsp;>").css({"font-size":"14px","color":"666666"});
			}else{
				alert("数据获取失败")
			};
		}
	});

/*==================header结束=======================*/
!(function(){
	$(".contentTop .result div p:eq(0) a").css("color","#A9C7E1").find("i").css("display","block");//默认良品下的倒三角显示
	$(".contentTop .result div p a").on("click",function(){//点击时先清空所有的倒三角,然后让点击的倒三角显示.
		$(".contentTop .result div p a").css("color","#666666").find("i").css("display","none");
		$(this).css("color","#A9C7E1").find("i").css("display","block");
	});
	var keywords = localStorage.search;//主页搜索的关键词;
	$(".contentTop p").find("i").html(keywords);//将关键词赋值给搜索结果
	var obj = {};
	obj.search_text = keywords;
	obj.page=1;
	obj.pagesize=16;
	function search(){
		$.ajax({
			url : "http://h6.duchengjiu.top/shop/api_goods.php",
			type : "GET",
			data : obj,
			success : function(data){
				var getsearchdata = JSON.parse(data);
				if(getsearchdata.message == "商品数据为空"){
					alert("数据获取失败或没有此宝贝");
				}else{
					var tempval = $("#templete").html();
					var compiled = _.template(tempval);
					$.each(getsearchdata.data,function(index){
						if((index+1)%4 == 0){
							$(compiled(this)).appendTo(".contentBottom").css("margin","0px").attr({"data-brand_id":this.brand_id,"data-cat_id":this.cat_id,"data-cat_name":this.cat_name,"data-goods_id":this.goods_id,"data-goods_name":this.goods_name,"data-goods_number":this.goods_number,"data-price":this.price});
						}else{
							$(compiled(this)).appendTo(".contentBottom").attr({"data-brand_id":this.brand_id,"data-cat_id":this.cat_id,"data-cat_name":this.cat_name,"data-goods_id":this.goods_id,"data-goods_name":this.goods_name,"data-goods_number":this.goods_number,"data-price":this.price});
						};
					});
					$(".productshow").hover(
						function(){
							if($(this).find("a").is(":animated")){
								$(this).find("a").stop(true,true);
							}
							$(this).find("a").fadeIn("fast");
						},
						function(){
							$(this).find("a").fadeOut("fast");
						}
					);
				};

				$(".product").find("i").click(function(e){//点击人气宝贝上购物车按钮时,阻止a链接的跳转,然后将该id和数量发送到服务器,且在发送前添加token头
					e.preventDefault();
					if($(".user ul li a").eq(0).text() == "登录"){
						alert("请先登录");
						return false;
					};
					var self = this;
					var obj = {};
					obj.goods_id = $(this).parents(".product").attr("data-goods_id");
					obj.number = 1;
					$.ajax({
						url : "http://lc.shudong.wang/api_cart.php",
						type : "POST",
						data : obj,
						dataType : "json",
						beforeSend : function(xhr){
							xhr.setRequestHeader("token",localStorage.token)
						},
						success : function(data){//添加成功后,根据返回的message来判断
							if(data.message == "添加到购物车成功"){//第一次添加且成功后将本地数据添加到模板然后添加到购物车中
								var objdata = {};
								objdata.goods_id = obj.goods_id;//图片ID
								objdata.goods_name = $(self).parents(".product").attr("data-goods_name");//宝贝名称
								objdata.goods_number = obj.number;//添加的数量
								objdata.goods_price = $(self).parents(".product").attr("data-price");//宝贝的价格
								objdata.goods_thumb = "http://imgs-qn.iliangcang.com/ware/goods/icon/2/"+ parseInt(obj.goods_id / 1000)+"/" + obj.goods_id +".jpg";//这个是图片的地址
								var compiled = _.template($("#templete2").html());//模板函数
								if($(".NoneShopping").find(".list")){//判断购物车里有没有添加宝贝,有则直接添加进去
									$(compiled(objdata)).prependTo(".list");//使用模板函数
								}else{//没有的话则先清空里面的内容,然后创建ul,并将内容添加到ul中
									$(".NoneShopping").html("");
									$(compiled(objdata)).prependTo("<ul></ul>").parent().attr("class","list").prependTo(".NoneShopping");
								};
							}else if(data.message.indexOf("数据库错误") != -1){//当数据库没有这个宝贝时,
								alert("数据库没有这个产品,哈哈哈哈哈哈")
							}else if(data.message == "更新购物车成功"){//这个是判断如果购物车里有这个宝贝的时候,正常来说是添加他的数量,但是这个API有点问题,所以没做了
								console.log("数据库有问题,这个就不更新了");
							}else{
								console.log(data.message)
								alert("添加失败");
							};

						}
					});
				});
			// 
			// 
			$(".product figcaption").find("span:eq(1)").click(function(){
				if($(".user ul li a").eq(0).text() == "登录"){
					alert("请先登录");
					return false;
				};
				if($(this).css("background-image").indexOf("red") == -1){
					$(this).css("background-image","url(../img/xin_red.png)").html(Number($(this).html())+1);
				}else{
					$(this).css("background-image","url(../img/xin_black.png)").html(Number($(this).html())-1)
				};
			});
			}
		});
	};
	search();
}())

/*==================foot底部=======================*/
// footer底部
$(".footer dl").hover(//鼠标触碰底部的客户端下载时,显示二维码
	function(){
		$(this).find("a").css("color","#999999");
		$(".code").css("display","block");
	},
	function(){
		$(this).find("a").css("color","#595C5C")
		$(".code").css("display","none");
	}
);
$(".code").hover(//鼠标触碰底部的二维码时,确保他不会消失
	function(){
		$(this).css("display","block");
	},
	function(){
		$(this).css("display","none");
	}
);

$(".footerright li:eq(0)").hover(//鼠标触碰底部的微信时,淡入
	function(){
		$(".footerright p").fadeIn(300);
	},
	function(){
		$(".footerright p").css("display","none");
	}
);
$(".footer .footerright p").hover(//鼠标触碰到二维码时不会消失,且移开时淡出
	function(){
		$(this).css("display","block");
	},
	function(){
		$(this).fadeOut(300);
	}
);

//监听滚轮事件
!(function(){//
	var shang = 0;
	var top = $(this).scrollTop();//将距离页面顶部的高度赋值
	if(top >= 133){//判断如果top大于133时,顶部良仓隐藏
		$(".header").slideUp();
	}
	$(window).scroll(function(){
		top = $(this).scrollTop();
		if(!($(".UpTop").is(":animated"))){
			if(top >= 166){//判断如果值大于时,返回顶部淡入
				$(".UpTop").fadeIn();
			}else{
				$(".UpTop").fadeOut();
			};
		};
		if(top <= shang){//判断top值如果大于上一个值时(当鼠标往上滚动时),则顶部良仓显示,
			shang = top;//保存滚轮移动的上一个值
			if($(".header").is(":animated")){//节流
				return false;
			};
			$(".header").slideDown();
			return false;
		};
		shang = top;//保存滚轮移动的上一个值
		if(top >= 133){//判断如果top大于133时,顶部良仓隐藏
			if($(".header").is(":animated")){//截流
				return false;
			};
			$(".header").slideUp();
		};
	});
}());
//返回顶部
!(function(){
	$(".UpTop").click(function(){
		var timer = setInterval(function(){
			var xx = $(window).scrollTop();
			if(xx<=0){
				clearInterval(timer);
				return false;
			};
			xx-=returnTop(0.2);
			$(window).scrollTop(xx);
		},1);
	});
	function returnTop(t){
		var H = $(document).height();
		return H/t/1000;
	};
}());






//-----
};