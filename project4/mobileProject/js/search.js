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
    var $searchContent = $(".searchContent");///搜搜内容最大的盒子.
    if(localStorage.getItem("searchText")){///判断跳转过来后本地有没有值.
        var searchText = JSON.parse(localStorage.getItem("searchText"));
        console.log(searchText.subjects);
        var $template = $("#templete").html();
        $.each(searchText.subjects,function(index,val){
            var arr = [];///导演名字.
            console.log(this);
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
            $searchContent.append(searchTemplete($template,this));
            if($searchContent.find(".pingfeng:eq(" + index + ") span").html() == 0){
                $searchContent.find(".pingfeng:eq(" + index + ") i").css({"display":"none"});
                $searchContent.find(".pingfeng:eq(" + index + ") span").css({"width":"100%"}).html("暂无评分");
            }else{
                // if((document.documentElement.clientWidth||document.body.clientWidth) < 768){
                    $searchContent.find(".pingfeng:eq(" + index + ") i").css("width","55px");
                    // $searchContent.find(".pingfeng:eq(" + index + ") span").css("width","30px");
                // }else{
            //         $searchContent.find(".pingfeng:eq(" + index + ") i").css("width","2.75rem");
            //         $searchContent.find(".pingfeng:eq(" + index + ") span").css("width","2rem");
            //     }
            };
        });
    }
    ///搜素框.
    // var $searchBtn = $(".searchBtn");///搜索按钮.
    // $searchBtn.on("click",function(e){
    //     var $searchText = $(".searchText").val();///搜索的文本.
    //     if(!e) var e = window.event;
    //     e.preventDefault();
    //     if($searchText){
    //         var url = "https://api.douban.com/v2/movie/search";
    //         var sendData = {q : $searchText};
    //         $.ajax({
    //             url : url,
    //             type : "GET",
    //             data : sendData,
    //             dataType : "jsonp",
    //             success : function(data){
    //                 if(data.subjects.length){///判断搜索到的结果是否为空.
                        
    //                 };
    //             }
    //         });
    //     };
    // });
    ///搜素框.
}());
