console.log("Test");
//ввод числа пользователем
let N = parseInt(prompt("Введите число", 28));
let arr = [];
//функция подсчета знаков числа
function countDigits(n) {
	//проверка на число
	if (typeof n !== "number" || !n) {
	console.log("Введите число");
	return;
}
   for(var i = 0; n > 1; i++) {
      n /= 10;
   }
   return i;
}
//вызов функции подсчета знаков
let n = countDigits(N);
//подсчет и вывод результата
for (let i = 1; i <= N; i++) {
	if (i%n === 0) {
		console.log("Деление на "+n, i);
		//добавение результата в массив
		arr.push(i);		
	}	
}
console.log("результат выполнения кода для N="+N, arr);
alert("результат выполнения кода для N="+N+' '+arr);
