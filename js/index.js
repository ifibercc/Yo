$(function(){
    $('#fullpage').fullpage({
        verticalCentered: false,
        css3: true,
        sectionsColor: ['#f2f2f2', '#fff', '#f2f2f2', '#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
        slidesNavigation: true,
        slidesNavPosition: top,
        controlArrowColor: '#000'
    });
});