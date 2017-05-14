(function(){
	var getajax = window.getajax =  {};
	//getarguments是形参: 有三个参数 url 发送地址, stext 需要发送的文本, fn 是回调函数;
	getajax.get = function(getarguments){//
		//----------我是可爱的分割线-----------
		var xhr = new XMLHttpRequest();//ajax第一步,创建超文本传输请求(new XMLHttpRequest());
		var getstatus = {};//这个是将接收的数据存储到一个对象中.
		xhr.onreadystatechange = function(){//ajax第一步,状态监听
			//xhr.readyState(0~4)是判断数据库是否成功接收数据;
			//xhr.status(1**~5**)是判断数据是否成功处理;
			if(xhr.readyState == 4){
				if(xhr.status >=200&&xhr.status < 300||xhr.status == 304){
					//当数据成功被处理并接收时,将状态码和接收的文本保存起来,方便回调函数调用.
					getstatus.reception = xhr.responseText;
					getstatus.success = true;
					getstatus.status = xhr.status;
					if(getarguments.fn){
						getarguments.fn(getstatus);
					};
				}else{
					//当数据被处理或接收失败时,将状态码和接收的错误代码文本保存起来,方便回调函数调用.
					getstatus.reception = xhr.responseText;
					getstatus.status = xhr.status;
					getstatus.success = false;
					if(getarguments.fn){
						getarguments.fn(getstatus);
					};
				};
			};
		};
		if(getarguments.stext){//判断是否有要发送给后台的数据,有则进行转换,没有直接发送.
				var arr = [];//将要发送的值通过遍历获取,然后进行格式转换
				if((getarguments.stext instanceof Array)&&(getarguments.stext).length){//判断发送的值是通过数组[]还是对象{}的方式,如果是数组且长度为真,则直接将里面的值推送至发送给后台的数组中;
					for(var k in getarguments.stext){
						arr.push(getarguments.stext[k]);
					};
				}else{//如果是对象或者长度为0(自定义数组没有长度)的数组,则通过遍历获取对应的值然后在推送进发送给后台的数组中;
					for(var k in getarguments.stext){
						var urlval = k + "=" + getarguments.stext[k];
						arr.push(urlval);
					};
				};
				var tjson = arr.join("&");//将发送给后台的数据以地址符号(&)进行拼接.
			xhr.open("GET",getarguments.url+"?"+tjson,true);
		}else{
			xhr.open("GET",getarguments.url,true);
		};
		xhr.send(null);
	};
	//get获取方式封装完成
	//----------我是可爱的分割线-----------
})();