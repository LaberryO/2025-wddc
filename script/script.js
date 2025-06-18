$(".sub-menu").hide();
$(".gallery").hide();
$(".modal").hide();

$(".main-menu>ul>li").mouseover(function () {
    $(this).children(".sub-menu").stop().slideDown(100);
});

$(".main-menu>ul>li").mouseleave(function () {
    $(this).children(".sub-menu").stop().slideUp(100);
});

cnt=0;

setInterval(() => {
    if(cnt<2) {
        cnt++;
    } else {
        cnt=0;
    }

    $(".slide ul li").eq(cnt).fadeIn(300);
    $(".slide ul li").eq(cnt).siblings().fadeOut(300);
}, 3000);

$("#notice").click(() => {
    $(".notice").show();
    $(".gallery").hide();
    $("#notice").addClass("focus");
    $("#gallery").removeClass("focus");
});

$("#gallery").click(() => {
    $(".notice").hide();
    $(".gallery").show();
    $("#notice").removeClass("focus");
    $("#gallery").addClass("focus");
});

$("#modal").click(() => {
    $(".modal").show();
});

$("#quit").click(() => {
    $(".modal").hide();
});