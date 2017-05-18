window.onload = function(){
//-----
	$("ul li:eq(2)").hover(
		function(){
			$(".shoppinglist").css("display","block");
		},
		function(){
			$(".shoppinglist").css("display","none");
		}
	);
	$(".shoppinglist").mouseenter(function(){
		$(".shoppinglist").css("display","block");
	});
	$(".shoppinglist").mouseleave(function(){
		$(".shoppinglist").css("display","none");
	});
//-----
	$("ul li:eq(4)").hover(
		function(){
			$(".messagelist").css("display","block");
		},
		function(){
			$(".messagelist").css("display","none");
		}
	);
	$(".messagelist").mouseenter(function(){
		$(".messagelist").css("display","block");
	});
	$(".messagelist").mouseleave(function(){
		$(".messagelist").css("display","none");
	});
//-----
//搜索框
	var boo = true;
	$(".search input:eq(0)").mouseenter(function(event) {
		$(this).select();
	}).blur(function(){
		if($(".box").find("input").val()){
			return false;
		};
		$(".box").animate({"left":"230px"},400,function(){
			boo = true;
		});
	});
	$(".search>input").click(function() {
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

	$(".nav li").eq(1).hover(
		function(){
			$(".stroe").css("display","block");
		},
		function(){
			$(".stroe").css("display","none");
		}
	);
//导航栏
	$(".stroe").hover(
		function(){
			$(this).prev().find("a").eq(1).css("border-bottom","4px solid #262B30");
			$(this).css("display","block");
		},
		function(){
			$(this).prev().find('a').eq(1).css("border-bottom","4px solid #EDEDED");
			$(this).css("display","none");
		}
	);
	$(".stroe2").hover(
		function(){
			$(this).prevAll(".box2").find('a').eq($(this).index()+1).css("border-bottom","4px solid #262B30");
			$(this).css("display","block");
		},
		function(){
			$(this).prevAll(".box2").find("a").eq($(this).index()+1).css("border-bottom","4px solid #EDEDED");
			$(this).css("display","none");
		}
	);
//杂志
	var list2 = [
		['趣物','数码','汽车','文化','时尚','美食','建筑','空间','圈子','清单','活动','视频'],
		['男士','家居','数码','工具','玩具','美容','孩子','宠物','饮食','运动','文化','女士']
	];
	$(".nav>li").hover(
		function(){
			if($(this).index() == 2||$(this).index() == 3){
				var lileng = $(this).index() - 2;
				$(".stroe2").html("");
				for(var i=0;i<list2[lileng].length;i++){
					$("<a></a>").attr("href","javascript:;").html(list2[lileng][i]).appendTo(".stroe2");
				}
				$(".stroe2").css("display","block");
			}else{
				return false;
			};
		},
		function(){
			$(".stroe2").css("display","none");
		}
	);

//商店
	var arr = ["家居","家具","文具","数码","玩乐","厨卫","美食","男装","女装","童装","鞋包","配饰","美护","户外","植物","图书","艺术","礼物","推荐"];

	var num = 87;
	var arrindex =0;
	$('<div></div>').appendTo(".stroeleft").attr("class","stroetop")
	for(var j=0;j<3;j++){
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
	var index = 0;
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
	$(".stroeleft").find("ul").hover(
		function(){
			$(this).css("border-color","#C0C0C0");
		},
		function(){
			$(this).css("border-color","white");
		}
	);
	$(".stroeleft li").hover(
		function(){
			index = $(this).index();
			$(".shoplist").html("");
			$(this).find("span").addClass("triangle");
			$(".shoplist").eq($(this).parent().parent().index()).css("display","block");
			for(var i=0;i<list[$(this).index()].length;i++){
				$("<a></a>").attr("href","javascript:;").appendTo(".shoplist").eq($(this).parent().parent().index()).html(list[$(this).index(".stroeleft li")][i]);
			};
		},
		function(){
			$(this).find("span").removeClass("triangle");
			$(".shoplist").eq($(this).parent().parent().index()).css("display","none");
		}
	);
	$(".shoplist").mouseenter(function() {
		console.log(index)
		$(this).css("display","block");
		$(this).prev().find("li").eq(index).find("span").addClass("triangle");
		$(this).prev().css("border-color","#C0C0C0");
	});
	$(".shoplist").mouseleave(function() {
		$(this).css("display","none");
		$(this).prev().find("li").eq(index).find("span").removeClass("triangle");
		$(this).prev().css("border-color","white");
	});
	// ///////////////
	//底部
	$("<div></div>").appendTo(".stroeleft").attr("class","stroebottom");
	$("<p></p>").appendTo(".stroebottom").append('<a></a><a></a>');
	$(".stroebottom p a").eq(0).attr("href","javascript:;").html("查看所有品牌&nbsp;>").css({"margin":"0 20px","font-size":"14px","color":"666666"});
	$(".stroebottom p a").eq(1).attr("href","javascript:;").html("最新到货&nbsp;>").css({"font-size":"14px","color":"666666"});
/*==================header结束=======================*/
// banner
$.ajax({
	url : "http://lc.shudong.wang/api_ad.php?position_id=1",
	type : "GET",
	dataType : "json",
	success : function(data){
		console.log(data.data);
		var bannerImg =  data.data;
		for(var i=0;i<bannerImg.length;i++){
			$("<img/>").attr({"src":bannerImg[i].url}).appendTo("<a></a>").parent().attr("href",bannerImg[i].thumb).css("display","block").appendTo("<li></li>").parent().appendTo(".bannerbox");
			// $("<li></li>").append("a")
		}
	}
});













//-----
};