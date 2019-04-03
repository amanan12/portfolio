$(window).scroll(function(e){ 
  var $el = $('#navbar'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 0 && !isPositionFixed){ 
    $('#navbar').css({'position': 'fixed', 'margin-top': '0px', 'background-color': '#191919'}); 
  }
  if ($(this).scrollTop() < 0 && isPositionFixed)
  {
    $('#navbar').css({'position': 'absolute', 'margin-top': '0px', 'background-color': '#191919'}); 
  } 
});

$(".dropbtn").hover(function(){
  $(".dropbtn").css("color", "white");
}, function(){
  $(".dropbtn").css("color", "#A0A0A0");
});