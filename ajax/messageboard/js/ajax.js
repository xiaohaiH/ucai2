(function(){
	var getajax = window.getajax =  {};
	//getarguments 有三个参数 url 发送地址, stext 需要发送的文本, fn 是回调函数;
	getajax.get = function(getarguments){
		//----------我是可爱的分割线-----------
		//这里是将获取到的内容转换成后台可读取格式
		var arr = [];
		for(var k in getarguments.stext){
			var urlval = k + "=" + getarguments.stext[k];
			arr.push(urlval);
		};
		var tjson = arr.join("&");
		//----------我是可爱的分割线-----------
		var xhr = new XMLHttpRequest();
		var getstatus = {};
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status >=200&&xhr.status < 300||xhr.status == 304){
					getstatus.reception = xhr.responseText;
					getstatus.status = 1;
					if(getarguments.fn){
						getarguments.fn(getstatus);
					};
				}else{
					getstatus.reception = xhr.responseText;
					getstatus.status = xhr.status;
					if(getarguments.fn){
						getarguments.fn(getstatus);
					};
				};
			};
		};
		if(getarguments.stext){
			xhr.open("GET",getarguments.url+"?"+tjson,true);
		}else{
			xhr.open("GET",getarguments.url,true);
		};
		xhr.send(null);
	};
	//get获取方式封装完成
	//----------我是可爱的分割线-----------
})();