"use strict";

$().ready(function(){

    $(".eat__item").mouseenter(function(e){
        var control = e.currentTarget;        
        
         let result = $(control).hasClass("eat__item--active");
         // если у контрола, есть такой класс значит, у него должен быть SelectedHover style
         if (result){
             $(control).find(".card__title").text("Котэ не одобряет?");
             $(control).find(".card__title").addClass("card__title--active");
         }
    });

    $(".eat__item").mouseleave(function(e){
        var control = e.currentTarget;        
        $(control).find(".card__title").text("Сказочное заморское яство"); 
        $(control).find(".card__title").removeClass("card__title--active");          
    });

    $("#fuagra").on('click', function(){
        $("#fuagra").parent().toggleClass("eat__item--active");
    })

    $("#fish").on("click", function(){
        $("#fish").parent().toggleClass("eat__item--active");
    });

    $("#chicken").on("click", function(){
        $("#chicken").parent().toggleClass("eat__item--active");
    })
});