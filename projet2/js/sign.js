window.onload = function(){
	/* 左侧 */
	var oList = document.getElementsByClassName("leftFixed")[0];
	var oImg = oList.getElementsByTagName("img");
	var oImgWidth = getStyle(oImg[0],"width");
	for(var i = 0;i < oImg.length;i++){
		oImg[i].style.height = oImgWidth * (680/1000) + "px";
	};

	/* 右侧 */
	var oFormBox = document.getElementsByClassName("formBox")[0];
	oFormBox.style.width = document.documentElement.clientWidth - parseInt(getStyle(oList,"width")) + "px";///更新右侧的宽度.

};
function $(sendId,num){///获取类名,父元素的下标.
	if(!num) var num = 0;
	var reg = /^\./;///检测是否class名.
	var reg2 = /^\#/;///检测是否id名.
	var reg3 = /\s+[\.|\#|\w]/g;
	if(reg3.test(sendId)){
		var reg4 = /^[\.|\#|\w](\w+)\s+[\.|\#|(\w)](\w+)$/g;
		var parentIsId = /^\#\w/g.test(sendId);
		var parentIsClass = /^\.\w/g.test(sendId);
		var parentIsTag = /^\w/g.test(sendId);
		var parentClass = sendId.replace(reg4,function(index,$1,$2){
			return $1;
		});
		var childId = /^[\#|\.\w]\w+\s+\#\w+$/g.test(sendId);
		var childClass = /^[\#|\.\w]\w+\s+\.\w+$/g.test(sendId);
		var childTag = /^[\#|\.\w]\w+\s+\w+$/g.test(sendId);
		var childName = sendId.replace(reg4,function(index,$1,$2){
			return $2;
		});
		if(parentIsId){
			if(childId){
				return "禁止ID内获取ID";
				return document.getElementById(parentClass).getElementById(childName);
			}else if(childClass){
				return document.getElementById(parentClass).getElementsByClassName(childName);
			}else{
				var childName = sendId.replace(/^[\.|\#|\w](\w+)\s+(\w+)$/g,function(index,$1,$2){
					return $2;
				});
				return document.getElementById(parentClass).getElementsByTagName(childName);
			};

		}else if(parentIsClass){
			if(childId){
				return "禁止class内获取ID";
				return document.getElementsByClassName(parentClass)[num].getElementById(childName);
			}else if(childClass){
				return document.getElementsByClassName(parentClass)[num].getElementsByClassName(childName);
			}else{
				return document.getElementsByClassName(parentClass)[num].getElementsByTagName(childName);
			};
		}else{
			parentClass = sendId.replace(/^(\w+)\s+[\.|\#|(\w)](\w+)$/g,function(index,$1,$2){
				return $1;
			});
			if(childId){
				return "禁止通过获取元素来获取ID";
				return document.getElementsByTagName(parentClass)[num].getElementById(childName);
			}else if(childClass){
				return document.getElementsByTagName(parentClass)[num].getElementsByClassName(childName);
			}else{
				childName = sendId.replace(/^[\.|\#|\w](\w+)\s+(\w+)$/g,function(index,$1,$2){
					return $2;
				});
				return document.getElementsByTagName(parentClass)[num].getElementsByTagName(childName);
			};

		};
	}else{
		if(reg.test(sendId)){
			var getClass = sendId.replace(reg,"");
			return document.getElementsByClassName(getClass);
		}else if(reg2.test(sendId)){
			var getId = sendId.replace(reg2,"");
			return document.getElementById(getId);
		}else{
			return document.getElementsByTagName(sendId);
		};
	};
};

function getStyle(obj,attr){
	if(window.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	};
};
