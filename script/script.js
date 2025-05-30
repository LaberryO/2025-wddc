$(".sub-menu").hide();
$(".sub-menu-back").hide();
$(".modal").hide();

$(".main-menu>li").mouseenter(function () {
    $(".sub-menu").show();
    $(".sub-menu-back").show();
});

$(".main-menu>li").mouseleave(function () {
    $(".sub-menu").hide();
    $(".sub-menu-back").hide();
});

$("#modal").click(() => {
    $(".modal").show();
});

$("#exit").click(() => {
    $(".modal").hide();
});

let count = 0;
setInterval(() => {
    if (count < 2) {
        count++;
    } else {
        count = 0;
    }

    $(".slide ul li").eq(count).fadeIn(500);
    $(".slide ul li").eq(count).siblings().fadeOut(500);
}, 3000);