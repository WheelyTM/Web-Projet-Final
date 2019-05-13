$(".image_de_fond").hover(function(){
    $(".image_de_fond").css("opacity", "1").attr("alt", "Bobo le kakapo"); //CSS ATTR HTML
    $(".page-libre h1").html("Bobo le kakapo");
}, function(){
    $(".image_de_fond").css("opacity", "0.5");
    $(".page-libre h1").html("Le kapapo");
});