$(".sub-menu").hide();
$(".modal").hide();

$(".main-menu>ul>li").mouseover(function () {
    $(this).children(".sub-menu").stop().slideDown(300);
});

$(".main-menu>ul>li").mouseleave(function () {
    $(this).children(".sub-menu").stop().slideUp(300);
});

$("#modal").click(() => {
    $(".modal").show();
});

$("#quit").click(() => {
    $(".modal").hide();
});