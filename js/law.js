$(function(){
  var width = $(window).width();

  if(width > 780){
    $("#st1").click(function(){$("#exp1").fadeIn();});
    $("#st2").click(function(){$("#exp2").fadeIn();});
    $("#st3").click(function(){$("#exp3").fadeIn();});
    $("#st4").click(function(){$("#exp4").fadeIn();});
    $("#st5").click(function(){$("#exp5").fadeIn();});
    $("#st6").click(function(){$("#exp6").fadeIn();});

    $(".explane img").click(function(){
      $(this).parent(".explane").fadeOut();
    });
  }

  $("#pt1").click(function(){$("#point_exp1").fadeIn();});
  $("#pt2").click(function(){$("#point_exp2").fadeIn();});
  $("#pt3").click(function(){$("#point_exp3").fadeIn();});
  $("#pt4").click(function(){$("#point_exp4").fadeIn();});

  $(".explane img").click(function(){
    $(this).parent(".explane").fadeOut();
  });

});
