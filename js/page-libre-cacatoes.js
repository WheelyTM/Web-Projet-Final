$(".image_de_fond").hover(function(){
    $(".image_de_fond").css("opacity", "1").attr("alt", "Anouk le cacatoès"); //CSS ATTR ET HTMls
    $(".page-libre h1").html("Anouk le cacatoès");
}, function(){
    $(".image_de_fond").css("opacity", "0.5");
    $(".page-libre h1").html("Le cacatoès");
});