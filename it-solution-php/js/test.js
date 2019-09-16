let form = document.forms.someForm;
//обработка события
form.addEventListener('submit', formHandler);

function formHandler(event){
	//отмене действия браузера
	event.preventDefault();
	//поиск элемента по классу
	let elems = document.querySelectorAll(".validate");
	//присвоение введенного значения
	//преобразование к int
	let elem = parseInt(elems[0].value);
	//console.log(typeof(elem));
	//console.log(elem);
	//проверка на получение данных
	if(!elem){
		document.getElementById("err").innerHTML =
            'Данные введены некорректно или не все поля заполнены';
        return;
	}
	//отправка формы
	this.submit();
}

// TweenMax.to(".logo", 20, {x:100, rotation:360, scale:1});
// TweenMax.from(".logo", 6, {x:600, ease:Bounce.easeOut});
TweenMax.from(".logo", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, scale:0.5, delay:0.5}, 0.2);
TweenMax.to(".logo, .box", 0.5, {opacity:0, delay:2});