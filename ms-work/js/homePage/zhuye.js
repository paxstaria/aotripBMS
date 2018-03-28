//导航切换效果
function qiehuan() {
	//左右侧信息切换
	$(".navInfo").find("li").on('click', function() {
		var index = $(this).index();
		$(this).css({
			"background-color": "#ffd100",
			"font-weight": "bold"
		}).siblings().css({
			"background-color": "#fff",
			"font-weight": "normal"
		});
		$(".showMsg").eq(index).css("display", "block").siblings().css("display", "none");
		$(this).find(".detailMsg").slideDown("slow");
		$(this).siblings().find(".detailMsg").slideUp("slow");
	});
	//导航二级菜单切换
	$(".navInfo").find("li").find(".detailMsg").find("dd").on("click", function() {
			var tindex = $(this).index();
			var parentLab=$(this).parent();
			var pindex=parentLab.parent().index();
			$(".showMsg").eq(pindex).find(".floor").eq(tindex).css("display", "block").siblings().css("display", "none");
			$(this).parent("li").siblings().find(".detailMsg dd").find("label").css({
				"background-color": "#e5e5e5",
			});
			$(this).find("label").css({
				"background-color": "#fbd608",
			});
			$(this).siblings().find("label").css({
				"background-color": "#e5e5e5",
			});
			$(this).find("a").css({
				"font-weight": "bold"
				
			});
			$(this).siblings().find("a").css({
				"font-weight": "normal"
			});

		});
}
