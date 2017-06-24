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
    $searchBtn.on("click",function(e){
        var $searchText = $(".searchText").val();///搜索的文本.
        if(!e) var e = window.event;
        e.preventDefault();
        if($searchText){
            jumpResult({q : $input.val()})
        };
    });
    function jumpResult(sendVal){
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
    console.log(JSON.parse(localStorage.getItem("movieIntroduce")));
    /* 电影介绍 */
}());
