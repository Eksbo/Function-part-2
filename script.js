'use script'
// Дана функция, проверяющая числа на простоту:
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100. 

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }
// let arr = [];
// for (let k =1; k <= 100 ; k ++)
// {

//     if (isPrime(k))
//     {
//         arr.push(k)
//     }
// }
// document.write(arr)

// Дана функция getDigitsSum, 
// которая параметром принимает целое число и возвращает сумму его цифр:
// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030,
//  сумма цифр которых равна 13. 

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }
// let arr = [] ;
// for ( let i = 1 ; i <= 2030 ; i ++ )
// {
//     if( getDigitsSum( i)  == 13 ) { arr.push( i ) };
// }
// document.write(arr)

// Пусть дан какой-то массив с числами, например, такой:
// [123, 456, 789]

// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. 
// То есть из нашего массива сделаем следующий:
// [321, 654, 987]

// Некий программист уже написал код, реализующий описанную задачу:
// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]

// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция. 

// let nums = [123, 456, 789];

// let result = [];

// function func (n) { return String(n).split('').reverse().join('')}

// for (let num of nums) {
// 	result.push(func(num));
// }
// console.log(result);


// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. 
// Некий программист уже написал решение задачи, вот оно:
// let num1 = 234;
// let num2 = 531;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }

// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным. 

// let num1 = 234;
// let num2 = 531;
// let sum = 0
//  function dig ( n )
//  { 

//     n = String(num1).split('');
//     for (let k of n)
//     {
//         sum += Number(k)
//     }
//     return sum
//  }

//  function func(a , b)
//  {
//     let c = a/b
//  if (c == 1 )
// {
//  console.log('суммы цифр совпадают');
// } 
// else
// {
//   console.log('суммы цифр не совпадают');
// }
// }


// Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль
//  нетривиальные делители этих чисел (то есть исключая число 1 и само число). 
//  Некий программист уже написал решение задачи:
// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(num);
// 		}
// 	}
	
// 	return result;
// }

// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его.
//  При запуске оказалось, что код работает как-то не так. 
// Видимо, в функции getDivisors была допущена какая-то ошибка.

// Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, 
// что она работает корректно после вашей правки. После того, как вы убедитесь в 
// корректности работы функции - проверьте полный код решения задачи. 

// let nums = [12, 24, 35, 14];
// let result = [];
// function getDivisors(num) 
// {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result;
// }
// for (let num1 of nums) {
// 	console.log(getDivisors(num1));
// }

// Дана функция getSum, находящая сумму элементов переданного массива:
// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// Дана функция getDigits, возвращающая массив цифр числа:
// function getDigits(num) {
// 	return String(num).split('');
// }

// Используя комбинацию приведенных функций найдите сумму цифр числа 12345. 
// let num1= 12345 ;
// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }
// function getDigits(num) {
// 	return String(num).split('');
// }
// console.log(getSum(getDigits(num1)));

// Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое 
// (сумма делить на количество) делителей числа и вывести результат на экран.
//  Некий программист уже написал решение задачи:
// console.log( getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum = elem;
// 	}
	
// 	return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i > num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// }

// Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его.
//  При запуске оказалось, что код работает неверно.

// Найдите и исправьте ошибки программиста. Потестируйте отдельно работу всех функций, 
// чтобы убедиться, что они работают корректно после ваших правок. 
// После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи. 

// Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
//     return result ;
// }
// console.log(getDivisors(24));
// console.log( getAvg(getDivisors(24)));


// let arr = [12, 19, 28, 13, 14, 345 ,16 ,15];
// let result = [];
// function arrDigit(n){
//     return String(n).split('') ;
// }
// function sumDigit(arr){
//     let sum = 0 ;
//     for( let elDig of arr){
//         sum += Number(elDig)
//     }
//     return sum ;
// }
// function ok(num){
//     return num >= 1 && num <= 9
// }
// for (let i of arr){
//     if(ok (sumDigit(arrDigit(i)) )){
//         result.push(i)

//     }
// }


// console.log(result);