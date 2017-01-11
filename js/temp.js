//hamburger slide
 $(function(){
   $(".site-ham #hamburger").click(function(){
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
 $(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

 $(function(){
 $('#next').click(function(){
    $('html,body').animate({
      scrollTop: $('#cont').offset().top
    }, 1000);
    return false;
  });
  });
  $(function(){//go to the top
  $("#top").click(function(){
    $("html,body").animate({scrollTop:0},800);
      return false;
  });
});

//appear sign in card
$(function(){
  $("#user_icon").click(function(){
    if(
      $(this).hasClass("sign-click")){
      $(this).removeClass("sign-click");
      $("#full_card").slideUp();
    }
    else{
      $(this).addClass("sign-click");
      $("#full_card").slideDown();
      return false;
    }
  });
});
