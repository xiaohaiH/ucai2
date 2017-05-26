$(window).ready(function(){
	//
	$("body").css("height",document.documentElement.clientHeight);

	$("form:eq(0) button").click(function(e){
		if(e)var e = window.event;
		e.preventDefault();
		var obj = {};
		obj.status = "register";
		obj.username = $("input:eq(0)").val();
		obj.password = $("input:eq(1)").val();
		var queren = $("input:eq(2)").val();
		var reg = /^\w{3,20}$/;
		if(!reg.test(obj.username)){
			alert("用户名格式错误,3~20个字符以内");
			return false;
		};
		if(obj.password==obj.username){
			alert("密码不能与用户名相同");
			return false;
		};
		reg = /^\w{6,20}$/;
		if(!reg.test(obj.password)){
			alert("密码格式错误,3~20个字符以内");
			return false;
		};
		if(obj.password != queren){
			alert("两次密码不匹配");
			return false;
		};
		$.ajax({
			url : "http://h6.duchengjiu.top/shop/api_user.php",
			data : obj,
			type : "POST",
			success : function(data){
				var getdata = JSON.parse(data);
				if(getdata.message == "用户名已存在"){
					alert("用户名已存在");
					return false;
				}else{
					location.href = "../html/login.html";
				};
			}
		});

	});

});