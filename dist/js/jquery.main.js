
$( document ).ready(function() {
    $('.list-lang__link').click(function(e){
        $('.list-lang__link').removeClass('active');
        $(this).addClass('active');
    })
    $('.navigation__link').click(function(e){
        $('.navigation__link').removeClass('active');
        $(this).addClass('active');
    })
    $('.navigation__btn').click(function(e){
        $('.navigation').toggleClass('active');
    })
    $('#state-btn').click(function(e){
        $('.state').addClass('active');
        $('.state').removeClass('hidden');
        $('.header').addClass('blur');
        $('.main').addClass('blur');
    })
    $('.state__close').click(function(e){
        $('.state').removeClass('active');
        $('.state').addClass('hidden');
        $('.header').removeClass('blur');
        $('.main').removeClass('blur');
    })

    jQuery.validator.addMethod("checkMask", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
   });
   
   $('form').validate({
     rules: {
       ph: {
         checkMask: true
       }
     },
     messages: {
       ph: {
         checkMask: "Введите полный номер телефона"
       }
     }
   });
   $('.phone').mask("+7(999)999-9999", {autoclear: false});
});

