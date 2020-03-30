$(function () {

	// 返回顶部 头部阴影
	$('.go_top').click(function () {
		$('html, body').stop(true, true).animate({
			scrollTop: 0
		}, 500);
	});
	var windowT = $(window).scrollTop();
	if (windowT > 0) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
	if (windowT > 100) {
		$('.go_top').fadeIn(300);
	}
	$(window).on('scroll', function () {
		windowT = $(window).scrollTop();
		if (windowT > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
		if (windowT > 100) {
			$('.go_top').fadeIn(300);
		}
	})



	// 浏览器升级提示
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	reIE.test(userAgent);
	var fIEVersion = parseFloat(RegExp["$1"]);
	if (fIEVersion <= 9) {
		$("#brower-max").addClass('cur00'); $("#brower").addClass('cur00');
	} else {
		$("#brower-max").removeClass('cur00'); $("#brower").removeClass('cur00');
	}








	/* 取消冒泡 IE兼容 */
	function fn(event) {
		var ev = window.event || event;
		if (ev && ev.stopPropagation) {
			ev.stopPropagation();
		} else {
			ev.cancelBubble = true;
		}
	}




	/* notice 公告 */
	var noticeSwiper = new Swiper('.notice .swiper-container', {
		direction: 'vertical',
		loop: true,
		autoplay: 3000,
	})
	$('.notice .item').each(function () {
		$(this).hover(function () {
			noticeSwiper.stopAutoplay();
		}, function () {
			noticeSwiper.startAutoplay();
		})
	})





	// main_left
	if ($('.main_left').length > 0) {
		mainLeftChange();
	}

	function mainLeftChange() {
		var mainLeftSpace = 70;
		var mainLeftT = 15;
		var mainLeftTop = $('.main_left').offset().top;
		var winH = $(window).height();
		var winTop = $(window).scrollTop();
		var documentH = $('html, body').height();
		var mainLeftH = $('.main_left').outerHeight();
		var mainRightH = $('.main_right').outerHeight();
		var mainRightT = $('.main_right').offset().top;
	
	
		if (winH > mainLeftTop) {
			if ($(window).scrollTop() >= mainLeftTop - 15) {
				$('.main_left').addClass('active');
			} else {
				$('.main_left').removeClass('active');
			}
	
			$(window).on('scroll', function () {
				winTop = $(window).scrollTop();
				documentH = $('html, body').height();
				mainRightH = $('.main_right').outerHeight();
				if (winH > mainLeftH) {
					if ($(window).scrollTop() >= mainLeftTop - mainLeftT) {
						$('.main_left').addClass('active');
					} else {
						$('.main_left').removeClass('active');
					}


					if ((winH - mainLeftH - mainLeftT) <= (winH - (mainRightH + mainRightT - winTop))) {
						$('.main_left').addClass('active_ab');
					} else {
						$('.main_left').removeClass('active_ab');
					}
				}
			})
		}
	}




	// fadeIn动画
	scrollTop('.animate_fadeLeft200', 'fadeInLeft200');
	scrollTop('.animate_fadeLeft150', 'fadeInLeft150');
	scrollTop('.animate_fadeLeft100', 'fadeInLeft100');
	scrollTop('.animate_fadeLeft80', 'fadeInLeft80');
	scrollTop('.animate_fadeLeft50', 'fadeInLeft50');
	scrollTop('.animate_fadeLeft30', 'fadeInLeft30');
	scrollTop('.animate_fadeLeft20', 'fadeInLeft20');
	scrollTop('.animate_fadeLeft10', 'fadeInLeft10');

	scrollTop('.animate_fadeRight200', 'fadeInRight200');
	scrollTop('.animate_fadeRight150', 'fadeInRight150');
	scrollTop('.animate_fadeRight100', 'fadeInRight100');
	scrollTop('.animate_fadeRight80', 'fadeInRight80');
	scrollTop('.animate_fadeRight50', 'fadeInRight50');
	scrollTop('.animate_fadeRight30', 'fadeInRight30');
	scrollTop('.animate_fadeRight20', 'fadeInRight20');
	scrollTop('.animate_fadeRight10', 'fadeInRight10');

	scrollTop('.animate_fadeUp200', 'fadeInUp200');
	scrollTop('.animate_fadeUp150', 'fadeInUp150');
	scrollTop('.animate_fadeUp100', 'fadeInUp100');
	scrollTop('.animate_fadeUp80', 'fadeInUp80');
	scrollTop('.animate_fadeUp50', 'fadeInUp50');
	scrollTop('.animate_fadeUp30', 'fadeInUp30');
	scrollTop('.animate_fadeUp20', 'fadeInUp20');
	scrollTop('.animate_fadeUp10', 'fadeInUp10');

	scrollTop('.animate_fadeDown200', 'fadeInDown200');
	scrollTop('.animate_fadeDown150', 'fadeInDown150');
	scrollTop('.animate_fadeDown100', 'fadeInDown100');
	scrollTop('.animate_fadeDown80', 'fadeInDown80');
	scrollTop('.animate_fadeDown50', 'fadeInDown50');
	scrollTop('.animate_fadeDown30', 'fadeInDown30');
	scrollTop('.animate_fadeDown20', 'fadeInDown20');
	scrollTop('.animate_fadeDown10', 'fadeInDown10');

	scrollTop('.animate_fadeIn', 'fadeIn');



});

/* 添加动画 */
function scrollTop(el, classN, callback) {
	var $el = $(el);
	var callbackFlag = 0;
	var winW = $(window).width();
	var space = 40;
	if (winW <= 768) {
		space = 20;
	}
	$el.each(function (i, elE) {
		var elH = Math.ceil($(elE).offset().top) + space;
		var winH = $(window).height();
		var winScr = $(window).scrollTop();

		if (elH < winH + winScr) {
			$(elE).addClass(classN);
			if (callback && callbackFlag == 0) {
				callback();
				callbackFlag++;
			}
		}
		$(window).scroll(function () {
			elH = Math.ceil($(elE).offset().top) + space;
			winScr = $(window).scrollTop();
			if (elH < winH + winScr) {
				$(elE).addClass(classN);
				if (callback && callbackFlag == 0) {
					callback();
					callbackFlag++;
				}
			}
			/* elE.addEventListener("webkitAnimationEnd", function () {
				$(elE).removeClass(function (index, css) {
					return (css.match(/(^|\s)animate_\S+/g) || []).join('');
				});
			}) */
		})
	})
}



// 切换当前状态
function switcherActive(el, container) {
	container.each(function (i, v) {
		$(v).removeClass('active');
	})
	el.addClass('active');
}






/* 选项卡 */
// function tabControl(el, container, eventType) {
// 	el.each(function (i, v) {
// 		$(v).on(eventType, function () {
// 			el.each(function (i, v) {
// 				$(v).removeClass('active');
// 			})
// 			container.each(function (i, v) {
// 				$(v).removeClass('active');
// 			})
// 			el.eq(i).addClass('active');
// 			container.eq(i).addClass('active');
// 		})
// 	})
// }





/* 弹窗 */
// function popup(el, container) {
// 	el.each(function (i, v) {
// 		$(v).on('click', function (event) {
// 			var ev = window.event || event;
// 			if (ev && ev.stopPropagation) {
// 				ev.stopPropagation();
// 			} else {
// 				ev.cancelBubble = true;
// 			}
// 			container.fadeIn(300, function () {
// 				container.addClass('active');
// 			})
// 		})
// 	})
// 	container.find('.close').each(function (i, el) {
// 		$(el).on('click', function () {
// 			container.fadeIn(150);
// 			container.removeClass('active');
// 		})
// 	})
// 	container.on('click', function () {
// 		container.fadeIn(150);
// 		container.removeClass('active');
// 	})
// 	container.find('.center').on('click', function (event) {
// 		var ev = window.event || event;
// 		if (ev && ev.stopPropagation) {
// 			ev.stopPropagation();
// 		} else {
// 			ev.cancelBubble = true;
// 		}
// 	})
// }









function tabControl(index) {
	var mainGroup = $('.trademark .main_right .main_right_content_group');
	var mainDetails = $('.trademark .main_right .main_right_content_details');

	if (mainGroup.hasClass('main_group_tab')) {
		switcherActive(mainGroup.find('.item').eq(index), mainGroup.find('.item'));
		switcherActive(mainDetails.find('.details_item').eq(index), mainDetails.find('.details_item'));
	}

	mainGroup.find('.item').each(function (i, el) {
		$(el).on('click', function () {
			if (mainGroup.hasClass('main_group_tab')) {
				mainGroup.attr('data-index', i);
				switcherActive($(el), mainGroup.find('.item'));
				switcherActive(mainDetails.find('.details_item').eq(i), mainDetails.find('.details_item'));
			}
		})
	})
}

