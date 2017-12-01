function showsubmenu(li){
	var submenu = li.getElementsByTagName("ul")[0];
	// 每个li下虽然只能获得一个ul，但他仍然是用数组储存的，故需要[0]获取这个ul
	submenu.style.display = "block";
}

function hidesubmenu(li){
	var submenu = li.getElementsByTagName("ul")[0];
	submenu.style.display = "none";
}