$(".gallery").hide();
$(".modal").hide();

$(".main-menu>li").mouseenter(function () {
    $(this).children(".sub-menu").stop().slideDown();
});

$(".main-menu>li").mouseleave(function () {
    $(this).children(".sub-menu").stop().slideUp();
});

$("#notice").click(function () {
    $("#notice").addClass("focus");
    $("#gallery").removeClass("focus");
    $(".notice").show();
    $(".gallery").hide();
});

$("#gallery").click(function () {
    $("#notice").removeClass("focus");
    $("#gallery").addClass("focus");
    $(".gallery").show();
    $(".notice").hide();
});

$("#notice01").click(function () {
    $(".modal").show();
});

$("#modal-exit").click(function () {
    $(".modal").hide();
});