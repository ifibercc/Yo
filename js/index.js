$(document).ready(function () {
    // fullpage
    $('#fullpage').fullpage({
        resize: true,
        css3: true,
        sectionsColor: ['#f2f2f2', '#ddd', '#f2f2f2', '#fff'],
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
    var ev = [
        {
            id: 1,
            name: "Yo团队组建成功",
            on: new Date(2016, 2, 5)
        },
        {
            id: 2,
            name: "Yo团队在GitHub第一次提交代码",
            on: new Date(2016, 2, 8)
        }
    ];
    $('#longTimeLine').jqtimeline({
        events: ev,
        numYears: 1,
        startYear: 2016,
        gap: 150,
        click: function (e, event) {
            //loadPage(event);
        }
    });
});