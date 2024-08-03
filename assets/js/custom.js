$(document).ready(function(){
   $(".mobile-btn").click(function(){
       $(".mobile-btn").toggleClass('toggle-btn');
       $(".header-right nav").slideToggle();
   });

});
