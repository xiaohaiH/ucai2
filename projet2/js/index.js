window.onload = function(){
	///设置大div的宽度自适应.
	!(function(){
			var SW = window.screen.width;///屏幕宽度.
			var SH = window.screen.height;///屏幕高度.
			var DW = document.documentElement.clientWidth;///文档宽度.
			var DH = document.documentElement.clientHeight;///文档高度.
			var OEWidth = document.getElementsByClassName("EWidth");///设置自适应宽度的class.
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
			});
		}());
		///顶部li效果
		!(function(){
			var OHeaderMiddle = document.getElementsByClassName("headerMiddle")[0].children[0].children;
			for(var i = 0;i < OHeaderMiddle.length;i++){
				OHeaderMiddle[i].children[0].addEventListener("click",function(){
					for(var k = 0;k < OHeaderMiddle.length;k++){
						OHeaderMiddle[k].children[0].classList.remove("BgGreen");
					};
					this.classList.add("BgGreen");
				});
			};
		}());
	///设置大div的宽度自适应.
};