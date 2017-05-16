window.onload = function(){
	var page = 2;
	var url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page="+page+"&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=?";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		data: "page="+page,
		success : function(data){
			var obj = data.photos.photo;
			for(var i=0;i<obj.length;i++){
				var 
				console.log(obj[i])
			};
		}
	});
};
