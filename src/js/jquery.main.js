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
    $('.success__close').click(function(e){
        $('.success').removeClass('active');
        $('.success').addClass('hidden');
        $('.state').addClass('hidden');
        $('.header').removeClass('blur');
        $('.main').removeClass('blur');
    })


    $('.phone').inputmask('+(380) 99-999-99-99', { 
      clearIfNotMatch: true,
      showMaskOnHover: false
    });

    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
      return /\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}/g.test(value); 
    });
    
    $('form').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      highlight: function(element) {
        $(element).addClass('error');
      },
      unhighlight: function(element) {
        $(element).removeClass('error');
      },
      rules: {
        phone: {
          required: true,
          checkMaskPhone: true
        },
        name: {
          required: true
        }
      }
    });
    
    $('form').submit(function(event) {
      if (!$('form').valid() || $('.name').val() ===''){
        event.preventDefault(); 
      } else {
        event.preventDefault(); 
        $('.success').addClass('active');
        $('.success').removeClass('hidden');
        $('.state').addClass('hidden');
        $('.name').val('');
        $('.phone').val('');
      }
    });
});

