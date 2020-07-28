let header = $(".header")
let footer = $(".footer")
let tag = $(".tag")
let content = $(".content")
let data = header.attr("bind-data")
let tagdata = tag.attr("bind-data")
let Storage = {
  data,
  tagdata
}
let scorll2 = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 100,
  mobile: true,
  livue: true
})

header.load("/component/header/header.html")
footer.load("/component/footer/footer.html")
tag.load("/component/tag/tag.html")

storageObj(Storage)
$(window).on('scroll',scorll1)
scorll2.init()

function storageObj(obj) {
  let Str = JSON.stringify(obj) 
  localStorage.setItem("key",Str)
}
function scorll1() {
  if(content.offset().top - $(window).scrollTop() < -20){
    header.addClass("fixed")
  }else {
      header.removeClass("fixed")
  }
}
function clickCallBack(name,ChangName){
  $(name).on("click",function() {
    $(name).removeClass(ChangName);
    $(this).addClass(ChangName)
  })
}

class OwlCarousel {
  constructor(name = null,loop = null,margin = null,nav = null,dots = null,responsive = null){
    this.name = name;
    this.loop = loop;
    this.margin = margin;
    this.nav = nav;
    this.dots = dots;
    this.responsive = responsive;
  }
  owlCallBcak(){
    return $(this.name).owlCarousel({
      loop: this.loop,
      margin: this.margin,
      nav: this.nav,
      dots: this.dots,
      responsive: this.responsive
    })
  }
}

class HttpRequest {
  constructor(url,type=null,data=null,dataType=null){
    this.url = url;
    this.type = type;
    this.data = data;
    this.dataType = dataType;
  }
  RequestData(){
    return new Promise(function(resolve,reject){
      $.ajax({
        url: this.url,
        type: this.type,
        data: this.data,
        dataType: this.dataType,
        success: (res) => {
          resolve(res)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  }
}

class Rendering {
  constructor(data,render,name){
    this.data = data;
    this.render = render;
    this.name = name;
  }
  nameRender(){
    $(this.name).html(this.render)
  }
}

// function scorll2(){
//   $(".wow").each(function (index,el){
//     if($(window).scrollTop() > $(this).offset().top - $(window).height()+100){
//       $(this).css({"animation-name": "fadeInUp","visibility": "visible"})
//       $(this).addClass("animated")
//     }
//   })
// }
// $(window).on('scroll',scorll2)

