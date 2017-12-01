$(function(){
	// on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
	$("#menuList").on("click", "a", function(){

		// 如果点击的是同一个一级菜单，则动画收起，否则，动画切换
		// 如果点击了同一个一级菜单，则去查找关闭按钮，模拟点击关闭按钮进行菜单的收回
		if ($(this).hasClass("btn-active")) {
			$("#expandZone #closeBtn").click();
			return false;
			// 抑制了元素的冒泡事件，及抑制了元素的默认行为
			// 在方法的最后使用了return false，就相当于对事件对象同时调用了stopPropagation()和preventDefault()
		}

		var curIndex = $(this).index();
		var mlValu = "-"+curIndex*100+"%";
		// 知道点击第几个链接
		if ($("#expandZone").hasClass("active")) {
			// 如果菜单激活，则只需要控制css属性进行切换
			$("#expandZone .expdiv").animate({marginLeft: mlValu});
		}else {
			// 如果菜单没有激活，则需要先激活，然后再去控制css属性进行相应二级菜单的显示
			$("#expandZone").animate({height:"130px"}).addClass("active");
			$("#expandZone .expdiv").css({marginLeft: mlValu});
		}

		// 区分点击的是否点击的是一级菜单，添加虚拟类btn-active
		// 只有当前元素是激活状态，其兄弟元素不能是激活状态，因此需要将兄弟元素的btn-active移除
		// 通过siblings()遍历兄弟元素，通过removeClass()删除指定类
		$(this).addClass("btn-active").siblings().removeClass("btn-active")

		return false;
			
		});

		$("#expandZone #closeBtn").on("click", function(){
			$("#expandZone").animate({height:"0"}, function(){
				// 收回按钮需要将所有的激活状态删除
				$(this).removeClass("active");
				$("menuList .btn-active").removeClass("btn-active");
			});
			return false;	
		});
});