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
		// console.log("aa")
		$(".shoppinglist").css("display","block");
	});
	$(".shoppinglist").mouseleave(function(){
		// console.log("aa")
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
		// console.log("aa")
		$(".messagelist").css("display","block");
	});
	$(".messagelist").mouseleave(function(){
		// console.log("aa")
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










//-----
};