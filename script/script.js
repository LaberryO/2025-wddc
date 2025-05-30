$(".modal").hide();

$(".main-menu>li").mouseenter(function () {
    $(this).children(".sub-menu").stop().slideDown();
});

$(".main-menu>li").mouseleave(function () {
    $(this).children(".sub-menu").stop().slideUp();
});

$("#notice01").click(function () {
    $(".modal").show();
});

$("#modal-exit").click(function () {
    $(".modal").hide();
});