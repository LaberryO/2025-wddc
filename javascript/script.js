$(".gallery").hide();
$(".sub-menu").hide();

$("#notice").click(() => {
    $("#notice").addClass("focus");
    $("#gallery").removeClass("focus");
    $(".notice").show();
    $(".gallery").hide();
});

$("#gallery").click(() => {
    $("#notice").removeClass("focus");
    $("#gallery").addClass("focus");
    $(".gallery").show();
    $(".notice").hide();
});

$(".main-menu").mouseover(() => {
    $(".sub-menu").show();
});

$(".main-menu").mouseleave(() => {
    $(".sub-menu").hide();
});