window.onload = function(){
	///设置大div的宽度自适应.
	var LiIndex = [0];
	!(function(){
			var SW = window.screen.width;///屏幕宽度.
			var SH = window.screen.height;///屏幕高度.
			var DW = document.documentElement.clientWidth;///文档宽度.
			var DH = document.documentElement.clientHeight;///文档高度.
			var OHeader = document.getElementsByTagName("header")[0];
			OHeader.style.height = DH * 0.21 + "px";///设置顶部的高度.
			var OEWidth = document.getElementsByClassName("EWidth");///设置自适应宽度的class.
			var OHeaderMiddle1 = document.getElementsByClassName("headerMiddle")[0];
			OHeaderMiddle1.style.lineHeight = getComputedStyle(OHeaderMiddle1,false).height;
			document.getElementsByClassName("headerRight")[0].children[0].style.lineHeight = getComputedStyle(document.getElementsByClassName("headerMiddle")[0],false).height;
			var OHeaderRight1 = document.getElementsByClassName("headerRight")[0].getElementsByTagName("p");
			OHeaderRight1[0].children[0].style.lineHeight = getComputedStyle(OHeaderRight1[0].children[0],false).height;
			OHeaderRight1[1].children[0].style.lineHeight = getComputedStyle(OHeaderRight1[1].children[0],false).height;
			OHeaderRight1[0].children[0].style.marginTop = parseInt(getComputedStyle(OHeaderRight1[0].children[0],false).height) * 0.9 +"px";
			OHeaderRight1[1].children[0].style.marginTop = parseInt(getComputedStyle(OHeaderRight1[1].children[0],false).height) * 0.9 +"px";
			var OHeaderMiddle = document.getElementsByClassName("headerMiddle")[0].children[0].children;///获取顶部li.
			for(var i = 0;i < OEWidth.length;i++){//设置他的最小宽度
				document.getElementsByClassName("EWidth")[i].style.minWidth = (SW * 0.87) * 0.81 + "px";
			};
			if(DW <= SW * 0.87){
				for(var i = 0;i < OEWidth.length;i++){
					document.getElementsByClassName("EWidth")[i].style.width = "100%";
				};
			};
			window.addEventListener("resize",function(e){
				DW = document.documentElement.clientWidth;
				if(DW <= SW * 0.87){
					for(var i = 0;i < OEWidth.length;i++){
						document.getElementsByClassName("EWidth")[i].style.width = "100%";
					};
				}else{
					for(var i = 0;i < OEWidth.length;i++){
						document.getElementsByClassName("EWidth")[i].style.width = "87%";
					};
				};
				///监听窗口改变时li   ----bug 需要调整
				document.getElementsByClassName("BgGreen")[0].style.left = LiIndex[0] * parseInt(getComputedStyle(document.getElementsByClassName("headerMiddle")[0].children[0].children[0],false).width) + "px";
				OHeaderRight1[0].children[0].style.marginTop = parseInt(getComputedStyle(OHeaderRight1[0].children[0],false).height) * 0.9 +"px";
				OHeaderRight1[1].children[0].style.marginTop = parseInt(getComputedStyle(OHeaderRight1[1].children[0],false).height) * 0.9 +"px";
			});
		}());
		///顶部li效果
		!(function(){
			var OHeaderMiddle = document.getElementsByClassName("headerMiddle")[0].children[0].children;///获取顶部li.
			for(let i = 0;i < OHeaderMiddle.length-1;i++){
				OHeaderMiddle[i].addEventListener("mouseover",function(){
					LiIndex.push(i);
					document.getElementsByClassName("BgGreen")[0].style.left = i * parseInt(getComputedStyle(this,false).width) + "px";
				});
			};
			var OHeaderRight = document.getElementsByClassName("headerRight")[0].children;
			OHeaderRight[1].children[0].addEventListener("mouseover",function(){
				// this.style.transform = "translateZ(px) rotateY(-90deg)";
				this.style.transform = "translateZ(-" + getComputedStyle(this,false).width + ") rotateY(-90deg)";
				console.log(this.style.transform);
			});
			OHeaderRight[1].children[0].addEventListener("mouseout",function(){
				this.style.transform = "translateZ(0px) rotateY(0deg)";
			});
			OHeaderRight[2].children[0].addEventListener("mouseover",function(){
				this.style.transform = "translateZ(-" + getComputedStyle(this,false).height + ") rotateX(-90deg)";
			});
			OHeaderRight[2].children[0].addEventListener("mouseout",function(){
				this.style.transform = "translateZ(0px) rotateX(0deg)";
			});
			document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.lineHeight = getComputedStyle(document.getElementsByTagName("nav")[0],false).height;

			///搜索框点击效果 .
			var oNav = document.getElementsByTagName("nav")[0];
			var searchdefault = true;
			oNav.children[1].children[1].addEventListener("click",function(){
				if(searchdefault){
					oNav.children[1].style.width = 30 + "%";
					oNav.children[0].style.width = 65 + "%";
					this.style.width = 10 + "%";
					this.previousElementSibling.style.display = "block";
					searchdefault = false;
				}else{
					oNav.children[1].style.width = 4 + "%";
					oNav.children[0].style.width = 95 + "%";
					this.style.width = 100 + "%";
					this.previousElementSibling.style.display = "none";
					searchdefault = true;
				};
			});
		}());
	///设置大div的宽度自适应.
};
