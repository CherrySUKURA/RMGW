function aboutJoinUs(){
    let show = $(".job_list ul li")
    show.find("label").click(function(){
        if($(this).parents("li").find(".drop").css("display") == "none"){
            $(this).parents("li").addClass("on")
            $(this).parents("li").find(".drop").eq(0).slideDown()
        }else{
            $(this).parents("li").removeClass("on")
            $(this).parents("li").find(".drop").eq(0).slideUp()
        }
    })
}
aboutJoinUs()