$(document).ready(function(){

    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active');
        $('.open').toggle();
        $('.close').toggle();
        $('.list').toggleClass('list-open');
      })

});

