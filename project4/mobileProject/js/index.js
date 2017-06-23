(function() {
    localStorage.clear();///每次进入首页清空左右的localStorage.

    ///搜素框.
    var $searchBtn = $(".searchBtn");///搜索按钮.
    $searchBtn.on("click",function(e){
        var $searchText = $(".searchText").val();///搜索的文本.
        if(!e) var e = window.event;
        e.preventDefault();
        if($searchText){
            var url = "https://api.douban.com/v2/movie/search";
            var sendData = {q : $searchText};
            $.ajax({
                url : url,
                type : "GET",
                data : sendData,
                dataType : "jsonp",
                success : function(data){
                    if(data.subjects.length){
                        localStorage.setItem("searchText",JSON.stringify(data));
                        localStorage.setItem("searchHTML",window.location.href);
                        // console.log(JSON.parse(localStorage.getItem("searchText")));
                        window.location.href = "../html/search.html";
                    };
                }
            });
        };
    });
    ///搜素框.
    var start = 0;
    var count = 10;
    var city = "长沙";
    var url = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
    var total = 0;///热映最大数量.

    function stopCopy(ele){
        $(ele).on("selectstart",new Function("event.returnValue=false"));///禁止复制左右按钮上的文本.
    };
    stopCopy(".direction");
    stopCopy(".title p span");
    var tagText = $("#templete").html();///banner模板的内容.
    var $box = $(".banner .row");///Boxbanner第二大的盒子.
    var $leftBtn = $(".banner .bannerLeft");///banner左按钮.
    var $rightBtn = $(".banner .bannerRight");///banner右按钮.
    var $moreLeft = $(".banner").find(".title span:eq(0)");///左更多按钮.
    var $moreRight = $(".banner").find(".title span:eq(1)");///右更多按钮.
    
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
    /* 分类浏览End */
    /* 屏幕刷新后banner初始获得的数据Start */
    var resizeMaxLeft = false;///在屏幕边缘时为真.
    $.ajax({
        "url": url,
        "type": "GET",
        "dataType": "jsonp",
        "success": function(data) {
            // console.log(data);
            // console.log(data.subjects[0].title) ///标题.
            // console.log(data.subjects[0].images.large) ///图片地址.
            // console.log(data.subjects[0].rating.average) ///评分.
            total = data.total;
            var num = 0;
            var init = 0;
            $.each(data.subjects, function(index, val) {
                num = index;
                var that = this;
                var pingfen = data.subjects[index].rating.average;
                function getTitle(){
                    that.ttle = {};
                    that.ttle.title = that.title;
                    if(!pingfen){///判断评分是否为0.
                        data.subjects[index].rating.average = "暂无评分";
                    }else{
                        if(pingfen > 0 && pingfen <= 2){
                            pingfen = 8;
                        }else if(pingfen > 2 && pingfen <= 4){
                            pingfen = 6;
                        }else if(pingfen > 4 && pingfen <= 6){
                            pingfen = 4;
                        }else if(pingfen > 6 && pingfen <= 8){
                            pingfen = 2;
                        }else{
                            pingfen = 0;
                        };
                    };
                    var reg = /\<\%\=\s+(\w+)[\.|](\w+)\s+\%\>/g;
                    return tagText.replace(reg,function(index,$1,$2){
                        return that[$1][$2];
                    });
                };
                $box.append(getTitle());
                if($box.find(".bannerList:eq("+ index +") span").html() == "暂无评分"){///判断评分.
                    $box.find(".bannerList:eq("+ index +") span").css("width","100%");
                    $box.find(".bannerList:eq("+ index +") i").css({"width":"0rem"});
                }else{
                    $box.find(".bannerList:eq("+ index +") i").css({"background-positionY": -pingfen * 11 + "px"});
                }
            });
            $box.css({"width":++num * 10 + "rem"});
            $leftBtn.on("click",function(){
                toLeft($box);
            });///监听点击左侧的按钮.
            $rightBtn.on("click",function(){
                toRight($box,$(".banner"));
            });///监听点击右侧的按钮.
            window.addEventListener("resize",function(){///监听banner是否在最右边缘,如果是则将其banner的left改成最大值.
                boxWidth = parseInt($(".banner").css("width")) / 20;
                if(resizeMaxLeft){
                    $box.css("left",-(parseInt($box.css("width")) / 20 - boxWidth) + "rem");
                }
            });
        }
    });
    function toLeft(id){///多个小盒子的父级,监听点击左侧的按钮.
        init = Math.abs(parseInt(id.css("left")))/20 - 20;
        if(init <= 0){
            init = 0;
        }
        id.css({"left":-init + "rem"});
    };
    function toRight(id,maxBox){///多个小盒子的父级,最大的父元素,监听点击右侧的按钮.
        init = Math.abs(parseInt(id.css("left")))/20 + 20;///除以20是将像素转换成rem.
        var boxWidth = parseInt(maxBox.css("width")) / 20;
        var maxNum = parseInt(id.css("width")) / 20 - boxWidth;
        resizeMaxLeft = false;
        if(init >= maxNum){
            init = maxNum;
            resizeMaxLeft = true;
        };
        id.css({"left":-init + "rem"});
    };
    /* 屏幕刷新后banner初始获得的数据End */
    /* 点击更多热映电影Start */
    $moreRight.on("click",function (){
        if((start + 10) >= total){///当起始值大于最大的热映数量时.
            console.log("没有更多了");
            return false;
        };
        start += 10;
        if(start + count >= total)count = total % 10;///当起始加上请求的数量大于总数时,请求的数量等于总数的余数.
        url = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$box.find(".bannerList"));
    });
    $moreLeft.on("click",function(){///当起始值小于0时.
        if(start == 0){///当起始值小于0时.
            return false;
        };
        start -= 10;
        url = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$box.find(".bannerList"));
    });
    function moreMovie(url,id){///url:路径包含发送的值,id:每个小盒子的id,点击右键申请更多热映电影.
        $.ajax({
            "url" : url,
            "type" : "GET",
            "dataType" : "jsonp",
            "success" : function(data){
                console.log(data);
                $.each(id,function(index,val){
                    if(index >= count){
                        return false;
                    };
                    var pingfen = data.subjects[index].rating.average;
                    $(this).find("img").attr("src",data.subjects[index].images.large);
                    $(this).find("p:eq(0)").html(data.subjects[index].title);
                    if(pingfen){///判断评分是否为0.
                        if(pingfen > 0 && pingfen <= 2){
                            pingfen = 8;
                        }else if(pingfen > 2 && pingfen <= 4){
                            pingfen = 6;
                        }else if(pingfen > 4 && pingfen <= 6){
                            pingfen = 4;
                        }else if(pingfen > 6 && pingfen <= 8){
                            pingfen = 2;
                        }else{
                            pingfen = 0;
                        };
                        $(this).find("span").css({"width":"1rem"}).html(data.subjects[index].rating.average);
                        $(this).find("i").css({"width":"2.75rem","background-positionY": -pingfen * 11 / 20 + "rem"});
                    }else{
                        $(this).find("span").css({"width":"100%"}).html("暂无评分");
                        $(this).find("i").css({"width":"0rem"});
                    };
                });
            }
        });
    };
    /* 点击更多热映电影End */
    /* 移动端的滚动Start */
    function moblieMove(id){///将手机滑动封装起来.
        var initX = 0;
        var newX = 0;
        id.on("touchstart",function(e){
            if(!e) var e = window.event;
            if(e.touches.length == 1){
                resizeMaxLeft = false;
                initX = e.touches[0].clientX - newX;
                $(this).on("touchmove",function(ev){
                    if(!ev) var ev = window.event;
                    newX = ev.touches[0].clientX - initX;
                    if(Math.abs(newX) >= parseInt(id.css("width")) - parseInt(id.parent().css("width"))){
                        newX = -(parseInt(id.css("width")) - parseInt(id.parent().css("width")));
                        resizeMaxLeft = true;
                    };
                    if(newX >= 0){
                        newX = 0;
                    };
                    id.css({"left":parseInt((newX) / 20) + "rem"})
                })
            };
        });
    };
    moblieMove($box);
    /* 移动端的滚动End */
    /* 新片榜Start */
    (function(){
        var total = 0;///热映最大数量.
        var $newMovies = $(".newMovies .row");
        var $movieLeftBtn = $(".newMovies .bannerLeft");///banner左按钮.
        var $movieRightBtn = $(".newMovies .bannerRight");///banner右按钮.
        var $movieMoreLeft = $(".newMovies").find(".title span:eq(0)");///左更多按钮.
        var $movieMoreRight = $(".newMovies").find(".title span:eq(1)");///右更多按钮.
        var url = "http://api.douban.com/v2/movie/new_movies";
        var start = 0;
        var count = 10;
        sendData = {
            "apikey" : "0b2bdeda43b5688921839c8ecb20399b",
            "city" : "长沙",
            "start" : start,
            "count" : count
        };
        $.ajax({
            "url" : url,
            "type" : "GET",
            "data" : sendData,
            "dataType" : "jsonp",
            "success" : function(data){
                // total = data.total;
                var num = 0;
                var init = 0;
                $.each(data.subjects, function(index, val) {
                    num = index;
                    var that = this;
                    var pingfen = data.subjects[index].rating.average;
                    function getTitle(){
                        that.ttle = {};
                        that.ttle.title = that.title;
                        if(!pingfen){///判断评分是否为0.
                            data.subjects[index].rating.average = "暂无评分";
                        }else{
                            if(pingfen > 0 && pingfen <= 2){
                                pingfen = 8;
                            }else if(pingfen > 2 && pingfen <= 4){
                                pingfen = 6;
                            }else if(pingfen > 4 && pingfen <= 6){
                                pingfen = 4;
                            }else if(pingfen > 6 && pingfen <= 8){
                                pingfen = 2;
                            }else{
                                pingfen = 0;
                            };
                        };
                        var reg = /\<\%\=\s+(\w+)[\.|](\w+)\s+\%\>/g;
                        return tagText.replace(reg,function(index,$1,$2){
                            return that[$1][$2];
                        });
                    };
                    $newMovies.append(getTitle());
                    if($newMovies.find(".bannerList:eq("+ index +") span").html() == "暂无评分"){///判断评分.
                        $newMovies.find(".bannerList:eq("+ index +") span").css("width","100%");
                        $newMovies.find(".bannerList:eq("+ index +") i").css({"width":"0rem"});
                    }else{
                        $newMovies.find(".bannerList:eq("+ index +") i").css({"background-positionY": -pingfen * 11 + "px"});
                    }
                });
                $newMovies.css({"width":++num * 10 + "rem"});
                $movieLeftBtn.on("click",function(){
                    toLeft($newMovies);
                });///监听点击左侧的按钮.
                $movieRightBtn.on("click",function(){
                    toRight($newMovies,$(".newMovies"));
                });///监听点击右侧的按钮.
                window.addEventListener("resize",function(){///监听banner是否在最右边缘,如果是则将其banner的left改成最大值.
                    boxWidth = parseInt($(".newMovies").css("width")) / 20;
                    if(resizeMaxLeft){
                        $newMovies.css("left",-(parseInt($newMovies.css("width")) / 20 - boxWidth) + "rem");
                    }
                });
            }
        });

     moblieMove($newMovies);
     $movieMoreLeft.on("click",function(){
        if(start == 0){///当起始值小于0时.
            return false;
        };
        start -= 10;
        url = "http://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$newMovies.find(".bannerList"));
     })
     $movieMoreRight.on("click",function(){
        start += 10;
        url = "http://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$newMovies.find(".bannerList"));
     })
    }());
    /* 新片榜End */
    /* 口碑榜Start */
    (function(){
        var total = 0;///热映最大数量.
        var $moviePraise = $(".moviePraise .row");
        var $movieLeftBtn = $(".moviePraise .bannerLeft");///banner左按钮.
        var $movieRightBtn = $(".moviePraise .bannerRight");///banner右按钮.
        var $movieMoreLeft = $(".moviePraise").find(".title span:eq(0)");///左更多按钮.
        var $movieMoreRight = $(".moviePraise").find(".title span:eq(1)");///右更多按钮.
        var url = "https://api.douban.com/v2/movie/weekly";
        var start = 0;
        var count = 10;
        sendData = {
            "apikey" : "0b2bdeda43b5688921839c8ecb20399b",
            "city" : "长沙",
            "start" : start,
            "count" : count
        };
        $.ajax({
            "url" : url,
            "type" : "GET",
            "data" : sendData,
            "dataType" : "jsonp",
            "success" : function(data){
                var num = 0;
                var init = 0;
                $.each(data.subjects, function(index, val) {
                    num = index;
                    var that = this;
                    var pingfen = data.subjects[index].subject.rating.average;
                    function getTitle(){
                        that.subject.ttle = {};
                        that.subject.ttle.title = that.subject.title;
                        if(!pingfen){///判断评分是否为0.
                            data.subjects[index].subject.rating.average = "暂无评分";
                        }else{
                            if(pingfen > 0 && pingfen <= 2){
                                pingfen = 8;
                            }else if(pingfen > 2 && pingfen <= 4){
                                pingfen = 6;
                            }else if(pingfen > 4 && pingfen <= 6){
                                pingfen = 4;
                            }else if(pingfen > 6 && pingfen <= 8){
                                pingfen = 2;
                            }else{
                                pingfen = 0;
                            };
                        };
                        var reg = /\<\%\=\s+(\w+)[\.|](\w+)\s+\%\>/g;
                        return tagText.replace(reg,function(index,$1,$2){
                            return that.subject[$1][$2];
                        });
                    };
                    $moviePraise.append(getTitle());
                    if($moviePraise.find(".bannerList:eq("+ index +") span").html() == "暂无评分"){///判断评分.
                        $moviePraise.find(".bannerList:eq("+ index +") span").css("width","100%");
                        $moviePraise.find(".bannerList:eq("+ index +") i").css({"width":"0rem"});
                    }else{
                        $moviePraise.find(".bannerList:eq("+ index +") i").css({"background-positionY": -pingfen * 11 + "px"});
                    }
                });
                $moviePraise.css({"width":++num * 10 + "rem"});
                $movieLeftBtn.on("click",function(){
                    toLeft($moviePraise);
                });///监听点击左侧的按钮.
                $movieRightBtn.on("click",function(){
                    toRight($moviePraise,$(".moviePraise"));
                });///监听点击右侧的按钮.
                window.addEventListener("resize",function(){///监听banner是否在最右边缘,如果是则将其banner的left改成最大值.
                    boxWidth = parseInt($(".moviePraise").css("width")) / 20;
                    if(resizeMaxLeft){
                        $moviePraise.css("left",-(parseInt($moviePraise.css("width")) / 20 - boxWidth) + "rem");
                    }
                });
            }
        });

     moblieMove($moviePraise);
     $movieMoreLeft.on("click",function(){
        if(start == 0){///当起始值小于0时.
            return false;
        };
        start -= 10;
        url = "http://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$moviePraise.find(".bannerList"));
     })
     $movieMoreRight.on("click",function(){
        start += 10;
        url = "http://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count;
        moreMovie(url,$moviePraise.find(".bannerList"));
     })
    }());
    /* 口碑榜End */

    // /* 影评Start */
    // (function(){
    //     var $getComment = $(".movieComment");///影评的盒子.
    //     var commentValue = $("#commentTemplete").html();///获取模板函数的内容.
    //     var sendId = 6311303;///影评的ID.
    //     var sendData = {
    //         apikey : "0b2bdeda43b5688921839c8ecb20399b",
    //     };
    //     var url = "https://api.douban.com/v2/movie/subject/" + sendId + "/comments";
    //     $.ajax({
    //         "url" : url,
    //         "type" : "GET",
    //         "data" : sendData,
    //         "dataType" : "jsonp",
    //         "success" : function(data){
    //             console.log(data);
    //             $.each(data.comments,function(index,val){
    //                 console.log(data.comments);
    //                 data.comments[index].name = data.comments[index].author.name;///将用户的名字提取出来.
    //                 $getComment.append(getTemplete());///使用模板函数并添加到页面上.
    //                 function getTemplete(){///模板函数.
    //                     return commentValue.replace(/\<\%\=\s+(\w+)\s+\%\>/g,function(i,$1){
    //                         return data.comments[index][$1];
    //                     });
    //                 };
    //             });

    //                 /* 设置评论内容的高度 */
    //                 $getComment.find("img").ready(function(){///当图片加载完毕后在设置评论内容的高度.
    //                     var $getCommentHeight = parseInt($getComment.find("img").css("height")) - parseInt($getComment.find(".movieCommentUser").css("height")) - parseInt($getComment.find(".movieCommentTitle").css("height"));///设置评论内容的高度.
    //                     $getComment.find(".movieCommentContent").css({"height":$getCommentHeight + "px"});///设置评论内容的高度.
    //                 })
    //                 window.addEventListener("resize",function(){///监听窗口大小,跟随图片的高度而改变评论的高度.
    //                     $getCommentHeight = parseInt($getComment.find("img").css("height")) - parseInt($getComment.find(".movieCommentUser").css("height")) - parseInt($getComment.find(".movieCommentTitle").css("height")) - 20;
    //                     $getComment.find(".movieCommentContent").css({"height":$getCommentHeight + "px"});
    //                 });
    //                 /* 设置评论内容的高度 */

    //         }
    //     });
    // }())
    // /* 影评End */
}())
