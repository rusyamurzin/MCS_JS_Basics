let money = parseInt(prompt('Сколько у вас денег?'))
let apples = parseInt(prompt('Сколько у вас яблок?')) 
let breads= parseInt(prompt('Сколько у вас батонов хлеба?')) 
let priceApple = parseInt(prompt('Сколько стоит 1 яблоко?')) 
let priceBread = parseInt(prompt('Сколько стоит 1 хлеб?'))
let sum = money - apples*priceApple - breads*priceBread
let res = sum > 0

document.body.innerHTML = res 