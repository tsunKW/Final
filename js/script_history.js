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
      $("#w_map").attr("src","img/history/map.png");
      $("#map h5").css("visibility", "visible");
      $(".mark").css("display", "inline-block");
      $("#DM_word").css("display", "block");
      $("#HL_word").css("display", "block");
    }
    else{
      $(this).addClass("click");
      $(".mark").css("display", "none");
      $("#DM_word").css("display", "none");
      $("#HL_word").css("display", "none");
      $("#map h5").css("visibility", "hidden");
      $("#w_map").attr("src","img/history/map2.png");
      return false;
    }
  });
});

//map slide
//US美國 DM丹麥 GL全球 FC法國 HL荷蘭 GM德國 CN加拿大 CH中國 IR愛爾蘭 TW台灣
$(function(){
  $('#CN_mark').click(function(){
     $('html,body').animate({
       scrollTop: $('#CN').offset().top
     }, 1000);
     return false;
   });
  $('#US_mark').click(function(){
      $('html,body').animate({
        scrollTop: $('#US').offset().top
      }, 1000);
      return false;
  });
  $('#DM_mark').click(function(){
       $('html,body').animate({
         scrollTop: $('#DM').offset().top
       }, 1000);
       return false;
    });
  $('#FC_mark').click(function(){
        $('html,body').animate({
          scrollTop: $('#FC').offset().top
        }, 1000);
        return false;
  });
  $('#HL_mark').click(function(){
     $('html,body').animate({
       scrollTop: $('#HL').offset().top
     }, 1000);
     return false;
   });
   $('#GM_mark').click(function(){
      $('html,body').animate({
        scrollTop: $('#GM').offset().top
      }, 1000);
      return false;
    });
  $('#CH_mark').click(function(){
       $('html,body').animate({
         scrollTop: $('#CH').offset().top
       }, 1000);
       return false;
    });
    $('#TW_mark').click(function(){
       $('html,body').animate({
         scrollTop: $('#TW').offset().top
       }, 1000);
       return false;
     });
     $('#IR_mark').click(function(){
        $('html,body').animate({
          scrollTop: $('#IR').offset().top
        }, 1000);
        return false;
      });
});

//heart
$(function(){
  // to the top
  $('.heart').click(function(){
     $('html,body').animate({
       scrollTop: $('#year_title').offset().top
     }, 1000);
     return false;
   });

  //  move on timeline
  $(window).scroll(function(){
    var width = $(window).width();
    var height = $(window).height();
    var scrollTop = $(document).scrollTop();
    var year_title = $('#year_title').position().top; //年代到頂部距離
    var bottom = $('#triangle').position().top; //箭頭到頂部距離
    var h = $(".time ul").height(); //時間軸長

    //top
    if(scrollTop < year_title){
      $(".heart").css("position", "relative");
      $(".heart").css("margin-bottom", "-8.8%");
      $(".heart").css("margin-left", "89.7%");
    }
    else if(scrollTop > (bottom+year_title) ){
      $(".heart").css("position", "relative");
      $(".heart").css("margin-left", "89.7%");
      $(".heart").css("margin-bottom", "0"-h);
    }
    else{
      $(".heart").css("position", "fixed");
      $(".heart").css("margin-bottom", "0");
      $(".heart").css("margin-left", "0");
    }
  // 不知道為甚麼1280以上就壞掉只好硬修...
    if(width >= 1280){
      if(scrollTop < (year_title+height)){
        $(".heart").css("position", "relative");
        $(".heart").css("margin-bottom", "-8.8%");
        $(".heart").css("margin-left", "89.7%");
      }
      else if(scrollTop > (bottom+year_title+height)){
        $(".heart").css("position", "relative");
        $(".heart").css("margin-left", "89.7%");
        $(".heart").css("margin-bottom", "0"-h);
      }
      else{
        $(".heart").css("position", "fixed");
        $(".heart").css("margin-bottom", "0");
        $(".heart").css("margin-left", "0");
      }
    }
  });

});
