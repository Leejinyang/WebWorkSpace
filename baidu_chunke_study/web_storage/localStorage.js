function saveStorage(id) {
	var target = document.getElementById(id);
	var str = target.value;
	localStorage.setItem("mess",str);
	// str永久临时储存在key为mess的空间中
}
function loadStorage(id) {
	var target = document.getElementById(id);
	var msg = localStorage.getItem("mess");
	// 读取key为mess中的内容
	target.innerHTML = msg;
}