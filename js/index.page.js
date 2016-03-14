var ar = ar || {};

ar = {
	init : function(){
		this.mainMenu.init();
		this.page.init();
		this.home.init();
	},
	mainMenu : {
		init : function(){
			this.buttons();
		},
		view : {
			show : function(){
				$('nav').fadeIn();
			},
			hide : function(){
				$('nav').fadeOut();
			}
		},
		buttons : function(){
			var btn = $('nav a:not(".mail")'),
				fadeSpeed = 400;

			//点击事件
			btn.on('click',function(e){
				//点击下一个时，移除当前选中
				btn.not($(this)).removeClass('selected');
				$(this).addClass('selected');
			});
		},
		setBg : function(bg){
			var backgrounds = new Array('#08233E','#F8823C','#2C5379','#EB2142'),
				header = $('header');

			header.css('background-color',backgrounds[bg]);
		},
		setTransparent : function(){
			$('header').css('background-color','transparent');
		},
		setSelected : function(eq){
			var btn = $('nav a');
			btn.removeClass('selected');
			btn.eq(0).addClass('selected');
			// ar.menu.view.show();
			this.changeBgStatue = false;
		}
	},

	/*
	 * Index Page actions
	 */
	page : {
		init : function(){
	 		// this.setSubsHeight();
	 		this.keyboard.keysEvent();
	 		// this.buttons();
	 	},
		keyboard : {
			pressed : new String(),
			keysEvent : function(){
				var holder = $('.keyboard'),
				registeredBtn = new Array(38,40,37,39),
				keys = {},
				fadeSpeed = 150,
				menuLink = $('nav a');
				$(document).on('keydown',function(e){
					var keycode = (e.keyCode ? e.keyCode : e.which),
						pressedBefore = ar.page.keyboard.pressed;
					if( $.inArray(keycode, registeredBtn) != -1 && (keycode != pressedBefore)){
						e.preventDefault();
						ar.page.keyboard.pressed = keycode;
						holder.find('.btn .pressed').fadeOut(fadeSpeed);
					}
					switch(keycode){
						case 38: //up
							holder.find('.up .pressed').stop(true,true).fadeIn(fadeSpeed).css('display','block');
							break;
						case 40: //down
							holder.find('.down .pressed').stop(true,true).fadeIn(fadeSpeed).css('display','block');
							break;
						case 37: //left
							holder.find('.left .pressed').stop(true,true).fadeIn(fadeSpeed).css('display','block');
							break;
						case 39:
							holder.find('.right .pressed').stop(true,true).fadeIn(fadeSpeed).css('display','block');
							break;
					}
				}).on('keyup',function(){
					holder.find('.btn .pressed').fadeOut(fadeSpeed);
				});
			},
			show : function(){
				$('.keyboard').fadeIn(500);
			},
			hide : function(){
				$('.keyboard').fadeOut(500);
			},
			pressAll : function(type){
				var keys = $('.keyboard .btn');
				(type == 'fade') ? keys.find('.pressed').stop(true, true).fadeIn(550).css('display', 'block') : keys.find('.pressed').css('display', 'block');
			},
			unpressAll : function(type){
				var keys = $('.keyboard .btn');
				(type == 'fade') ? keys.find('.pressed').fadeOut(550) : keys.find('.pressed').css('display', 'none');
			}
		},
		animations : function(){
			// switch(number){
			// 	case 0:
			// 		ar.page.keyboard.show();
			// 		break;	
			// 	case 1:
			// 		if( !$('').hasClass('animated') ){
			// 			ar.page2.run();
			// 		} else {
			// 			ar.page.keyboard.show();	
			// 		}
			// 		break;	
			// 	case 2:
			// 		if( !$('').hasClass('animated') ){
			// 			ar.page3.run();
			// 		} else {
			// 			ar.page.keyboard.show();	
			// 		}
			// 		break;	
			// 	case 3:
			// 		if( !$('').hasClass('animated') ){
			// 			ar.page4.run();
			// 		} else {
			// 			ar.page.keyboard.show();	
			// 		}
			// 		break;
			// }
			// ar.page.keyboard.show();
		}
	},
	home : {
		init : function(){
			ar.home.run();
			ar.home.actions();
		},
		actions : function(){
			var stat = $('.index .gp-n');
			stat.on('mouseenter', function(){
				$(this).stop(true,true).animate({'margin-top' : 0}, 300, 'easeOutBounce');
			}).on('mouseleave', function(){
				$(this).animate({'margin-top' : 15}, 300, 'easeOutBounce');
			});

		},
		animation : function(){
			var fadeSpeed = 1000,
				intervalSpeed = 300,
				holder = $('.index'),
				counter = 0,
				stats = holder.find('.gp-n').length;
			holder.find('h2').fadeIn(fadeSpeed,function(){
				ar.page.keyboard.show();
				ar.page.keyboard.pressAll();
				setTimeout(function(){
					ar.page.keyboard.unpressAll('fade');
				},900);

			});

			var statsInterval = setInterval(function(){
				if(counter < stats){
					holder.find('.gp-n').eq(counter).fadeIn(fadeSpeed/3).animate( { 'left' : '0', 'opacity' : 1 }, fadeSpeed/3 , 'easeOutQuad' );
					holder.find('.name').eq(counter).delay(fadeSpeed/4).animate( { 'opacity' : 1 }, fadeSpeed/2);
				} else {
					clearInterval(statsInterval);
				}
				counter++;
			}, intervalSpeed);
		},
		//run animation width delay
		run : function(){
			setTimeout(function(){
				ar.home.animation();
			},400);
		}
	}
}







