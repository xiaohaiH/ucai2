$(window).ready(function(){
	//
	$("body").css("height",document.documentElement.clientHeight);
	//
	$("form button").click(function(e){
		e.preventDefault();
		var user = $("form input:eq(0)").val();
		var pass = $("form input:eq(1)").val();
		var reg = /^\w{3,20}$/;
		if(!reg.test(user)){
			alert("用户名格式错误");
			return false;
		};
		reg = /^\w{6,20}$/;
		if(!reg.test(pass)){
			alert("密码格式错误");
			return false;
		};

		var obj = {};
		obj.status = "login";
		obj.username = user;
		obj.password = pass;
		$.ajax({
			url : "http://h6.duchengjiu.top/shop/api_user.php",
			type : "POST",
			data : obj,
			success : function(data){
				var mess = JSON.parse(data);
				if(mess.message == "用户名不存在"){
					alert("用户名不存在,请重新输入");
				}else if(mess.message == "密码错误"){
					alert("密码错误,请重新输入");
				}else{
					console.log(mess)
					localStorage.username = mess.data.username;
					localStorage.avatar = mess.data.avatar;
					localStorage.token = mess.data.token;

					location.href = "../html/index.html";
				};
			}
		});
	});
});