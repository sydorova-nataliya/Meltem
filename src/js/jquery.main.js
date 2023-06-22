
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

    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        adaptiveHeight: true
      });
});

