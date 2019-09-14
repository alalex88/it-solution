<?php 
$post = $_POST;
$number = (int) $post['number'];
$arr = [];
$file_test = 'test.txt';

//проверка введенных данных на отрицательное число и пустоту
if (empty($number) || $number < 0) {
	echo "введите целое и положительное число";
	return;
}
//подсчет знаков введенного числа
//удаление пробелов
$num = strlen(trim($number));
//var_dump($num);
//вызов функции записи в фаил
loadTitle($file_test, $number);
for ($i=1; $i <=$number ; $i++) {
	$res = $i%$num;
	if ($res === 0) {
		//запись данных в массив $arr
		array_push($arr, $i);
		//вызов функции записи в фаил
		loadFile($file_test, $i, $num);
	 	// echo "число $i Остаток $res <br>";
	 }	
}
var_dump($arr);
//функция записи заголовка в фаил
function loadTitle($file, $number){
	$current = file_get_contents($file);
	$current .= 'результат выполнения кода для N = ' . $number . "\n";
	return file_put_contents($file, $current, LOCK_EX);
}
//функция записи результата в фаил
function loadFile($file, $number, $num){
	$current = file_get_contents($file);
	$current .= 'Число ' . $number . ' делим на '. $num . "\n";
	return file_put_contents($file, $current, LOCK_EX);
}


















 ?>