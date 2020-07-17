let header = $(".header")
let content = $(".index-content")
header.load("/component/header/header.html")

function scorll1() {
  if(content.offset().top - $(window).scrollTop() < -20){
    header.addClass("fixed")
  }else {
      header.removeClass("fixed")
  }
}
$(window).on('scroll',scorll1)