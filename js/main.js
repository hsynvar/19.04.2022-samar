'use strict'

// $(window).onscroll=function(){
//     if($(window).scrollY >10){
//         $('#header').classList.add($("headerWhite"))
//     }
//     else{
//         $('#header').classList.remove($("headerWhite"))
//     }
// }


// header scroll white 

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("headerWhite");
    }
    else {
        $("#header").removeClass("headerWhite");
    }
});

//  counting section 
//  counter clients

$({ Counter: 0 }).animate({
    Counter: $('.clients').text()
  }, {
    duration: 8000,
    easing: 'swing',
    step: function() {
      $('.clients').text(Math.ceil(this.Counter));
    }
  });

//  counter project
$({ Counter: 0 }).animate({
    Counter: $('.project').text()
  }, {
    duration: 8000,
    easing: 'swing',
    step: function() {
      $('.project').text(Math.ceil(this.Counter));
    }
  });

//  counter lunched
$({ Counter: 0 }).animate({
    Counter: $('.lunched').text()
  }, {
    duration: 8000,
    easing: 'swing',
    step: function() {
      $('.lunched').text(Math.ceil(this.Counter));
    }
  });


//  counter years
$({ Counter: 0 }).animate({
    Counter: $('.years').text()
  }, {
    duration: 3000,
    easing: 'swing',
    step: function() {
      $('.years').text(Math.ceil(this.Counter));
    }
  });


