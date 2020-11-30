var buttonMobile = document.querySelector('.header__nav-menu_mobile');
var menuMobile = document.querySelector('.header__menu-mobile');
 buttonMobile.addEventListener('click', ()=> {
    if (menuMobile.style.display === "none") {
        menuMobile.style.display = "block";
      } else {
        menuMobile.style.display = "none";
      }
});

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  }); 
  $(".btn-buy").click(function(){
      $('#pay').show();
      
  });
  $('#pay__exit').click(function(){
    $('#pay').hide();
    
  });
 var abc = $(".btn-buy").click(function(a,b,c){
    // e.preventDefault();
    var parent = $(this).parents('.item');
    var src = parent.find('img').attr('src');
    var title = parent.find('h3').text();
    var price = parent.find('h5').text();
    a = $("#pay-title").text(title);
    b = $("#pay-img").html( "<img src=\"" + src + "\">");
    c = $("#pay-price").text(price); 
    d = $("#tongcong").text(price);
  
});



})
