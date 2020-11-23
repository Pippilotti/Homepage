// JavaScript Document
var $slider = $(".slider").slick({
    fade: true,
    focusOnSelect: true
})

$slider.find(".slick-slide").on("click", function(){
   $slider.slick("slickNext");
});
{}
