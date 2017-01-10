$(function(){
  var $img = $(".tripic .show img");//指到圖片
  var $back = $(".info2 li");//指到back

  $img.click(function() { //圖片被點擊
    var $tri = $(this).parent(".show").parent(".tripic"); //指到當圖的tripic
      $tri.addClass("opn"); //加上class
  });
  $back.click(function(){
    var $tri = $(this).parent(".info2").parent(".tripic"); //指到這個back的tripic
      $tri.removeClass("opn"); //移除class
  });

});
$(function(){
  $("#tohfz").click(function() {
	  if($(this).hasClass("click")){
		  
      $(this).removeClass("click");
	      $(".tripic").css("display", "inline-block");
    	 $(".tripic").css("display", "none");
		 $(".hfz").parent(".tripic").css("display", "inline-block");
		 }
    else{
      $(this).addClass("click");
	  return false;
	  } 
  });

  $("#toel").click(function() {
	  if($(this).hasClass("click")){
      $(this).removeClass("click");
	  	      $(".tripic").css("display", "inline-block");

    	 $(".tripic").css("display", "none");
		 $(".enl").parent(".tripic").css("display", "inline-block");
		 }
    else{
      $(this).addClass("click");
	  return false;
	  } 
  });
    $("#tooth").click(function() {
	  if($(this).hasClass("click")){
		  
      $(this).removeClass("click");
	  	 $(".tripic").css("display", "inline-block");
		 $(".hfz").parent(".tripic").css("display", "none");
		 $(".enl").parent(".tripic").css("display", "none");
		 }
    else{
      $(this).addClass("click");
	  return false;
	  } 
  });
    $("#toall").click(function() {
	  if($(this).hasClass("click")){
		  
      $(this).removeClass("click");
    	 $(".tripic").css("display", "inline-block");
		 }
    else{
      $(this).addClass("click");
	  return false;
	  } 
  });



});
