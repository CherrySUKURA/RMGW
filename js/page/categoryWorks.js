$("#pager").zPager({
    totalData: 50,
    htmlBox: $('#wraper'),
    btnShow: true,
    ajaxSetData: false
});

function currentPage(currentPage){
    /*
        触发页码数位置： Page/js/jquery.z-pager.js 64行
    */
    console.log("当前页码数：" + currentPage);
}