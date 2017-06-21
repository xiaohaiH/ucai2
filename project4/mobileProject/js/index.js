(function() {
    var start = 0;
    var count = 10;
    var city = "长沙";
    var url = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
    $.ajax({
        "url": url,
        "type": "GET",
        "dataType": "jsonp",
        "success": function(data) {
            // console.log(data);
            // console.log(data.subjects[0].title) ///标题.
            // console.log(data.subjects[0].images.large) ///图片地址.
            // console.log(data.subjects[0].rating.average) ///评分.
            var tagText = $("#templete").html();
            var $box = $(".banner .row");
            var $leftBtn = $(".banner .bannerLeft");
            var $rightBtn = $(".banner .bannerRight");
            var num = 0;
            var init = 0;
            $.each(data.subjects, function(index, val) {
                num = index;
                var that = this;
                function getTitle(){
                    that.ttle = {};
                    that.ttle.title = that.title;
                    var reg = /\<\%\=\s+(\w+)[\.|](\w+)\s+\%\>/g;
                    return tagText.replace(reg,function(index,$1,$2){
                        return that[$1][$2];
                    })
                };
                $box.append(getTitle());
            });
            $box.css({"width":++num * 10 + "rem"});
            $leftBtn.on("click",toLeft);///监听点击左侧的按钮.
            $rightBtn.on("click",toRight);///监听点击右侧的按钮.
            function toLeft(){///监听点击左侧的按钮.
                init -= 20;
                if(init <= 0){
                    init = 0;
                }
                $box.css({"left":-init + "rem"});
            };
            function toRight(){///监听点击右侧的按钮.
                init += 20;
                var maxNum = parseInt($box.css("width")) / 20 - 36;
                if(init >= maxNum){
                    init = maxNum;
                };
                $box.css({"left":-init + "rem"});
            };
        }
    })
}())
