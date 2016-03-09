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

});