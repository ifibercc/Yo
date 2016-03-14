$(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({
        resize: true,
        css3: true,
        sectionsColor: ['#08233E', '#ddd', '#f2f2f2', '#aeaeae'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu:'#menu',
        scrollingSpeed:1000,
        // 上下滑块配置
        navigation: false,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: ['page1', 'page2', 'page3', 'page4'],

        controlArrowColor: '#000',
        loopHorizontal: true
    });
    //index 
    ar.init();
    // timeline
    var ev = [{
        id: 1,
        name: 'Yo团队组建成功',
        on: new Date(2016, 2, 4)
    }, {
        id: 2,
        name: 'Yo团队第一次在GitHub提交代码',
        on: new Date(2016, 2, 8)
    }];
    $('#longTimeLine').jqtimeline({
        events: ev,
        numYears: 1,
        startYear: 2016,
        gap: 100,
        click: function(e, event) {
            //loadPage(event);
        }
    });
<<<<<<< Updated upstream
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
=======
    yo3.loadPanel();
    yo3.chart();
});
;(function() {
    var isCanvasSupported = function () {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    };
    if( isCanvasSupported() ) {

      var canvas = document.getElementById('broken-glass'),
          context = canvas.getContext('2d'),
          width = canvas.width = Math.min(800, window.innerWidth),
          height = canvas.height,  
          numTriangles = 100,
          rand = function(min, max){
            return Math.floor( (Math.random() * (max - min + 1) ) + min);
          };
      window.drawTriangles = function(){
        context.clearRect(0, 0, width, height);
        var hue = rand(0,360);
        var increment = 80 / numTriangles;
        for(var i = 0; i < numTriangles; i++) {
            context.beginPath();
            context.moveTo(rand(0,width), rand(0,height) );
            context.lineTo(rand(0,width), rand(0,height) );
            context.lineTo(rand(0,width), rand(0,height) );
            context.globalAlpha = 0.5;
            context.fillStyle = 'hsl('+Math.round(hue)+', '+rand(15,60)+'%, '+ rand(10, 60) +'%)';      
            context.closePath();
            context.fill();

            hue+=increment;
            if(hue > 360) hue = 0;
        }
        canvas.style.cssText = '-webkit-filter: contrast(115%);';
      };

      document.getElementById('logo-title').style.color = 'rgba(250, 250, 250, 0.95)';
      drawTriangles();

      var el = document.getElementById('yo-title');
      el.onclick = function() {
        drawTriangles();
      };
    }

  })();
(function() {
    var rtnCodBlock,BlockArea = document.getElementById('code').innerHTML;
    var yo3 = {
        chart: function() {
            ////个人技能/////
            var myChart = echarts.init(document.getElementById('_yo3skill'));
            // 指定图表的配置项和数据
            option = {
                baseOption: {
                    series: [{
                        name: 'IT技能',
                        type: 'pie',
                        roseType: 'angle',
                        data: [{
                            value: 410,
                            name: 'Html/Css'
                        }, {
                            value: 280,
                            name: 'Node.js'
                        }, {
                            value: 400,
                            name: 'Javascript'
                        }, {
                            value: 345,
                            name: 'angularJS'
                        }]
                    }]
                },
                media: [{
                    option: {
                        series: [{
                            radius: [30, '50%'],
                            center: ['50%', '50%']
                        }]
                    }
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        loadPanel: function() {
            var $regularlyItems = $(".item-list li");
            $regularlyItems.each(
                function() {
                    var _$this = $(this);
                    _$this.children(".flip-box").eq(0).addClass("out").removeClass("in");
                    setTimeout(function() {
                        _$this.find(".flip-box").show().eq(1).addClass("in").removeClass("out");
                        _$this.children(".flip-box").eq(0).hide();
                    }, 225);
                }
            );
            $regularlyItems.hover(function(e) {
                var _$this = $(this);
                _$this.children(".flip-box").eq(1).addClass("out").removeClass("in");
                var codeBlock = $(e.currentTarget).find('#code');
                setTimeout(function() {
                    if (codeBlock.length)
                        yo3.typewriter(document.getElementById('code'));
                    _$this.find(".flip-box").show().eq(0).addClass("in").removeClass("out");
                    _$this.children(".flip-box").eq(1).hide();
                }, 225);
            }, function(e) {
                var _$this = $(this);
                var codeBlock = $(e.currentTarget).find('#code');
                _$this.children(".flip-box").eq(0).addClass("out").removeClass("in");
                setTimeout(function() {
                    if(codeBlock.length && rtnCodBlock!=undefined && rtnCodBlock!=null)
                    {
                        clearInterval(rtnCodBlock);
                        document.getElementById('code').innerHTML = BlockArea;
                    }
                    _$this.find(".flip-box").show().eq(1).addClass("in").removeClass("out");
                    _$this.children(".flip-box").eq(0).hide();
                }, 225);
            });
        },
        typewriter: function(a){
            var d = a,
                c = d.innerHTML,
                b = 0;
                d.innerHTML = "";
            var e = setInterval(function() {
                var f = c.substr(b, 1);
                if (f == "<") {
                    b = c.indexOf(">", b) + 1;
                } else {
                    b++;
                }
                d.innerHTML = c.substring(0, b) + (b & 1 ? "_" : "");
                if (b >= c.length) {
                    clearInterval(e);
                }
            }, 75);
            rtnCodBlock = e;
            return this;
        }
    };
    window.yo3 = yo3;
})();
>>>>>>> Stashed changes
