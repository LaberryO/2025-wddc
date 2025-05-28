$(".sub-menu").hide();

$(".main-menu>li").mouseenter(function () {
    $(this).children(".sub-menu").stop().slideDown();
});

$(".main-menu>li").mouseleave(function () {
    $(this).children(".sub-menu").stop().slideUp();
});