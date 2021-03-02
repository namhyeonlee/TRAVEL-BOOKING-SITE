$(function () {



    //memeber login
    $(".user").click(function () {

        $(".member").stop().animate({
            "margin-left": 0

        }, 800)
    })
    $(".xbtn").click(function () {
        $(".member").stop().animate({
            "margin-left": "-100%"

        }, 1200)
    })



    //reservation icon 클릭하면 배경이 바뀌면서 active가 되도록


    $(".book>li").on("click", function () {
        var showNum = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".visual>li").eq(showNum).fadeIn(500).siblings().fadeOut(500);


    })


    //reservation booksub$ li를 클릭하면 다른 div가 나오도록
    var num = 0;

    $(".sub4").on("click", function () {
        $(".guests").toggle();
        return false;

    })
    //팝업 외에 영역 클릭 했을 때
    $(document).click(function (e) {
        if (e.target.className === "guests" || e.target.className === "fas fa-plus-circle" || e.target.className === "fas fa-minus-circle") {
            return false;
        }
        $(".guests").css("display", "none");
    })


    //reservation-datepicker

    var dateFormat = "mm/dd/yy";

    var from = $("#from").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
    }).on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
        $("#from").datepicker("option", "dateFormat", "yy-mm-dd")
    });

    var to = $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
    }).on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
        $("#to").datepicker("option", "dateFormat", "yy-mm-dd")
    })

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }



    //destination icon click-> 메뉴가 바뀌도록
    $(".category>li").on("click", function () {
        var showNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".dWrap>ul").eq(showNum).fadeIn(500).siblings().fadeOut(500);
    })

    //next trip 버튼 누르면 슬라이드배너 되도록
    var showNum = 0;

    function moveBanner1() {
        $(".trip1").stop().animate({
            marginLeft: -showNum * 100 + "%"
        }, 2000)
    }

    function moveBanner2() {
        $(".trip2").stop().animate({
            marginLeft: -showNum * 100 + "%"
        }, 2000)
    }

    function moveBanner3() {
        $(".trip3").stop().animate({
            marginLeft: -showNum * 100 + "%"
        }, 2000)
    }

    $(".tripBtn>.rightBtn").on("click", function () {
        if (showNum == 2) {
            showNum = 0;
            $(".trip1").css("margin-left", 0);
            $(".trip2").css("margin-left", 0);
            $(".trip3").css("margin-left", 0);
        }
        showNum++;
        moveBanner1();
        moveBanner2();
        moveBanner3();
    })


    $(".tripBtn>.leftBtn").on("click", function () {
        if (showNum == 0) {
            showNum = 2;
            $(".trip1").css("margin-left", -100 * showNum + "%");
            $(".trip2").css("margin-left", -100 * showNum + "%");
            $(".trip3").css("margin-left", -100 * showNum + "%");
        }
        showNum--;
        moveBanner1();
        moveBanner2();
        moveBanner3();
    })


    //parallax hotel

    //hotel section 위치값
    var section = $("#rentals");
    var hotel = $(section).offset().top;
    console.log(hotel);
    //각 li 위차값
    var hotels = [];
    var child = $(".rental_categories>li");
    child.each(function (i) {
        hotels[i] = $(this).position().top;
    })

    //스크롤을 했을 때 각 li를 얼만큼 움직일지 계산
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        //자식들을 얼마나 움직일지 계산
        var child = $(".rental_categories>li");
        child.each(function (i) {
            var start = hotel;
            var end = $(section).height();

            var objStart = hotels[i];
            var objEnd = hotels[i] + i * 200 + 100;
            var objMove = (objEnd - objStart) / (end - start) * (scrollTop - start) + objStart;
            $(this).css("top", objMove);
        })
    })



    //sns 자동으로 움직이도록+버튼으로 움직이도록


    var showSns = 0;
    //전체 배너의 개수
    var $total = $(".snsWrap>ul>li").length;

    console.log($total);
    var objsns = $(".snsWrap>ul>li").slice(0, 5).clone();

    $(".snsWrap>ul").append(objsns);
    $(".snsWrapr>ul").css("width", "400%");
    
    //.snsWrap>ul>li resize 
    var liWidth = $(".snsWrap>ul>li").outerWidth();
    console.log(liWidth)


    function moveSns() {
        $(".snsWrap>ul").stop().animate({
            "margin-left": -liWidth * showSns
        }, 1000)
    }
    //rightbtn
    $(".snsRight").click(function () {
        if (showSns == 8) {
            showSns = 0;
            $(".snsWrap>ul").css("margin-left", 0);
        }
        showSns++;
        moveSns();

    })

    //leftbtn
    $(".snsLeft").click(function () {
        if (showSns == 0) {
            showSns = 8;
            $(".snsWrap>ul").css("margin-left", -8 * liWidth);
        }
        showSns--;
        moveSns();
    })
    // var timer = setInterval(function () {
    //     $(".snsRight").trigger("click");
    // }, 3000)

    // //마우스가 on over 되었을 때
    // $(".snsWrap").on({
    //     "mouseover": function(){
    //         clearInterval(timer);
    //     },
    //     "mouseleave": function(){
    //         var timer = setInterval(function () {
    //             $(".snsRight").trigger("click");
    //         }, 3000)
    //     }



    // })





})
