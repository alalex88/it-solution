console.log("Test");
//ввод числа пользователем
let N = parseInt(prompt("Введите число", 28));
//объявление массива
let bit;
let res;
let arr =[];
// console.log(N.toString().length);
let i=0;
while (N) {
	bit = i.toString().length;
	res = i%bit;
	if (res === 0) {
		console.log("Деление на "+bit, i);	
		arr.push(i);	
	 	N--;
	 }		
	i++;
}
console.log("результат выполнения кода для N="+arr.length, arr);
alert("результат выполнения кода для N="+arr.length+' '+arr);
