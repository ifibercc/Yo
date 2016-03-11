$(document).ready(function () {
    // fullpage
    $('#fullpage').fullpage({
        resize: true,
        css3: true,
        sectionsColor: ['#f2f2f2', '#ddd', '#f2f2f2', '#aeaeae'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        // 上下滑块配置
        navigation: false,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: ['page1', 'page2', 'page3', 'page4'],

        controlArrowColor: '#000',
        loopHorizontal: true
    });

    // timeline
    var ev = [{
        id : 1,
        name : 'Yo团队组建成功',
        on : new Date(2016,2,4)
    },{
        id : 2,
        name : 'Yo团队第一次在GitHub提交代码',
        on : new Date(2016,2,8)
    }];
    $('#longTimeLine').jqtimeline({
        events : ev,
        numYears: 1,
        startYear: 2016,
        gap: 100,
        click:function(e,event){
            //loadPage(event);
        }
    });
    $('#sdt_menu > li').bind('mouseenter',function(){
        var $elem = $(this);
        $elem.find('img')
             .stop(true)
             .animate({
                'width':'170px',
                'height':'170px',
                'left':'0px'
             },400,'easeOutBack')
             .andSelf()
             .find('.sdt_wrap')
             .stop(true)
             .animate({'top':'140px'},500,'easeOutBack')
             .andSelf()
             .find('.sdt_active')
             .stop(true)
             .animate({'height':'170px'},300,function(){
            var $sub_menu = $elem.find('.sdt_box');
            if($sub_menu.length){
                 var left = '170px';
                 if($elem.parent().children().length == $elem.index()+1)
                     left = '-170px';
                 $sub_menu.show().animate({'left':left},200);
             }   
         });
     }).bind('mouseleave',function(){
         var $elem = $(this);
         var $sub_menu = $elem.find('.sdt_box');
             if($sub_menu.length)
             $sub_menu.hide().css('left','0px');
             
             $elem.find('.sdt_active')
                  .stop(true)
                  .animate({'height':'0px'},300)
                  .andSelf().find('img')
                  .stop(true)
                  .animate({
                     'width':'0px',
                     'height':'0px',
                     'left':'85px'},400)
                  .andSelf()
                  .find('.sdt_wrap')
                  .stop(true)
                  .animate({'top':'25px'},500);
        });
});