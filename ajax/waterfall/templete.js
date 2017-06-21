
<!-- 	<script type="text/javascript">
	obj = {
		url : "aa",
		tags : "bb"
	};
	var templetestr = $("#templete").html();
	// console.log($("#templete").each(function(){

		function aa(){
			return templetestr.replace(/\<\%\s(\w+)\s\%\>/g,function(match,$1){

				return obj[$1];
			});
		};
		var ab = aa();
		console.log(aa());
	// }))
	</script> -->

	<!--
<script type="text/javascript">
	window.onload = function(){
	var page = 1;
	var url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page="+page+"&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=?"
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		data: "page="+page,
		success : function(data){
			// arr = JSON.parse(data);
			console.log(data);
		}
	});
	// console.log('http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page='+page+'&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=jsonp33?')
};

</script> -->