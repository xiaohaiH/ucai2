window.onload = function(){
	///设置分屏.
	!function(){
		var oBigBox = document.getElementById("bigBox");
		var oIcon = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
		scrollScreen(oBigBox,{max:3,min:0},400,oIcon);///监听滚轮事件并更改分屏值.
		///设置每一屏的高度.
		for(var i = 0;i < oBigBox.children.length;i++){
			var H = document.documentElement.clientHeight || document.body.clientHeight;
			oBigBox.children[i].style.height = H + "px";
		};
		///监听窗口根据窗口大小更改每一屏的高度.
		window.addEventListener("resize",function(){
			for(var i = 0;i < oBigBox.children.length;i++){
				oBigBox.children[i].style.height = document.documentElement.clientHeight + "px";
			};
		});
	}();
	///设置分屏.
	///第一屏.
	!function(){
		///设置宽度.
		var OEWidth = document.getElementsByClassName("EWidth");
		for(var k = 0;k < OEWidth.length;k++){
			OEWidth[k].style.width = window.screen.width * 0.73 + "px";
			OEWidth[k].style.margin = "0 auto";
		};
		///设置钟表的跳动.
		///
		var oBigBox = document.getElementById("bigBox");
		var time = document.getElementsByClassName("watch")[0];
		var oTop = parseInt(getComputedStyle(oBigBox,false)["top"]);
		var oFoot = document.getElementsByClassName("oneScreen")[0].getElementsByTagName("footer")[0].children[0].children;
		var oSection = document.getElementsByClassName("oneScreen")[0].getElementsByTagName("section")[0].children;
		var oTextRotate = document.getElementsByClassName("oneSection")[0].getElementsByClassName("oneSectionTextBox")[0].children[0];
		var oDown = document.getElementsByClassName("oneSection")[0].getElementsByClassName("oneSectionTextBox")[0].children[1];
		console.log(oDown);




		oneSectionAnimate("start",0);///默认第一幅动画开始.
		///这里是点击底部banner导航跳转.
		for(let i = 0;i < oFoot.length;i++){
			oFoot[i].addEventListener("click",function(){
				if(i == 0){
					oneSectionAnimate("start",0);
				}else{
					oneSectionAnimate("end");
				};
				if(i==1){
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "leftMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "rightMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "down 2.4s linear 0s forwards";

				}else{
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("twoSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "none";

				};
				if(i==2){
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "leftMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "rightMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "down 2.4s linear 0s forwards";
				}else{
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("threeSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "none";

				};
				if(i==3){
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "leftMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "rightMove 2.4s linear 0s forwards";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "down 2.4s linear 0s forwards";

				}else{
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("span")[0].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("span")[1].style.animation = "none";
					document.getElementsByClassName("oneScreen")[0].getElementsByClassName("fourSectionTextBox")[0].getElementsByTagName("p")[0].style.animation = "none";

				};
				///点击底部的导航跳转到不同banner.
				for(var j = 0;j < oSection.length;j++){
					oSection[j].style.opacity = 0;
					oSection[j].style.zIndex = 2;
					oFoot[j].children[0].style.borderColor = "transparent";
					oFoot[j].children[0].style.opacity = ".5";
				};
				oSection[i].style.opacity = 1;
				oSection[i].style.zIndex = 3;
				this.children[0].style.borderTop = "1px solid white";
				this.children[0].style.opacity = 1;
				///点击底部的导航跳转到不同banner.
			});
		};
		///这里是点击底部banner导航跳转结束.
		var OBanner = document.getElementsByClassName("oneScreen")[0].getElementsByClassName("banner")[0];
		OBanner.style.minWidth = window.screen.width * 0.9 + "px";///这个是设置图片的最小宽度.
		///这里是设置banner图片的初始高度.
		// for(var i = 0;i < OBanner.children.length;i++){
		// 	var OH = parseInt(getComputedStyle(OBanner.children[i].children[0],false).height);
		// 	if(OH < window.screen.width){
		// 		OBanner.children[i].children[0].style.height = document.documentElement.clientHeight + "px";console.log(OBanner.children[i].children[0])
		// 	}else{
		// 		OBanner.children[i].children[0].style.height = "initial";
		// 	};
		// };///这里是监听banner图片的初始高度.
		// window.addEventListener("resize",function(){
		// 	for(var i = 0;i < OBanner.children.length;i++){
		// 		var OH = parseInt(getComputedStyle(OBanner.children[i].children[0],false).width);
				
		// 		if(OH < window.screen.width){
		// 			OBanner.children[i].children[0].style.height = document.documentElement.clientHeight + "px";
		// 		}else{
		// 			OBanner.children[i].children[0].style.height = "initial";
		// 		};
		// 	};
		// });

		function oneSectionAnimate(state,num){///第一屏第一张banner的动画 参数:判断是否开始运动,钟表的时间跳动.
			if(state == "start"){
				oTextRotate.children[0].style.animation = "leftMove 2.4s linear 0s forwards";
				oTextRotate.children[1].style.animation = "rightMove 2.4s linear 0s forwards";
				oTextRotate.children[2].style.animation = "rightMove 2.4s linear 0s forwards";

				oDown.style.animation = "down 2.4s linear 0s forwards";

				time.children[0].style.transition = "transform 2.4s cubic-bezier(.36,.2,1,1.24)";
				time.children[0].style.transform = "rotate(0deg)";
				var timer = setInterval(function(){
					num++;
					if(num < 10){
						time.children[1].innerHTML = "0" + num;
					}else if(num >= 10&&num <= 60){
						time.children[1].innerHTML = num;
					}else{
						clearInterval(timer);
					};
				},40);
			}else{
				oDown.style.animation = "none";
				oTextRotate.children[0].style.animation = "none";
				oTextRotate.children[1].style.animation = "none";
				oTextRotate.children[2].style.animation = "none";
				time.children[1].innerHTML = "0";
				time.children[0].style.transition = "none";
				time.children[0].style.transform = "rotate(-255deg)";
			};
		};
/*		window.addEventListener("wheel",function(){
			oZindex = getComputedStyle(time.parentNode,false)["z-index"];
			oTop = parseInt(getComputedStyle(oBigBox,false)["top"]);
			console.log(oTop);
			if(oTop == 0&&oZindex == 3){
				time.children[0].style.transform = "rotate(0deg)";
				time.children[0].style.transition = "transform 2.4s cubic-bezier(.36,.2,1,1.24)";
				var timer = setInterval(function(){
					num++;
					if(num < 10){
						time.children[1].innerHTML = "0" + num;
					}else if(num >= 10&&num <= 60){
						time.children[1].innerHTML = num;
					}else{
						clearInterval(timer);
					};
				},40);
			}else{
				console.log("console");
				time.children[0].style.transition = "none";
				time.children[0].style.transform = "rotate(-255deg)";
			};
		});*/
	}();
};
