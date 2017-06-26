(function(){
    var $closeBox = $(".closeBox");///弹出框盒子.


    ///搜素框.
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
                jumpResult({q : $input.val()});
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
                jumpResult({tag : $input.val()})
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
    $searchBtn.on("click",function(e){///搜索按钮.
        var $searchText = $(".searchText").val();///搜索的文本.
        if(!e) var e = window.event;
        e.preventDefault();
        if($searchText){
            jumpResult({q : $input.val()})
        };
    });
    function jumpResult(sendVal){///跳转到搜索界面.
        var url = "https://api.douban.com/v2/movie/search";
        var sendData = sendVal;
        $.ajax({
            url : url,
            type : "GET",
            data : sendData,
            dataType : "jsonp",
            success : function(data){
                if(data.subjects.length){
                    localStorage.setItem("searchText",JSON.stringify(data));
                    localStorage.setItem("searchHTML",window.location.href);
                    localStorage.setItem("searchHref",JSON.stringify([url,sendData]));
                    // console.log(localStorage.getItem("searchHref"));
                    // console.log(JSON.parse(localStorage.getItem("searchText")));
                    window.location.href = "../html/search.html";
                }else{
                    $closeBox.fadeIn().find("strong").html("没有搜索到该影片");
                    setTimeout(function(){
                        $closeBox.fadeOut(2000);
                    },1000);
                };
            }
        });
    };
    ///搜素框.



    /* 电影介绍 */

    /* 模板函数 */
    function appendEle(obj,str){///obj:对象;str:要替换的字符串.
        return str.replace(/\<\%\=\s+(\w+)\s+\%\>/g,function(index,$1){
            return obj[$1];
        });
    };
    /* 模板函数 */

    var $oDetails = $(".details");///获取详情页最大的盒子.
    var $oBtn = $oDetails.find("button");///获取详情页最大的盒子.
    $oBtn.on("click",function(){
        // $(this).css({"background-color":"","color":"white"});
    });
    /* 检测是否由其他页面跳转过来的 */
    var $template = $("#templete").html();
    var movie = localStorage.getItem("movieIntroduce");
    if (movie){
        movie = JSON.parse(movie);
        var arr = [];
        arr[0] = movie.durations[0];///影片时长.
        arr[1] = "(" + movie.countries + ")";
        if(movie.directors.length > 1){///根据导演的数量来选择添加方式.
            var s = "";
            for(var i = 0;i < movie.directors.length;i++){
                if(i == movie.directors.length-1){
                    s += movie.directors[i].name + "(导演)";
                    break;
                }
                s += movie.directors[i].name + "(导演)" + "/";
            };
            arr[2] = s;
        }else if(movie.directors.length == 1){
            arr[2] = movie.directors[0].name + "(导演)";
        }else{
            arr[2] = "导演:无";
        };
        if(movie.writers.length > 1){///根据编剧的数量来选择添加方式.
            s = "";
            for(i = 0;i < movie.writers.length;i++){
                if(i == movie.writers.length-1){
                    s += movie.writers[i].name + "(编剧)";
                    break;
                }
                s += movie.writers[i].name + "(编剧)" + "/";

            };
            arr[3] = s;
        }else if(movie.writers.length == 1){
            arr[3] = movie.writers[0].name + "(编剧)";
        }else{
            arr[3] = "编剧:无";
        };
        if(movie.casts.length > 1){///根据演员的数量来选择添加方式.
            s = "";
            for(i = 0;i < movie.casts.length;i++){
                if(i == movie.casts.length-1){
                    s += movie.casts[i].name + "(主演)";
                    break;
                }
                s += movie.casts[i].name + "(主演)" + "/";
            };
            arr[4] = s;
        }else if(movie.casts.length == 1){
            arr[4] = movie.casts[0].name + "(主演)";
        }else{
            arr[4] = "演员:无";
        };
        arr[5] = movie.pubdates[0] + "上映";
        movie.average = movie.rating.average;///评分.
        movie.large = movie.images.large;///电影图片.
        movie.person = arr.join(" / ");
        $oDetails.find(".box").append(appendEle(movie,$template));
        var actorHidden = true;///演员简介变量.
        /* 设置文字超出是否显示省略号 */
        $oDetails.find(".movieContent .movieActor").on("click",function(){
            if(actorHidden){
                $(this).css({"display": "block"});
                actorHidden = false;
            }else{
                $(this).css({"display": "-webkit-box"});
                actorHidden = true;
            };
        });
        /* 设置详情顶部End */
        /* 设置剧情简介Start */
        var $template2 = $("#templete2").html();
        $oDetails.find(".juqing").append(appendEle(movie,$template2));

        /* 根据分数来设置星星数量 */
        $oDetails.find(".movieEvaluate i").css("background-positionY",parseInt(10 - Math.round(movie.average)) * -11);
        /* 根据分数来设置星星数量 */

        var textHidden = true;///剧情简介变量.
        $oDetails.find(".juqing p:eq(1)").on("click",function(){
            if(textHidden){
                $(this).css({"display": "block"});
                textHidden = false;
            }else{
                $(this).css({"display": "-webkit-box"});
                textHidden = true;
            };
        });
        /* 设置剧情简介End */
        /* 设置该影视的标签Start */
        var $template3 = $("#templete3").html();
        arr = [];
        for(var i = 0;i < movie.tags.length;i++){
            arr.push("<span>" + movie.tags[i] + "</span>");
        };
        movie.tag = arr.join("");
        $oDetails.find(".movieTag").append(appendEle(movie,$template3));
        /* 设置该影视的标签End */
        /* 设置短评Start */
        var $oShortEvaluate = $(".shortEvaluate");
        var $template4 = $("#templete4").html();
        var start = 0;
        var count = 5;
        var moreTotal = "";
        var moreBoo = false;
        /* 页面初始加载的评论数 */
        ajaxGetComment({
            url :"https://api.douban.com/v2/movie/subject/"+ movie.id +"/comments",
            data :{
                apikey:"0b2bdeda43b5688921839c8ecb20399b",
                start : start,
                count : count
            },
            bigBox : $oShortEvaluate.find('.commentBigBox')
        });
        $oShortEvaluate.find(".moreComment").on("click",function(){
            if(moreBoo){
                moreBoo = false;
                start += 5;
                if(start >= moreTotal){
                    $closeBox.fadeIn().find("strong").html("没有更多评论了哦！");
                    setTimeout(function(){
                        $closeBox.fadeOut(2000);
                    },1000);
                }else{
                    ajaxGetComment({
                        url :"https://api.douban.com/v2/movie/subject/"+ movie.id +"/comments",
                        data :{
                            apikey:"0b2bdeda43b5688921839c8ecb20399b",
                            start : start,
                            count : count
                        },
                        bigBox : $oShortEvaluate.find('.commentBigBox')
                    });
                };
            }else{
                $closeBox.fadeIn().find("strong").html("正在加载中，请稍后……");
                setTimeout(function(){
                    $closeBox.fadeOut(2000);
                },1000);
            };
        });
        /* 设置短评End */
        function clickLike(){
            var stopBack = "";
            $oShortEvaluate.find(".like").on("click",function(){
                if(stopBack)return false;
                $(this).next("span").html(Number($(this).next("span").html()) + 1);
                stopBack = true;
            });
        };
    }else{

    };
    /* 电影介绍End */
    function ajaxGetComment(obj){///短评ajax请求.
        $.ajax({
            url : obj.url,
            data : obj.data,
            type : "GET",
            dataType : "jsonp",
            success : function(data){
                if(data.start == 0){
                    $oShortEvaluate.find(">p").html(data.subject.title+ "的短评(" + data.total +")");
                    moreTotal = data.total;
                };
                var oComment = data.comments;
                $.each(oComment,function(index,val){
                    this.username = this.author.name;
                    this.userId = this.author.id;
                    this.usersrc = this.author.avatar;
                    obj.bigBox.append(appendEle(this,$template4));
                });
                /* 根据分数来设置星星数量 */
                obj.bigBox.find("figure i").css("background-positionY",parseInt(10 - Math.round(movie.average)) * -11);
                /* 根据分数来设置星星数量 */
                moreBoo = true;
                clickLike();///点赞后本地数量增加.
            },
            error : function(error1,error2,error3){
                moreBoo = true;
                $closeBox.fadeIn().find("strong").html("加载失败，请重试！");
                setTimeout(function(){
                    $closeBox.fadeOut(2000);
                },1000);
                console.log(error1);
                console.log(error2);
                console.log(error3);
            }
        });
    }
}());
