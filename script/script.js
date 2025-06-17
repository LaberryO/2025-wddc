$(".sub-menu").hide();
$(".modal").hide();

$(".main-menu>ul>li").mouseover(function () {
    $(this).children(".sub-menu").slideDown(300);
});

$(".main-menu>ul>li").mouseleave(function () {
    $(this).children(".sub-menu").slideUp(300);
});

cnt = 0;
setInterval(() => {
    if(cnt<2) {
        cnt++;
    } else {
        cnt=0;
    }

    $(".slide ul li").eq(cnt).fadeIn(300);
    $(".slide ul li").eq(cnt).siblings().fadeOut(300);
}, 3000);

$("#modal").click(() => {
    $(".modal").show();
});

$("#quit").click(() => {
    $(".modal").hide();
});