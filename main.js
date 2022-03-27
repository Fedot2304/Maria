$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    centerMode:true,
    variableWidth:true,
    dots:true,
    speed:1200,
    autoplay:true,
    autoplaySpeed:2000,
    appendArrows:$('.ar'),
    appendDots:$('.ar'),
    prevArrow: '<button class="prev"><img src="img/arr1.png"></button>',
    nextArrow: '<button class="next"><img src="img/arr2.png"></button>'
  });