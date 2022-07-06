function enter() {

	var name = document.getElementById('name').value;
	
	var a = Math.floor(Math.random() * 7);
	var b = Math.floor(Math.random() * 7);
	var c = Math.floor(Math.random() * 7);

	if (name == "") {
		document.getElementById('demo').innerHTML = "Введите имя!!!";
		a = "1"
		b = "2"
		c = "3"
	} else if (!name == "") {
		document.getElementById('demo').innerHTML = "";
		document.getElementById('a').innerHTML = a;
		document.getElementById('b').innerHTML = b;
		document.getElementById('c').innerHTML = c;
	}

	if (a == b && b == c && c == a ) {
		document.getElementById('labels').style.display = 'block'
		document.getElementById('labels').style.paddingLeft = '25px'
		document.getElementById('labels').style.paddingTop = '15px'
		document.getElementById('h1').style.display = 'none'
		document.getElementById('name').style.display = 'none'
		document.getElementById('enter').style.display = 'none'
		document.getElementById('reset').style.display = 'block'
		document.getElementById('gif').style.display = 'block'
		document.getElementById('demo').style.color = 'white'
		document.getElementById('demo').innerHTML = ("Поздавляю!!!" + "<br>" + "Вы выиграли " + name + "<br>" + "1000000₽")
		alert ('Вы выиграли')
		var audio = new Audio(); // Создаём новый элемент Audio
  		audio.src = 'money.mp3'; // Указываем путь к звуку "клика"
  		audio.autoplay = true;
	}
	
}

function reset() {
	window.location = "Kazino.html";
}

function exit() {
	window.location = "../index.html";
}