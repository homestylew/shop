##### FullPage插件

- 插件功能介绍
    + 基于 jQuery 的插件，它能够帮你很方便、很轻松的制作出全屏网站。
    + 支持鼠标滚动，支持前进后退和键盘控制，多个回调函数，
      支持手机、平板触摸事件，支持 CSS3 动画，支持窗口缩放，窗口缩放时自动调整，
      可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等。
    + 参考文档：http://www.dowebok.com/demo/2014/77/
    + 原理：window.onmousewheel = function(){ console.log('ok') };
- 使用步骤
    + 引用文件
    ~~~html
        <link rel="stylesheet" href="css/jquery.fullPage.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.fullPage.js"></script>
    ~~~
    + html结构
    ~~~html
    <div id="fullpage">
        <div class="section">第一屏</div>
        <div class="section">第二屏</div>
        <div class="section">
            <div class="slide">第三屏的第一屏</div>
            <div class="slide">第三屏的第二屏</div>
            <div class="slide">第三屏的第三屏</div>
            <div class="slide">第三屏的第四屏</div>
        </div>
        <div class="section">第四屏</div>
    </div>
    ~~~
    + js初始化
    ~~~javascript
    $(function(){
        $('#fullpage').fullpage();
    });
    ~~~
    
