let form = document.forms.someForm;
//обработка события
form.addEventListener('submit', formHandler);
//вызов функции
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