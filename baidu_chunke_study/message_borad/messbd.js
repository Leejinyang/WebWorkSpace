function saveStorage(id) {
	var data = document.getElementById(id).value;
	var time = new Date().getTime();
	localStorage.setItem(time, data);
	alert("data has been saved!");
	loadStorage('msg');
}

function loadStorage(id) {
	var reselt = '<table border="1">';
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var date = new Date();
		date.setTime(key); //读取key中保存的时间
		var datestr = date.toGMTString();
		reselt += '<tr><td>'+'这是第 '+i+' 条数据 '+'</td><td>'+value+'</td><td>'+datestr+'</td></tr>'
	}
	reselt += '</table>';
	var target = document.getElementById(id);
	target.innerHTML = reselt;
}

function clearStorage(id) {
	localStorage.clear();
	alert("message has been all deleted!");
	loadStorage('msg');
}