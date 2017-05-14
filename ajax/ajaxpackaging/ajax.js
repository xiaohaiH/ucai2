(function(){
	var getajax = window.getajax =  {};
	var getarguments = {};
	getajax.get = function(getargumengs.url,getargumengs.stext,getargumengs.fn){
		//----------我是可爱的分割线-----------
		//这里是将获取到的内容转换成后台可读取格式
		var arr = new Array();
		for(var k in getargumengs.stext){
			arr.k = getargumengs.stext[k];
		};
		var tjson = arr.join("&");
		//----------我是可爱的分割线-----------
		var xhr = XMLHttpRequest();
		var getstatus = {};
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status >=200&&xhr.status < 300||xhr.status == 304){
					getstatus.reception = xhr.responseText;
					getstatus.status = 1;
					getargumengs.fn(getstatus);
				}else{
					getstatus.reception = xhr.responseText;
					getstatus.status = xhr.status;
					getargumengs.fn(getstatus);
				};
			};
		};
		if(getargumengs.stext){
			xhr.open("GET",getargumengs.url,true);
		}else{
			xhr.open("GET",getargumengs.url+"?"+tjson,true);
		};
		xhr.send(null);
	};
	//get获取方式封装完成
	//----------我是可爱的分割线-----------
}());