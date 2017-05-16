window.onload = function(){
	var page = 1;
	var url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page="+page+"&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=?";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		data: "page="+page,
		success : function(data){
			var obj = data.photos.photo;
			// console.log(obj)
			for(var i=0;i<obj.length;i++){
				var templetestr = $("#templete").html();
				function Img(){
					return templetestr.replace(/\<\%\s(\w+)\s\%\>/g,function(match,$1){
						var reg = /flv$/i.test(obj[i][$1]);
						if(reg){
							return "http://files.haohaowan.com/yxxj/sp_" + obj[i][$1] +".jpg";
						}else{
							return "http://files.haohaowan.com/yxxj/li_" + obj[i][$1];
						};
						// return obj[i][$1];
					});
				};
				var aa = Img();
				$("ul").append(aa);
				var arr = [0,0,0];
				$("li").each(function(index,val){
					var hgt = "";
					var min = Math.min.apply(null,arr);
					var minvalue = arr.indexOf(min);
					
					$(this).css({
						"left": minvalue * $(this).outerWidth() + "px",
						"top":obj[i].height * ($(this).index-3) + "px"
					});
						console.log($(this),$(this).css("height"),obj[i].height)
					// console.log($(this).css("height"))
					// console.log(($(this).index()%3))
					// console.log($("li").eq(3).css("height"))
					// console.log(val.style.width)
				});
			};

					
				// console.log(Img())

		}
	});
};
