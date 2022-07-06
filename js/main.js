function ClickForm () {
	var login = document.getElementById('login').value;
	var pass = document.getElementById('password').value;
	console.log ('text')
	

	document.getElementById('demo').innerHTML =login + pass;


	if (login == "" && pass == "") {
		document.getElementById('demo').innerHTML = "Введите логин и пароль!";
		document.getElementById('demo').style.color = "red";
	} else if (login == "" ) {
		document.getElementById('demo').innerHTML = "Введите логин!";
		document.getElementById('demo').style.color = "red";
	} else if (pass == "" ) {
		document.getElementById('demo').innerHTML = "Введите пароль!";
		document.getElementById('demo').style.color = "red";
	} else if (login == "Yusuf" && pass == "2002") {
		alert("Успешно.");
		document.getElementById('demo').style.display = "none";
		window.location = "html/Kazino.html";
	} else if (login == "Farida" && pass == "2002") {
		alert("Успешно.");
		document.getElementById('demo').style.display = "none";
		window.location = "html/Kazino.html";
	} else {
		document.getElementById('demo').innerHTML = "Не правилный логин или пароль!";
		document.getElementById('demo').style.color = "red";
	}

	return false;
} 