(function(){
    function searchTemplete(value,obj){//value:模板,obj:对象,定义的搜索模板函数.
        return value.replace(/\<\%\=\s+(\w+)\s+\%\>/g,function(index,$1){
            return obj[$1];
        });
    };
    // title : title;
    // name : directors.name;
    // genresValue : genres[];
    // year : year;
    var $searchContent = $(".searchContent");///搜索内容最大的盒子.
    var $content = $(".content");///添加进内容的盒子.
    var $moreBtn = $searchContent.find(".moreBtn");///搜索内容点击更多按钮.
    var totle = 0;///搜索内容总数量.
    var contentStart = 0;///搜索的起始点总数量
    var $template = $("#templete").html();///模板的内容.
    if(localStorage.getItem("searchText")){///判断跳转过来后本地有没有值.
        var searchText = JSON.parse(localStorage.getItem("searchText"));///搜索的数据.
        totle = searchText.total;///搜索内容总数量.

        appendEle(searchText.subjects);
        /* 点击更多按钮 */
        var boo = true;
        $moreBtn.on("click",clickHref);
    };
    function clickHref(){///点击更多按钮以后判断总数是否大于起始值.
        if(boo){
            boo = false;
            if(totle > contentStart){
                var sendData = JSON.parse(localStorage.getItem("searchHref"))["1"];
                sendData.start = contentStart;
                sendData.count = 20;
                var sendUrl = JSON.parse(localStorage.getItem("searchHref"))["0"];
                $.ajax({
                    url : sendUrl,
                    data : sendData,
                    type : "GET",
                    dataType : "jsonp",
                    success : function(data){
                        appendEle(data.subjects);
                        boo = true;
                    }
                })
            }else{
                console.log("没有更多了");
            };
        }else{
            console.log("您已经点击过了,请稍后再试");
        };
    };
    function appendEle(data){///data:要遍历的数据;将获取到的元素添加到页面上.
        contentStart += data.length;///每次起始点自增.
        $.each(data,function(index,val){
            var arr = [];///导演名字.
            for(var i = 0;i < this.directors.length;i++){
                arr.push(this.directors[i].name);
            };
            if(arr.length > 1){
                arr = arr.join("/");
            }else{
                arr = arr.join();
            };
            this.name = arr;///导演名字.
            /* 类型 */
            if(this.genres.length > 1){
                arr = this.genres.join("/");
            }else{
                this.genres = this.genres.join();
            };
            this.large = this.images.large;///图片.
            this.average = this.rating.average;///评论得分.
            $content.append(searchTemplete($template,this));
            if($searchContent.find(".pingfeng:eq(" + index + ") span").html() == 0){
                $searchContent.find(".pingfeng:eq(" + index + ") i").css({"display":"none"});
                $searchContent.find(".pingfeng:eq(" + index + ") span").css({"width":"100%"}).html("暂无评分");
            }else{
                $searchContent.find(".pingfeng:eq(" + index + ") i").css("width","55px");
            };
        });
    };
    ///搜素框.
    var $searchBtn = $(".searchBtn");///搜索按钮.
    $searchBtn.on("click",function(e){
        localStorage.clear();///搜索前先清空本地的值.
        $(".moreBtn").off("click",clickHref);///清空跳转过来的点击更多事件.
        var $searchText = $(".searchText").val();///搜索的文本.
        if(!e) var e = window.event;
        e.preventDefault();
        if($searchText){
            var url = "https://api.douban.com/v2/movie/search";
            var count = 20;
            var contentStart = 0;
            var sendData = {q : $searchText,count : count ,start : contentStart};
            $.ajax({
                url : url,
                type : "GET",
                data : sendData,
                dataType : "jsonp",
                success : function(data){
                    var total = data.total;
                    if(data.subjects.length){///判断搜索到的结果是否为空.
                        $(".content").children().remove();
                        appendEle(data.subjects);
                        var boo = true;
                        $(".moreBtn").on("click",clickNew);
                    }else{
                        console.log("没有搜索到该影片");
                    };
                    function clickNew(){
                        if(boo){
                            boo = false;
                            contentStart += 20;
                            if(total > contentStart){
                                sendData = {q : $searchText,count : count ,start : contentStart};
                                $.ajax({
                                    url : url,
                                    data : sendData,
                                    type : "GET",
                                    dataType : "jsonp",
                                    success : function(data){
                                        appendEle(data.subjects);
                                        boo = true;
                                    }
                                })
                            }else{
                                console.log("没有更多了");
                            };
                        }else{
                            console.log("您已经点击过了,请稍后再试");
                        };
                    };
                }
            });
        };
    });
    ///搜素框.
}());
