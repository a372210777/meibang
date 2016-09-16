
    
    
    // var $=require("jQuery");
    // var Swiper=require("swiper");
  var height=$(window).height();
    var width=$(window).width();
    $("html").css("fontSize",width/8+"px")

    var swiper = new Swiper('.swiper-container', {
        pagination: '',
        paginationClickable: true,
        initialSlide :0,
        noSwiping:true,
        noSwipingClass : 'stop-swiping',
    });

    $(".tab-tite>li.title").click(function(){
        $(this).addClass("activity").siblings().removeClass("activity");
        swiper.slideTo($(this).index(), 1000, true);
    })

    $("footer>.item").click(function(){
        var preItem=$(this).parent().find(".activity")
        var swtich=$(preItem).data("switch");
        var currentImg=$(preItem).find("img").attr("src");
        $(preItem).data("switch",currentImg);
        $(preItem).find("img").attr("src",swtich);
        $(preItem).removeClass("activity");

        var swtich=$(this).data("switch");
        var currentImg=$(this).find("img").attr("src");
        $(this).data("switch",currentImg);
        $(this).find("img").attr("src",swtich);
        $(this).addClass("activity");

        switch($(this).index()){
            case "0":

            break;
             case "1":
            break;
             case "2":
            break;
             case "3":
            break;
        }

    })
    $(".main-menu>li").click(function(){
        if($(this).index()==0){
            return;
        }

        $(this).addClass("activity").siblings().removeClass("activity");
        var index=$(this).index();
    })
    $(".back").click(function(){
        // $(".main-menu").toggleClass("open")
       
          $(".main-menu").removeClass("animated slideInLeft").addClass("animated slideOutLeft")
    })
    $(".menu-btn").click(function(){
        // $(".main-menu").toggleClass("open")
       $(".main-menu").removeClass("animated slideOutLeft").addClass("animated slideInLeft")
    })