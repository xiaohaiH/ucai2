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
    var $closeBox = $(".closeBox");///弹出框盒子.
    var boo = false;///搜索结果内容截流.
    var total = 0;

    var $searchContent = $(".searchContent");///搜索内容最大的盒子.
    var $content = $(".content");///添加进内容的盒子.
    var $moreBtn = $searchContent.find(".moreBtn");///搜索内容点击更多按钮.
    var totle = 0;///搜索内容总数量.
    var contentStart = 0;///搜索的起始点总数量
    var $template = $("#templete").html();///模板的内容.
    if(localStorage.getItem("searchText")){///判断跳转过来后本地有没有值.
        var searchText = JSON.parse(localStorage.getItem("searchText"));///搜索的数据.
        totle = searchText.total;///搜索内容总数量.
        boo = true;
        appendEle(searchText);
        movieJump();
        /* 点击更多按钮 */
        $moreBtn.on("click",clickHref);
    };

    var $navbarForm = $(".navbar-form");///文本框最大的盒子.
    var $searchBtn = $(".searchBtn");///搜索按钮.
    var $input = $navbarForm.find("input");///搜索框.
    var $searchResult = $navbarForm.find(".searchResult");///搜索类型选择盒子.
    $input.on("focus",function(){///当文本框获取到焦点时,改变高度.
        if((document.documentElement.clientWidth||document.body.clientWidth) < 768){
            $navbarForm.css("height","5.4rem")
        }
        $searchResult.fadeIn();
    });
    $input.on("blur",function(){///当文本框失去到焦点时,改变高度.
        if((document.documentElement.clientWidth||document.body.clientWidth) < 768){
            $navbarForm.css("height","2.7rem")
        }
        $searchResult.fadeOut();
    });
    $input.on("input",function(){///将输入的值添加到搜索类型框中.
       $searchResult.find("p span:eq(0)").html($input.val());
       $searchResult.find("p span:eq(2)").html($input.val());
    });
    $searchResult.find("p:eq(0)").on("click",function(){///将输入的值添加到搜索类型框中.
        if($input.val()){///搜索电影名称.
            if(/[\u4E00-\u9FA5]+|\w+/g.test($input.val())){
                var url = "https://api.douban.com/v2/movie/search";
                var count = 20;
                var contentStart = 0;
                var sendData = {q : $input.val(),count : count ,start : contentStart,apikey : "0b2bdeda43b5688921839c8ecb20399b"};
                $.ajax({
                    url : url,
                    type : "GET",
                    data : sendData,
                    dataType : "jsonp",
                    success : function(data){
                        total = data.total;
                        if(data.subjects.length){///判断搜索到的结果是否为空.
                            if($(".content").children()){
                                $(".content").children().remove();
                            };
                            appendEle(data);
                            movieJump();
                            boo = true;
                            $(".moreBtn")[0].onclick = function(){
                                clickNew(sendData);
                            };
                        }else{
                            $closeBox.fadeIn().find("strong").html("没有搜索到该影片");
                            setTimeout(function(){
                                $closeBox.fadeOut(2000);
                            },1000);
                        };
                    }
                });
            }else{
                $closeBox.fadeIn().find("strong").html("请正确输入电影名称");
                setTimeout(function(){
                    $closeBox.fadeOut(2000);
                },1000);
            }
        }else{
            $closeBox.fadeIn().find("strong").html("请输入电影名称");
            setTimeout(function(){
                $closeBox.fadeOut(2000);
            },1000);
        };
    });
    $searchResult.find("p:eq(1)").on("click",function(){///将输入的值添加到搜索类型框中.
        if($input.val()){///搜索电影的类型.
            if(/[\u4E00-\u9FA5]+|\w+/g.test($input.val())){
                var url = "https://api.douban.com/v2/movie/search";
                var count = 20;
                var contentStart = 0;
                var sendData = {tag : $input.val(),count : count ,start : contentStart,apikey : "0b2bdeda43b5688921839c8ecb20399b"};
                $.ajax({
                    url : url,
                    type : "GET",
                    data : sendData,
                    dataType : "jsonp",
                    success : function(data){
                        boo = true;
                        total = data.total;///该类型或该电影的总数.
                        if($(".content").children()){
                            $(".content").children().remove();
                        };
                        appendEle(data);
                        movieJump();
                        $(".moreBtn")[0].onclick = function(){
                            clickNew(sendData);
                        };
                    },
                    error : function(data1,data2,data3){
                        console.log("error1:"+ data1);
                        console.log("error2:"+ data2);
                        console.log("error3:"+ data3);
                    }
                });
            }else{
                $closeBox.fadeIn().find("strong").html("请正确输入电影名称");
                setTimeout(function(){
                    $closeBox.fadeOut(2000);
                },1000);
            }
        }else{
            $closeBox.fadeIn().find("strong").html("请输入电影名称");
            setTimeout(function(){
                $closeBox.fadeOut(2000);
            },1000);
        };
    });
    ///搜素框.
    /* 点击更多按钮 第一次 */
    function clickHref(){///点击更多按钮以后判断总数是否大于起始值.
        if(boo){
            boo = false;
            if(totle >= contentStart){
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
                        appendEle(data);
                        movieJump();
                        boo = true;
                    },
                    error : function(){
                        console.log(fail);
                    }
                });
            }else{
                $closeBox.fadeIn().find("strong").html("没有更多了");
                setTimeout(function(){
                    $(".closeBox").fadeOut(2000);
                },1000);
            };
        }else{
            $closeBox.fadeIn().find("strong").html("您已经点击过了,请稍后再试");
            setTimeout(function(){
                $closeBox.fadeOut(2000);
            },1000);
        };
    };
    function appendEle(reception){///data:要遍历的数据;将获取到的元素添加到页面上.
        data = reception.subjects;
        contentStart += data.length;///每次起始点自增.
        $.each(data,function(index,val){
            var arr = [];///导演名字.
            for(var i = 0;i < this.directors.length;i++){
                arr.push(this.directors[i].name);
                this.directorId = this.directors[i].id;///导演ID.
            };
            if(arr.length > 1){
                arr = arr.join("/");
            }else{
                arr = arr.join();
            };

            this.movieId = this.id;///电影ID.
            this.name = arr;///导演名字.
            /* 类型 */
            if(this.genres.length > 1){
                arr = this.genres.join("/");
            }else{
                this.genres = this.genres.join();
            };
            /* 演员 */
            arr = [];
            for(var k = 0;k < this.casts.length;k++){
                arr.push(this.casts[k].name);
            };
            if(this.casts.length){
                this.actorId = this.casts[0].id;///演员ID.
            }
            this.actorName = arr.join("/");///演员名字.
            this.large = this.images.large;///图片.
            this.average = this.rating.average;///评论得分.
            $content.append(searchTemplete($template,this));
            if($searchContent.find(".pingfeng:eq(" + index + ") span").html() == 0){
                $searchContent.find(".pingfeng:eq(" + index + ") i").css({"display":"none"});
                $searchContent.find(".pingfeng:eq(" + index + ") span").css({"width":"100%"}).html("暂无评分");
            }else{
                $searchContent.find(".pingfeng:eq(" + (reception.start + index) + ") i").css({"width":"55px","background-positionY":parseInt(10 - Math.round(this.average)) * -11});
            };
        });
    };
    ///搜素框.
    $searchBtn.on("click",function(e){
        e.preventDefault();
        var $searchText = $(".searchText").val();///搜索的文本.
        localStorage.clear();///搜索前先清空本地的值.
        $(".moreBtn").off("click",clickHref);///清空跳转过来的点击更多事件.
        if(!e) var e = window.event;
        if($searchText){
            var url = "https://api.douban.com/v2/movie/search";
            var count = 20;
            var contentStart = 0;
            var sendData = {q : $searchText,count : count ,start : contentStart,apikey : "0b2bdeda43b5688921839c8ecb20399b"};
            $.ajax({
                url : url,
                type : "GET",
                data : sendData,
                dataType : "jsonp",
                success : function(data){
                    total = data.total;
                    if(data.subjects.length){///判断搜索到的结果是否为空.
                        if($(".content").children()){
                            $(".content").children().remove();
                        };
                        appendEle(data);
                        movieJump();
                        boo = true;
                        $(".moreBtn")[0].onclick = function(){
                            clickNew(sendData);
                        };
                    }else{
                        $closeBox.fadeIn().find("strong").html("没有搜索到该影片");
                        setTimeout(function(){
                            $closeBox.fadeOut(2000);
                        },1000);
                    };
                }
            });
        };
    });
    /* 点击更多按钮Start */
    function clickNew(sendData){///要发送的值{q|tag:value,count:number,start,0};搜索文本.
        if(boo){
            boo = false;
            sendData.start += 20;
            if(total > sendData.start){
                $.ajax({
                    url : "https://api.douban.com/v2/movie/search",
                    data : sendData,
                    type : "GET",
                    dataType : "jsonp",
                    success : function(data){
                        appendEle(data);
                        movieJump();
                        boo = true;
                    }
                })
            }else{
                $closeBox.fadeIn().find("strong").html("没有更多了");
                setTimeout(function(){
                    $closeBox.fadeOut(2000);
                },1000);
            };
        }else{
            $closeBox.fadeIn().find("strong").html("您已经点击过了,请稍后再试");
            setTimeout(function(){
                $closeBox.fadeOut(2000);
            },1000);
        };
    };
    /* 点击更多按钮End */
    ///搜素框.
    ///
    /* 分类浏览Start */
    var $getMovieTypeKind = $(".movieType").find(".toggleKind");///分类的按钮.
    var $getMovieRow = $(".movieType").find(".row");///分类的内容.
    $getMovieTypeKind.on("click",function(){
        if($(this).html() == "+"){
            $(this).html("-")
        }else{
            $(this).html("+")
        };
        $getMovieRow.slideToggle();
    });
    /* 点击分类下的类型节点时 */
    $getMovieRow.find("a").on('click', function(event) {
        event.preventDefault();
        var count = 20;
        var contentStart = 0;
        searchType({tag : $(this).html(),count : count ,start : contentStart,apikey : "0b2bdeda43b5688921839c8ecb20399b"});
    });
    function searchType(sendVal){
        var url = "https://api.douban.com/v2/movie/search";
        var sendData = sendVal;
        $.ajax({
            url : url,
            type : "GET",
            data : sendData,
            dataType : "jsonp",
            success : function(data){
                boo = true;
                total = data.total;///该类型或该电影的总数.
                if($(".content").children()){
                    $(".content").children().remove();
                };
                appendEle(data);
                movieJump();
                $(".moreBtn")[0].onclick = function(){
                    clickNew(sendData);
                };
            },
            error : function(data1,data2,data3){
                console.log("error1:"+ data1);
                console.log("error2:"+ data2);
                console.log("error3:"+ data3);
            }
        });
    };
    /* 分类浏览End */

    /* a链接点击跳转 */
    function movieJump(){///点击图片或标题跳转到电影详情介绍.
        $(".movieJump").on("click",function(){///点击电影图片和标题.
            $.ajax({
                url : "https://api.douban.com/v2/movie/subject/" + this.dataset.id,
                type : "GET",
                data : {"apikey" : "0b2bdeda43b5688921839c8ecb20399b"},
                dataType : "jsonp",
                success : function(data){
                    if(data.mobile_url){
                        localStorage.setItem("movieIntroduce",JSON.stringify(data));
                        window.location.href = "../html/movieIntroduce.html";
                    }else{
                        $closeBox.fadeIn().find("strong").html("数据获取失败,请稍后再试");
                        setTimeout(function(){
                            $closeBox.fadeOut(2000);
                        },1000);
                    };
                }
            });
        });
    };
    $(".director").on("click",function(){///点击导演或主演.
        $.ajax({
            url : "https://api.douban.com/v2/movie/celebrity/" + this.setdata.id,
            type : "GET",
            data : {"apikey" : "0b2bdeda43b5688921839c8ecb20399b"},
            dataType : "jsonp",
            success : function(data){
                if(data.mobile_url){
                    localStorage.setItem("movieIntroduce",JSON.stringify(data));
                    window.location.href = "../html/movieIntroduce.html";
                }else{
                    $closeBox.fadeIn().find("strong").html("数据获取失败,请稍后再试");
                    setTimeout(function(){
                        $closeBox.fadeOut(2000);
                    },1000);
                };
            }
        });
    });
    /* a链接点击跳转 */
}());
