
let money = parseInt(prompt('Сколько у вас денег?'));
let apples = parseInt(prompt('Сколько у вас яблок?')) ;
let breads= parseInt(prompt('Сколько у вас батонов хлеба?')) ;
let priceApple = parseInt(prompt('Сколько стоит 1 яблоко?')) ;
let priceBread = parseInt(prompt('Сколько стоит 1 хлеб?'));


function haveEnough(money, apples, breads, priceApple, priceBread){
	let sum =  money - apples*priceApple - breads*priceBread;
	let res = sum > 0;
	res ? console.log('Вам хватает денег на покупки') : console.log('Вам не хватает денег');
}

haveEnough(money, apples, breads, priceApple, priceBread);