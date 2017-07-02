$(function () {
	var
		oBox = $('#box'),
		oDirectionBtn = $('#direction-btn'),
		aSpan	= $('#btn-list span'),
		aLi		= $('#img-list li'),
		iIndex  = 0,
		oTimer  = null;

	// 显示隐藏按钮
	oBox.bind('mouseenter', function () {
		clearInterval(oTimer);
		oDirectionBtn.css({display:'block'});
	});
	oBox.bind('mouseleave', function () {
		oDirectionBtn.css({display:'none'});

		oTimer = setInterval(function () {
			iIndex++;

			if(iIndex >= 8) {
				iIndex = 0;
			}

			// 做动画
			aLi.eq(iIndex).css({opacity:0}).addClass('active').stop(true).animate({
				opacity:1
			}, 300).siblings().animate({opacity:0}, 300, function () {
				$(this).removeClass('active')
			});

			// 改变按钮的样式
			aSpan.eq(iIndex).addClass('active').siblings().removeClass('active');
		}, 3000);
	});

	// 给按钮列表添加鼠标移入事件，显示对应的图片
	aSpan.bind('mouseenter', function () {
		if(!$(this).hasClass('active')) {
			iIndex = $(this).index();

			// 做动画
			aLi.eq(iIndex).css({opacity:0}).addClass('active').stop(true).animate({
				opacity:1
			}, 300).siblings().animate({opacity:0}, 300, function () {
				$(this).removeClass('active')
			});

			// 改变按钮的样式
			$(this).addClass('active').siblings().removeClass('active');
		}
	});

	// 给右侧按钮添加点击事件
	$('#left-btn').bind('click', function () {
		iIndex--;

		if(iIndex <= -1) {
			iIndex = 7;
		}

		// 做动画
		aLi.eq(iIndex).css({opacity:0}).addClass('active').stop(true).animate({
			opacity:1
		}, 300).siblings().animate({opacity:0}, 300, function () {
			$(this).removeClass('active')
		});

		// 改变按钮的样式
		aSpan.eq(iIndex).addClass('active').siblings().removeClass('active');
	});

	// 给右侧按钮添加点击事件
	$('#right-btn').bind('click', function () {
		iIndex++;

		if(iIndex >= 8) {
			iIndex = 0;
		}

		// 做动画
		aLi.eq(iIndex).css({opacity:0}).addClass('active').stop(true).animate({
			opacity:1
		}, 300).siblings().animate({opacity:0}, 300, function () {
			$(this).removeClass('active')
		});

		// 改变按钮的样式
		aSpan.eq(iIndex).addClass('active').siblings().removeClass('active');
	});

	// 自动运行
	oTimer = setInterval(function () {
		iIndex++;

		if(iIndex >= 8) {
			iIndex = 0;
		}

		// 做动画
		aLi.eq(iIndex).css({opacity:0}).addClass('active').stop(true).animate({
			opacity:1
		}, 300).siblings().animate({opacity:0}, 300, function () {
			$(this).removeClass('active')
		});

		// 改变按钮的样式
		aSpan.eq(iIndex).addClass('active').siblings().removeClass('active');
	}, 3000);
});