<?php 
$post = $_POST;
$arr = [];
$file_test = 'test.txt';

//вводится пользователем $N
$N = (int) $post['number'];
//вызов функции записи в фаил
loadTitle($file_test, $N);
$i=0;
while ($N) {
	$bit = strlen(trim($i));
	$res = $i%$bit;
	if ($res === 0) {
		//запись данных в массив $arr
		array_push($arr, $i);
		//вызов функции записи в фаил
		loadFile($file_test, $i, $bit);
	 	// echo "число $i Остаток $res <br>";
	 	$N--;
	 }		
	$i++;
}

// var_dump($arr);
//функция записи заголовка в фаил
function loadTitle($file, $number){
	$current = file_get_contents($file);
	$current .= 'результат выполнения кода для N = ' . $number . "\n";
	return file_put_contents($file, $current, LOCK_EX);
}
//функция записи результата в фаил
function loadFile($file, $number, $bit){
	$current = file_get_contents($file);
	$current .= 'Число ' . $number . ' делим на '. $bit . "\n";
	return file_put_contents($file, $current, LOCK_EX);
}


















 ?>