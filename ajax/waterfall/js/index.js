window.onload = function(){
	var page = 1;
	// var url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page="+page+"&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=?";
	go(page);


		var boo = true;
	// $(window).scroll(function(){
	// 	var screenH = document.documentElement.clientHeight;
	// 	var docuH = document.body.scrollHeight;
	// 	var scrollH = document.body.scrollTop;
	// 	// console.log(document.documentElement.clientHeight)
	// 	// console.log(document.body.scrollTop)
	// 	// console.log(document.body.scrollHeight)
	// 	var ratio = scrollH/(docuH-screenH);
	// 	if(boo){
	// 		if(ratio >= 0.8){
	// 			page++;
	// 			go(page);
	// 			boo = false;
	// 			console.log(page)
	// 		}
	// 	}
	// });




	function go(page){
		$.ajax({
		url: "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page="+page+"&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=?",
		type: 'GET',
		dataType: 'jsonp',
		// data: "page="+page,
		error : function(da){console.log(da)},
		success : function(data){
			// console.log(page)
			var obj = data.photos.photo;
			console.log(obj);
			for(var i=0;i<obj.length;i++){
				var templetestr = $("#templete").html();
				function Img(){
					return templetestr.replace(/\<\%\s(\w+)\s\%\>/g,function(match,$1){
						var reg = /flv$/i.test(obj[i][$1]);
						var reg2 = /jpg$/i.test(obj[i][$1]);
						// var tag = /tag/g.test(obj[i][$1])
						if(reg){
							return "http://files.haohaowan.com/yxxj/sp_" + obj[i][$1] +".jpg";
						}else if(reg2){
							return "http://files.haohaowan.com/yxxj/li_" + obj[i][$1];
						}else{
							return obj[i][$1];
						};
					});
				};
				var aa = Img();
				$("ul").append(aa);
			};
				var arr = [0,0,0];
			$("li").each(function(){
				var minvalue = Math.min.apply(null,arr);
				var minindex = arr.indexOf(minvalue);
				arr[minindex] += $(this).outerHeight() + Number(obj[$(this).index()].height) ; //$(this).
				var left = minindex * ($(this).outerWidth() + 20);
				$(this).css({
					"left" : left,
					"top" : minvalue
				});
			});
		}
		});
	};
};
