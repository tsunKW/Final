// get time_line height
$(function(){
    var h = $(".time ul").height();
    $("#time_line").css("height", "0"+h);

    $(window).resize(function() {
      var h = $(".time ul").height();
      $("#time_line").css("height", "0"+h);
   });
});
