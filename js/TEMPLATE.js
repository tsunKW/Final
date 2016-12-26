//little nav slide down
$(function(){
   $(window).scroll(function(){
      var scrollTop = $(document).scrollTop();
      var width = $(window).width();
      var $ul = $('.BButton li').children('ul');
      if(width > 768){
          if (scrollTop>90) {
              $('#Nav').slideDown(400);
              $ul.slideUp();
                }
          else{
              $('#Nav').slideUp(400);
                }
      }
      else{
        $('#Nav').css('display','block');
      }
   });
 });
 //Big Nav click slide down list
 $(function(){
   $('.BButton .BNslide').click(function(){
     var $ul = $(this).children('ul');
     if($ul.hasClass("click")){
       $ul.removeClass("click");
       $ul.slideUp();
     }
     else{
       $ul.addClass("click");
       $ul.slideDown();
       return false;
     }
   });
 });
 //Small Nav hover slide down list
 $(function(){
   $('.SButton li').hover(function(){
     var $ul = $(this).children('ul');
     if($ul.hasClass("hover")){
       $ul.removeClass("hover");
       $ul.slideUp();
     }
     else{
       $ul.addClass("hover");
       $ul.slideDown();
       return false;
     }
   });
 });
 //hamburger slide
 $(function(){
   $(".site-ham .hamburger").click(function(){
     var $ul = $(this).parent("nav").children("ul");
     if($ul.hasClass("hamburger-click")){
       $ul.removeClass("hamburger-click");
       $ul.slideUp();
     }
     else{
       $ul.addClass("hamburger-click");
       $ul.slideDown();
       return false;
     }
   });
 });
//anchor slide
$(function(){//go to the top
  $("#Home").click(function(){
    $("html,body").animate({scrollTop:0},800);
      return false;
  });
});
