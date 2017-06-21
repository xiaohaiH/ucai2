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
            var text = "";
            console.log(tagText);

            $.each(data.subjects, function(index, val) {
                // text +=
                // $(".banner .row").html()
                console.log(val);
                console.log(val.title);
                // function tagValue(value) {
                //     var reg = /^<%=   %>/g;
                // };
            })
        }
    })
}())