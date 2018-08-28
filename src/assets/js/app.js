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

    /// события для кнопки фуагра
    $("#fuagraBtn").on('click', function(){
        setBlockSelected('fuagraBtn','fuagra');
    });

    $("#fuagraBtn").mouseenter(function(){        
        toggleClassToButton('#fuagraBtn', 'eat__item--active','card__logo-size--hover');
    });

    $("#fuagraBtn").mouseleave(function(){
        toggleClassToButton('#fuagraBtn', 'eat__item--active','card__logo-size--hover',true);
    });

    // события для кнопки рыба
    $("#fishBtn").on('click', function(){
        setBlockSelected('fishBtn','fish');
    });

    $("#fishBtn").mouseenter(function(){
        toggleClassToButton('#fishBtn','eat__item--active','card__logo-size--hover');
    });

    $("#fishBtn").mouseleave(function(){
        toggleClassToButton('#fishBtn','eat__item--active','card__logo-size--hover', true);
    });


    $("#chickenBtn").on('click', function(){
        setBlockSelected('chickenBtn', 'chicken');
    });

    $("#chickenBtn").mouseenter(function(){
        toggleClassToButton('#chickenBtn','eat__item--active','card__logo-size--hover');
    });

    $("#chickenBtn").mouseleave(function(){
        toggleClassToButton('#chickenBtn','eat__item--active','card__logo-size--hover',true);
    });

});



function toggleClassToButton(controlToSearch, classToCheck, classToAdd, isDelet){
    let control = $(controlToSearch);
    // если текущий item не выбран, тогда у него должен появиться hover эффект
    if (!control.hasClass(classToCheck)){
        if (isDelet){
            control.removeClass(classToAdd);
        }else{
            control.addClass(classToAdd);
        }
        
    }
}

function setBlockSelected(controlId, blockId){
    let currentControl = $('#' + controlId);    
    $(currentControl.parents()).find('#' + blockId).toggleClass("eat__item--active");
    currentControl.toggleClass('card__logo-size--selected');
}