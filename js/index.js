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

});