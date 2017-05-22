function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	};
};
	var timer ="";
function startmove(obj,attr){
	var distance = 0;
	clearInterval(timer);
	return timer = setInterval(function(){
		for(var k in attr){
			var currentposition = parseInt(getStyle(obj,k));//当前位置(left)
			var targetlocation = parseInt(attr[k]);//目标位置(left)

			distance =(targetlocation - currentposition) / 6;
			distance>0?distance=Math.ceil(distance):distance=Math.floor(distance);
			if(currentposition == targetlocation){
				clearInterval(timer);
			}else{
				obj.style[k] = distance + currentposition + "px";
			};
		}
	},50);
};