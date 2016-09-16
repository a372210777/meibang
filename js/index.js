  

   
    var height=$(window).height();
    var width=$(window).width();
    $("html").css("fontSize",width/8+"px")
    $(".container").css({height:height+"px"})

    $("#buy").click(function(){
        $(".container").toggleClass("open");
    })
    $(".menu>li").click(function(){
        $(this).addClass("activity").siblings().removeClass("activity")
    })

    var swiper = new Swiper('.swiper-container', {
        pagination: '',
        paginationClickable: true,
        initialSlide :0,
        noSwiping:false,
        noSwipingClass : 'stop-swiping',
        onSlideChangeEnd:function(swiper){
              $(".menu>li:eq("+swiper.activeIndex+")").addClass("activity").siblings().removeClass("activity");
        }
    });

    $(".menu>li").click(function(){
        $(this).addClass("activity").siblings().removeClass("activity");
        swiper.slideTo($(this).index(), 500, true);
    })

    var commentWrap = new Swiper('.swiper-comment', {
        pagination: '',
        paginationClickable: true,
        initialSlide :0,
        noSwiping:false,
        noSwipingClass : 'stop-swiping',
        onSlideChangeEnd:function(swiper){
            console.log(swiper.activeIndex)
              $(".coment-class>li:eq("+swiper.activeIndex+")").addClass("activity").siblings().removeClass("activity");
        }
    });
    $(".coment-class>li").click(function(){
        $(this).addClass("activity").siblings().removeClass("activity");
        commentWrap.slideTo($(this).index(), 500, true);
    })

    // $(".test").menuButton({item:[{value:"油性肤质"},{value:"水嫩肤质"},{value:"干燥肤质"}]})