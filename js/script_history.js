// get time_line height
$(function(){
    var h = $(".time ul").height();
    $("#time_line").css("height", "0"+h);

    $(window).resize(function() {
      var h = $(".time ul").height();
      $("#time_line").css("height", "0"+h);
   });
});

// map2 change
$(function(){
  $("#map2_btn").click(function() {
    if($(this).hasClass("click")){
      $(this).removeClass("click");
      $("#map img").attr("src","img/history/map.png");
    }
    else{
      $(this).addClass("click");
      $("#map img").attr("src","img/history/map2.png");
      return false;
    }
  });
});

//heart move on timeline
$(function(){
  
});
