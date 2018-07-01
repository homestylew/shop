$(function () {
    $('.container').fullpage({
        //配置参数,fullpages定义好的
        sectionsColor:['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060',''],
        //默认居中，编程顶部对齐
        verticalCentered:false,
        //设置导航  指示器
        navigation:true,
        //监听当前页面加载完成,回调函数
        afterLoad:function (link,index) {
        //    当前屏幕的序号，从1开始
            $('.section').eq(index-1).addClass('now');
        },
        // 点击更多，切换到下一页，等插件初始化完毕后绑定这个事件
        afterRender:function () {
            $('.more').click(function () {
                $.fn.fullpage.moveSectionDown();
            })
        //    第四页购物车结束后执行
            $('.screen04 .cart').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            })
        },
        //direciton 向上或者下  index当前离开的索引
        onLeave:function (index,nextIndex,direction) {
            //是第二页到第三页的时候
            if(index==2&&nextIndex==3){
                $('.section').eq(index-1).addClass('leaved');

            }else if(index==3&&nextIndex==4){
            //    第三页道第四页
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==5&&nextIndex==6){
                $('.section').eq(index-1).addClass('leaved');
                // $('.section').eq(index-1).removeClass('now');
            }
        },
        //为了让页面切换时间和沙发的下移时间保持一致
        scrollingSpend:1000
    });
});