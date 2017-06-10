window.onload = function(){
	///设置分屏.
	!function(){
		var oBigBox = document.getElementById("bigBox");
		var oIcon = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
		scrollScreen(oBigBox,{max:3,min:0},400,oIcon);///监听滚轮事件并更改分屏值.
		for(var i = 0;i < oBigBox.children.length;i++){
			var H = document.documentElement.clientHeight || document.body.clientHeight;
			oBigBox.children[i].style.height = H + "px";
		};
	}();
	///设置分屏.
};
