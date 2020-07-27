let page2_owl = new OwlCarousel("#page2_carousel",true,10,false,true,{0:{items:1},600:{items:3},1000:{items:4}}).owlCallBcak()
let page4_owl = new OwlCarousel("#page4_carousel",true,10,false,false,{0:{items:1},600:{items:3},1000:{items:6}}).owlCallBcak()
let page5_owl = new OwlCarousel("#page5_carousel",true,10,false,false,{0:{items:1},600:{items:2},1000:{items:3}}).owlCallBcak()

$(".page2_owl .prev").click(function () {
  page2_owl.trigger("prev.owl.carousel");
});
$(".page2_owl .next").click(function () {
  page2_owl.trigger("next.owl.carousel");
});
$(".team_owl .prev").click(function () {
  page4_owl.trigger("prev.owl.carousel");
});
$(".team_owl .next").click(function () {
  page4_owl.trigger("next.owl.carousel");
});
$(".page5_owl .prev").click(function () {
  page5_owl.trigger("prev.owl.carousel");
});
$(".page5_owl .next").click(function () {
  page5_owl.trigger("next.owl.carousel");
});

clickCallBack(".page2_owl .item","on")
clickCallBack(".ul_tag li","on")
clickCallBack(".team_owl .item","on")
