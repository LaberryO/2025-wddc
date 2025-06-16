$(".sub-menu").hide();
$(".gallery").hide();
$(".modal").hide();

$(".main-menu>ul>li").mouseenter(function () {
    $(this).children("ul.sub-menu").slideDown(300);
});

$(".main-menu>ul>li").mouseleave(function () {
    $(this).children("ul.sub-menu").slideUp(300);
});

cnt = 0;
setInterval(() => {
    if(cnt<2) {
        cnt++;
    } else {
        cnt=0;
    }

    $(".slide ul li").eq(cnt).fadeIn(500);
    $(".slide ul li").eq(cnt).siblings().fadeOut(500);
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