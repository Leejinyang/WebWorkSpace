function saveStorage(id) {
	var target = document.getElementById(id);
	var str = target.value;
	sessionStorage.setItem("mess",str);
	// str内容临时储存在key为mess的空间中
}
function loadStorage(id) {
	var target = document.getElementById(id);
	var msg = sessionStorage.getItem("mess");
	// 读取key为mess中的内容
	target.innerHTML = msg;
}